"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-100 md:scale-y-125 items-center justify-center isolate z-0 translate-y-32 md:translate-y-24">
        <motion.div
          initial={{ opacity: 0.5, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            WebkitMaskImage: `linear-gradient(to bottom, black 10%, transparent 100%)`,
            maskImage: `linear-gradient(to bottom, black 10%, transparent 100%)`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[14rem] md:w-[30rem] origin-right bg-gradient-conic from-brand-amber via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            WebkitMaskImage: `linear-gradient(to bottom, black 10%, transparent 100%)`,
            maskImage: `linear-gradient(to bottom, black 10%, transparent 100%)`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[14rem] md:w-[30rem] origin-left bg-gradient-conic from-transparent via-transparent to-brand-amber text-white [--conic-position:from_290deg_at_center_top]"
        >
        </motion.div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-0 z-50 w-full h-full pointer-events-none" style={{ clipPath: "inset(calc(50% - 7rem) 0 0 0)" }}>
          <div className="absolute top-1/2 left-1/2 z-50 h-36 w-[14rem] md:w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-amber opacity-30 blur-3xl"></div>
          <motion.div
            initial={{ scaleX: 0.5 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 z-30 h-36 w-[10rem] md:w-[16rem] -translate-x-1/2 -translate-y-[6rem] rounded-full bg-yellow-400 opacity-50 blur-2xl origin-center"
          ></motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0.5 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[14rem] md:w-[30rem] origin-center -translate-y-[7rem] bg-yellow-300 opacity-70"
        >
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-full flex justify-center origin-bottom">
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white/90 tracking-widest uppercase">
              Welcome
            </h1>
          </div>
        </motion.div>

      </div>

      <div className="relative z-50 flex -translate-y-48 md:-translate-y-56 lg:-translate-y-64 flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};
