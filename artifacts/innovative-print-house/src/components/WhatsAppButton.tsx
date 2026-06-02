import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "233243420953"; // MTN Ghana international format: +233 24 342 0953
  const message = encodeURIComponent("Hello! I'm interested in your printing services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary text-black rounded-full shadow-[0_0_20px_rgba(255,230,0,0.4)] hover:shadow-[0_0_30px_rgba(255,230,0,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing Outer Ring */}
      <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-75 pointer-events-none" />
      
      {/* WhatsApp Icon */}
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-current transition-transform duration-300 group-hover:rotate-12"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.22c5.507 0 9.99-4.478 9.99-9.985C22.007 6.476 17.519 2 12.012 2zm5.72 14.15c-.244.688-1.22 1.25-1.685 1.32-.422.062-.973.104-2.839-.63-2.385-.937-3.906-3.348-4.024-3.507-.12-.16-.967-1.282-.967-2.448 0-1.166.608-1.74.826-1.979.22-.24.478-.299.638-.299.16 0 .32.001.458.007.146.006.342-.056.536.41.2.478.68 1.658.74 1.777.06.12.1.258.02.417-.08.16-.12.259-.24.398-.12.139-.25.31-.358.41-.12.119-.245.249-.105.488.14.24.62.997 1.33 1.63.91.81 1.678 1.06 1.918 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.57-.18 1.258z" />
      </svg>
    </motion.a>
  );
}
