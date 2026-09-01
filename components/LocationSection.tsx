"use client";

export default function LocationSection() {
  return (
    <section className="py-16 bg-[#0b1d3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider mb-8 text-white">
          OUR OFFICE LOCATION
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.7929077542913!2d89.23751159053505!3d24.006844305705968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b5b4a35c9e7%3A0xcb692fab6b815d87!2sCodeNext%20IT%20Solution!5e0!3m2!1sen!2sbd!4v1685784652503!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Pabna Online Office Location Map"
          />
        </div>
      </div>
    </section>
  );
}
