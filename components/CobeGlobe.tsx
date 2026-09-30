"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Zap, Server, ShieldCheck } from "lucide-react";

export default function CyberGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 2. High-Res Map (Fixed Visibility Issue)
    const textureLoader = new THREE.TextureLoader();
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    // Changed to 'earth-dark.jpg' so landmasses are clearly visible
    const earthMap = textureLoader.load("https://unpkg.com/three-globe/example/img/earth-dark.jpg", (tex) => {
      tex.anisotropy = maxAnisotropy;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
    });

    // Upgraded to PhongMaterial for better light reflection and map clarity
    const earthGeo = new THREE.SphereGeometry(1.6, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      map: earthMap,
      color: 0x10b981,       // Cyber Emerald tint
      emissive: 0x022c22,    // Subtle deep emerald base glow
      specular: new THREE.Color(0x222222),
      shininess: 25,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // 3. Random Curved Fiber Arcs & Moving Glowing Balls
    const globeRadius = 1.6;
    const getCoord = (lat: number, lng: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(r * Math.sin(phi) * Math.cos(theta)),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };

    const arcsGroup = new THREE.Group();
    globeGroup.add(arcsGroup);

    const movingBalls: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; progress: number; speed: number }[] = [];

    // Create 150 random disconnected arcs across the globe
    for (let i = 0; i < 150; i++) {
      const lat1 = Math.random() * 180 - 90;
      const lng1 = Math.random() * 360 - 180;
      const lat2 = lat1 + (Math.random() * 80 - 40);
      const lng2 = lng1 + (Math.random() * 80 - 40);

      const p1 = getCoord(lat1, lng1, globeRadius);
      const p2 = getCoord(lat2, lng2, globeRadius);

      const distance = p1.distanceTo(p2);

      const midPoint = p1.clone().lerp(p2, 0.5).normalize().multiplyScalar(globeRadius + distance * 0.35);
      const curve = new THREE.QuadraticBezierCurve3(p1, midPoint, p2);

      // Faint fiber line
      const points = curve.getPoints(20);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.2, // Slightly more visible lines
        blending: THREE.AdditiveBlending,
      });
      const arcLine = new THREE.Line(lineGeo, lineMat);
      arcsGroup.add(arcLine);

      // Core Nodes
      const nodeGeo = new THREE.SphereGeometry(0.012, 8, 8);
      const nodeMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });

      const n1 = new THREE.Mesh(nodeGeo, nodeMat);
      n1.position.copy(p1);
      arcsGroup.add(n1);

      const n2 = new THREE.Mesh(nodeGeo, nodeMat);
      n2.position.copy(p2);
      arcsGroup.add(n2);

      // Moving Glowing Ball
      const ballGeo = new THREE.SphereGeometry(0.02, 12, 12);
      const ballMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const ballMesh = new THREE.Mesh(ballGeo, ballMat);
      arcsGroup.add(ballMesh);

      movingBalls.push({
        mesh: ballMesh,
        curve: curve,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
      });
    }

    // 4. Outer Atmospheric Halo Glow
    const haloGeo = new THREE.SphereGeometry(1.72, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x059669,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloMesh);

    // Light Setup (Boosted to make the map visible)
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5); // Increased ambient light
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x10b981, 3);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // 5. Smooth Interaction (Drag & Auto-Rotate)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotationVelocity = { x: 0, y: 0.0025 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      globeGroup.rotation.y += deltaX * 0.006;
      globeGroup.rotation.x += deltaY * 0.006;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    container.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // 6. Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isDragging) {
        globeGroup.rotation.y += rotationVelocity.y;
        globeGroup.rotation.x += rotationVelocity.x;
      }

      movingBalls.forEach((ball) => {
        ball.progress += ball.speed;
        if (ball.progress >= 1) ball.progress = 0;

        const currentPos = ball.curve.getPoint(ball.progress);
        ball.mesh.position.copy(currentPos);
      });

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      container.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      earthMap.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center mx-auto">
      {/* Background CSS Glow */}
      <div className="absolute inset-0 rounded-full bg-[#0044ff]/15 blur-[80px] pointer-events-none" />

      {/* 3D Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing z-10 flex items-center justify-center mix-blend-screen"
      />

      {/* Floating Info Toolboxes with Translate Floating Animations */}
      <div className="absolute top-16 left-0 z-30 bg-slate-950/90 backdrop-blur-xl border border-emerald-500/30 px-3.5 py-2 rounded-xl flex items-center gap-3 shadow-xl shadow-emerald-500/10 animate-float-1 transition-transform hover:scale-105">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
          <Zap className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">BDIX Speed</p>
          <p className="text-xs font-black text-white">Up to 100 Mbps</p>
        </div>
      </div>

      <div className="absolute bottom-8 right-0 z-30 bg-slate-950/90 backdrop-blur-xl border border-teal-500/30 px-3.5 py-2 rounded-xl flex items-center gap-3 shadow-xl shadow-teal-500/10 animate-float-2 transition-transform hover:scale-105">
        <div className="w-7 h-7 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 border border-teal-500/20">
          <Server className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">FTP Servers</p>
          <p className="text-xs font-black text-white">10+ Movie Servers</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 z-30 bg-slate-950/90 backdrop-blur-xl border border-emerald-500/30 px-3.5 py-2 rounded-xl flex items-center gap-3 shadow-xl shadow-emerald-500/10 animate-float-3 transition-transform hover:scale-105">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Support</p>
          <p className="text-xs font-black text-white">24/7 Dedicated</p>
        </div>
      </div>
    </div>
  );
}