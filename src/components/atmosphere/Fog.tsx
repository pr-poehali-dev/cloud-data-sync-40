import { motion } from "framer-motion";

interface FogProps {
  className?: string;
}

export default function Fog({ className = "" }: FogProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -inset-1/4 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(40% 50% at 30% 40%, rgba(255,255,255,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: ["-10%", "12%", "-10%"], y: ["-5%", "8%", "-5%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -inset-1/4 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(45% 55% at 70% 60%, rgba(200,200,200,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ x: ["8%", "-12%", "8%"], y: ["6%", "-6%", "6%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
