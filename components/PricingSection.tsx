"use client";

import { useState } from "react";
import { Cloud, CheckSquare, X, Send, Check } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Package 1",
    price: "500",
    bandwidth: "15 Mbps/s Bandwidth",
    youtube: "Youtube Speed 30 Mbps",
    facebook: "Facebook Speed 25 Mbps",
    movie: "Movie Server 25 Mbps",
    bdix: "BDIX 25 Mbps",
  },
  {
    id: 2,
    name: "Package 2",
    price: "800",
    bandwidth: "25 Mbps/s Bandwidth",
    youtube: "Youtube Speed 50 Mbps",
    facebook: "Facebook Speed 40 Mbps",
    movie: "Movie Server 50 Mbps",
    bdix: "BDIX 50 Mbps",
  },
  {
    id: 3,
    name: "Package 3",
    price: "1000",
    bandwidth: "40 Mbps/s Bandwidth",
    youtube: "Youtube Speed 70 Mbps",
    facebook: "Facebook Speed 60 Mbps",
    movie: "Movie Server 70 Mbps",
    bdix: "BDIX 70 Mbps",
  },
  {
    id: 4,
    name: "Package 4",
    price: "1200",
    bandwidth: "50 Mbps/s Bandwidth",
    youtube: "Youtube Speed 100 Mbps",
    facebook: "Facebook Speed 80 Mbps",
    movie: "Movie Server 90 Mbps",
    bdix: "BDIX 90 Mbps",
  },
  {
    id: 5,
    name: "Package 5",
    price: "1500",
    bandwidth: "60 Mbps/s Bandwidth",
    youtube: "Youtube Speed 120 Mbps",
    facebook: "Facebook Speed 100 Mbps",
    movie: "Movie Server 110 Mbps",
    bdix: "BDIX 110 Mbps",
  },
  {
    id: 6,
    name: "Package 6",
    price: "2000",
    bandwidth: "80 Mbps/s Bandwidth",
    youtube: "Youtube Speed 150 Mbps",
    facebook: "Facebook Speed 120 Mbps",
    movie: "Movie Server 130 Mbps",
    bdix: "BDIX 130 Mbps",
  },
];

export default function PricingSection() {
  const [selectedPkg, setSelectedPkg] = useState<typeof packages[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedPkg(null);
    }, 3000);
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00c3ff]">
            PRICING
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
            No hidden charges!
          </h3>
          <p className="text-xl font-bold text-[#f06e53] mt-1">
            Choose your best plan.
          </p>
        </div>

        {/* 6 Orange Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#f06e53] rounded-3xl p-8 text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cloud icon & Package title */}
                <div className="flex flex-col items-center mb-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight">
                    {pkg.name.split(" ")[0]} <span className="font-extrabold">{pkg.name.split(" ")[1]}</span>
                  </h3>
                </div>

                {/* Features List */}
                <div className="space-y-3 my-6 text-sm sm:text-base font-medium">
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-4 h-4 shrink-0 fill-white text-[#f06e53]" />
                    <span>{pkg.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-4 h-4 shrink-0 fill-white text-[#f06e53]" />
                    <span>{pkg.youtube}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-4 h-4 shrink-0 fill-white text-[#f06e53]" />
                    <span>{pkg.facebook}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-4 h-4 shrink-0 fill-white text-[#f06e53]" />
                    <span>{pkg.movie}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckSquare className="w-4 h-4 shrink-0 fill-white text-[#f06e53]" />
                    <span>{pkg.bdix}</span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="text-center my-6">
                  <p className="text-2xl font-bold">
                    <sup className="text-base font-normal">৳</sup>
                    <span className="text-5xl font-black">{pkg.price}</span>
                    <span className="text-sm font-normal">/month</span>
                  </p>
                </div>
              </div>

              {/* Choose Plan Button */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedPkg(pkg)}
                  className="w-full py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#f06e53] font-extrabold text-sm tracking-wider transition-colors cursor-pointer"
                >
                  CHOOSE PLAN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Connection Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setSelectedPkg(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Request Received!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Thank you! Our Pabna Online representative will call you shortly on your provided phone number to set up your connection.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#00c3ff] uppercase tracking-wider">New Connection Request</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                    Apply for {selectedPkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    ৳{selectedPkg.price}/month • {selectedPkg.bandwidth}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#00c3ff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="017XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#00c3ff]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Address in Pabna</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Area, Road, House No. in Pabna"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#00c3ff]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00c3ff] hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Connection Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
