// "use client";

// export default function LocationSection() {
//   return (
//     <section className="py-16 bg-[#0b1d3d] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-8 text-white">
//           OUR OFFICE LOCATION
//         </h2>

//         <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-5xl mx-auto">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.7929077542913!2d89.23751159053505!3d24.006844305705968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b5b4a35c9e7%3A0xcb692fab6b815d87!2sCodeNext%20IT%20Solution!5e0!3m2!1sen!2sbd!4v1685784652503!5m2!1sen!2sbd"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="w-full"
//             title="Pabna Online Office Location Map"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

export default function LocationSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading & Description Area */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest mb-4 text-slate-900 drop-shadow-sm">
            Our Office Location
          </h2>
          <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed">
            Drop by our office to discuss your connectivity needs. We are always here to provide you with seamless internet solutions and dedicated support.
          </p>
        </div>

        {/* Full Width Map Container with Softer Animated Shadow */}
        <div className="relative max-w-5xl mx-auto group">

          {/* Softer Animated Glowing Box Shadow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-300 rounded-[2.5rem] blur-2xl opacity-40 animate-pulse pointer-events-none transition-opacity duration-700 group-hover:opacity-70"></div>

          {/* Main Map Frame */}
          <div className="relative bg-white p-2.5 rounded-[2rem] shadow-xl ring-1 ring-slate-200/50 z-10 transition-shadow duration-500 group-hover:shadow-2xl">
            <div className="rounded-[1.5rem] overflow-hidden bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.7929077542913!2d89.23751159053505!3d24.006844305705968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b5b4a35c9e7%3A0xcb692fab6b815d87!2sCodeNext%20IT%20Solution!5e0!3m2!1sen!2sbd!4v1685784652503!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full relative z-10 grayscale-[15%] contrast-100 saturate-100 transition-all duration-500 group-hover:grayscale-0"
                title="Pabna Online Office Location Map"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}