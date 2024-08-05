"use client";

import { motion } from "framer-motion";

export default function UpFade({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: "30px", opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.6, ease: "backOut", delay: delay || 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
