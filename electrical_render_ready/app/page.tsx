"use client";

import { motion } from "framer-motion";
import { Bolt, ShieldCheck, PhoneCall, Wrench, Building2, Home, Factory } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-sky-50" />
        <div className="container relative py-20 sm:py-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow-soft mb-6">
              <Bolt className="w-5 h-5" />
              <span className="text-sm font-medium">Since 2019 • Licensed & Insured</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              Premium Electrical Solutions for <span className="text-brand">Homes</span> & Businesses
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              From new installations to emergency repairs, we deliver reliable, future‑ready electrical work with a safety‑first approach.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#contact" className="btn btn-primary"><PhoneCall className="w-5 h-5" /> Get a Free Quote</a>
              <a href="#services" className="btn bg-white text-gray-900 hover:bg-gray-100">View Services</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="container py-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: ShieldCheck, title: "Safety First", text: "IEC-compliant materials & QA checklists." },
          { icon: Wrench, title: "Skilled Team", text: "Certified electricians with 5+ years avg. exp." },
          { icon: Bolt, title: "Rapid Support", text: "Same-day emergency callouts available." },
        ].map(({ icon: Icon, title, text }, i) => (
          <motion.div key={title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="card">
            <div className="flex items-center gap-3">
              <Icon className="w-6 h-6 text-brand" />
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-2 text-gray-600">{text}</p>
          </motion.div>
        ))}
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <div className="container py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Services We Offer</h2>
            <p className="text-gray-600 mt-2">End‑to‑end electrical solutions for every segment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Home, title: "Residential", items: ["Wiring & Rewiring", "Smart Home Setup", "Panel Upgrades"] },
              { icon: Building2, title: "Commercial", items: ["Office Fit‑outs", "Emergency Lighting", "Maintenance AMC"] },
              { icon: Factory, title: "Industrial", items: ["MCC Panels", "Earthing Systems", "Energy Audits"] },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="card">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-6 h-6 text-brand" />
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative">
        <div className="container">
          <div className="card flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">Need an electrician today?</h3>
              <p className="text-gray-600">We offer quick estimates and on‑site visits within 24 hours.</p>
            </div>
            <a href="#contact" className="btn btn-primary"><PhoneCall className="w-5 h-5" /> Call / WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50">
        <div className="container py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Get a Free Quote</h2>
            <p className="text-gray-600 mt-2">Tell us your requirement and we’ll call you back</p>
          </div>
          <form className="max-w-xl mx-auto card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="Full Name" className="rounded-2xl border p-3" required />
              <input type="tel" placeholder="Phone Number" className="rounded-2xl border p-3" required />
              <input type="email" placeholder="Email (optional)" className="rounded-2xl border p-3 sm:col-span-2" />
              <textarea placeholder="Project details" className="rounded-2xl border p-3 sm:col-span-2" rows={4} />
            </div>
            <button className="btn btn-primary mt-4" type="button">Send Request</button>
            <p className="text-xs text-gray-500 mt-2">This demo form doesn’t send data. Replace with your backend or form tool.</p>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">© {new Date().getFullYear()} Mittal Electricals. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}
