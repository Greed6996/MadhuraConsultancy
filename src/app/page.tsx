"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, animate, AnimatePresence } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { LampContainer } from "@/components/ui/lamp";
import { RainingLettersBg } from "@/components/ui/raining-letters-bg";
import {
  MonitorPlay,
  BrainCircuit,
  PenTool,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

function StatCounter({ value, text }: { value: number; text: string }) {
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => {
        const controls = animate(0, value, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (v) => setCount(Math.round(v)),
        });
        return () => controls.stop();
      }}
      className="flex flex-col items-center justify-center p-6 text-center space-y-2"
    >
      <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-amber">
        {count}
        {value >= 100 ? "+" : ""}
        {value === 100 ? "%" : ""}
      </h3>
      <p className="text-sm md:text-base text-gray-300 max-w-[150px] leading-tight">
        {text}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (loading) {
      const duration = 800;
      const intervalTime = 20;
      const steps = duration / intervalTime;
      let step = 0;
      
      const interval = setInterval(() => {
        step++;
        setProgress(Math.min(100, Math.floor((step / steps) * 100)));
        if (step >= steps) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
        }
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const typewriterWords = [
    { text: "We" },
    { text: "Teach." },
    { text: "We" },
    { text: "Build." },
    { text: "We" },
    { text: "Elevate.", className: "text-brand-amber dark:text-brand-amber" },
  ];

  const services = [
    {
      title: "IT & Computer Teaching",
      desc: "From zero to confident. Our structured curriculum covers computer fundamentals, operating systems, networking, internet, and cybersecurity — built for complete beginners.",
      icon: <MonitorPlay className="w-8 h-8 mb-4 text-brand-amber" />,
    },
    {
      title: "Artificial Intelligence",
      desc: "Understand, apply, and automate. We demystify AI tools, prompt engineering, and workflow automation for individuals and small businesses.",
      icon: <BrainCircuit className="w-8 h-8 mb-4 text-brand-amber" />,
    },
    {
      title: "Designing",
      desc: "Pixels with purpose. Learn UI/UX, graphic design, and motion — or hire us to design for you.",
      icon: <PenTool className="w-8 h-8 mb-4 text-brand-amber" />,
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-brand-navy">
      <AnimatePresence>
        {loading && (
          <>
            <motion.div
              key="bg"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="fixed inset-0 z-[90] bg-brand-navy pointer-events-none"
            />
            <motion.div
              key="content"
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
            >
              <motion.div
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 text-lg mb-2"
              >
                Welcome to
              </motion.div>
              
              <motion.div 
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 mb-8 pointer-events-auto"
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg transform rotate-45 bg-gradient-to-tr from-brand-amber to-yellow-300 flex items-center justify-center"
                >
                  <div className="w-6 h-6 bg-brand-navy rounded-sm transform -rotate-45" />
                </motion.div>
                <motion.span 
                  className="font-heading font-bold text-5xl md:text-6xl tracking-tight text-white inline-block origin-center"
                >
                  Madhura<span className="text-brand-amber">.</span>
                </motion.span>
              </motion.div>

              <motion.div 
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-64 h-1 bg-white/10 rounded-full overflow-hidden"
              >
                <motion.div 
                  className="h-full bg-brand-amber"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>
              <motion.div 
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-brand-amber text-sm font-medium"
              >
                {progress}%
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RainingLettersBg />
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div 
              className="w-8 h-8 rounded transform rotate-45 bg-gradient-to-tr from-brand-amber to-yellow-300 flex items-center justify-center transition-transform duration-300 group-hover:rotate-90"
            >
              <div className="w-4 h-4 bg-brand-navy rounded-sm transform -rotate-45" />
            </div>
            <span 
              className="font-heading font-bold text-xl tracking-tight text-white inline-block origin-center"
            >
              Madhura<span className="text-brand-amber">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-gray-300">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-brand-amber transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <button className="bg-brand-amber hover:bg-brand-amber-hover text-brand-navy font-semibold px-6 py-2.5 rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 duration-200">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-brand-amber py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="bg-brand-amber text-brand-navy font-semibold px-6 py-3 rounded-full mt-2 w-full text-center">
              Enroll Now
            </button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative z-10 w-full min-h-[100svh] flex flex-col justify-center">
        <LampContainer>

          <motion.div
            initial={{ opacity: 0, y: 20, boxShadow: "0px 0px 0px rgba(245,166,35,0)" }}
            animate={{ opacity: 1, y: 0, boxShadow: "0px 0px 40px rgba(245,166,35,0.3)" }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full border border-brand-amber/30 bg-white/5 backdrop-blur-sm mb-4"
          >
            <span className="text-sm font-medium text-brand-amber drop-shadow-[0_0_8px_rgba(245,166,35,0.8)]">
              Where Learning Meets the Future.
            </span>
          </motion.div>

          <TypewriterEffectSmooth
            words={typewriterWords}
            className="my-0"
            cursorClassName="bg-brand-amber"
          />

          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-lg md:text-xl font-medium tracking-tight text-transparent max-w-2xl"
          >
            IT Education | Artificial Intelligence | Creative Design — all under
            one roof in Bongaigaon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto z-50 relative"
          >
            <Link
              href="#services"
              className="bg-brand-amber text-brand-navy font-semibold px-8 py-3.5 rounded-full transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,166,35,0.3)] duration-300 flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="bg-transparent text-white border border-white/20 font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white/5 hover:border-white/40 duration-300 flex items-center justify-center"
            >
              Talk to Us
            </Link>
          </motion.div>
        </LampContainer>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>
      {/* SERVICES SECTION */}
      <section id="services" className="relative z-10 py-24 px-6 bg-brand-charcoal/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Our Expertise
            </h2>
            <div className="w-20 h-1 bg-brand-amber mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group p-8 rounded-2xl bg-[#151D2C] border border-white/5 hover:border-brand-amber/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {service.icon}
                <h3 className="text-xl font-heading font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                <Link
                  href="#"
                  className="text-brand-amber font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MADHURA - STATS BAR */}
      <section className="relative z-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5">
            <StatCounter value={500} text="Students Trained" />
            <StatCounter value={3} text="Expert-Led Tracks" />
            <StatCounter value={100} text="Practical Curriculum" />
            <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-amber leading-tight">
                #1
              </h3>
              <p className="text-sm md:text-base text-gray-300 max-w-[150px] leading-tight">
                Guwahati's AI-Ready Institute
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Rooted in Northeast, <br className="hidden md:block" />
                <span className="text-brand-amber">Global in Vision.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                Madhura Consultancy was founded with one belief: technology
                education in Northeast India must be world-class.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We combine structured academic teaching with real-world AI and
                design skills — because knowing the theory is only half the
                story. We build confidence, portfolios, and futures.
              </p>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-tr from-[#151D2C] to-brand-navy border border-white/10 flex items-center justify-center"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-amber via-transparent to-transparent" />
              {/* Abstract Geo Shapes */}
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-brand-amber rounded-full opacity-20 mix-blend-screen filter blur-xl animate-pulse" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-10 filter blur-lg" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-brand-amber/50 rounded-lg transform rotate-12" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="relative z-10 py-24 px-6 bg-[#0B0F19]/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Student Stories
            </h2>
            <div className="w-20 h-1 bg-brand-amber mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[#151D2C]/50 border border-white/5 relative overflow-hidden"
              >
                {/* Skeleton UI */}
                <div className="animate-pulse flex space-x-4 mb-6">
                  <div className="rounded-full bg-white/5 h-12 w-12"></div>
                  <div className="flex-1 space-y-3 py-1">
                    <div className="h-2 bg-white/5 rounded w-3/4"></div>
                    <div className="h-2 bg-white/5 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="animate-pulse space-y-3">
                  <div className="h-2 bg-white/5 rounded"></div>
                  <div className="h-2 bg-white/5 rounded"></div>
                  <div className="h-2 bg-white/5 rounded w-5/6"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative z-10 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-[#1A253A] to-brand-navy animate-gradient-x" />
        <div className="container mx-auto max-w-4xl relative text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
            Ready to future-proof your skills?
          </h2>
          <button className="bg-brand-amber hover:bg-brand-amber-hover text-brand-navy font-bold text-lg px-10 py-4 rounded-full transition-transform hover:-translate-y-1 duration-300 flex items-center justify-center gap-2 mx-auto">
            Enroll Today <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative z-10 bg-[#070A11] py-12 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded transform rotate-45 bg-gradient-to-tr from-brand-amber to-yellow-300 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#070A11] rounded-sm transform -rotate-45" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-white">
                Madhura<span className="text-brand-amber">.</span>
              </span>
              <p className="text-xs text-gray-500 mt-1">Where Learning Meets the Future.</p>
            </div>
          </div>

          <div className="flex gap-6 text-sm font-medium text-gray-400">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand-amber transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-amber hover:text-brand-navy transition-colors font-bold text-[10px] tracking-tighter">
              IG
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-amber hover:text-brand-navy transition-colors font-bold text-[10px] tracking-tighter">
              IN
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-amber hover:text-brand-navy transition-colors font-bold text-[10px] tracking-tighter">
              WA
            </Link>
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl mt-12 pt-6 border-t border-white/5 text-center text-sm text-gray-600">
          <p>© 2025 Madhura Consultancy. Guwahati, Assam.</p>
        </div>
      </footer>
    </main>
  );
}
