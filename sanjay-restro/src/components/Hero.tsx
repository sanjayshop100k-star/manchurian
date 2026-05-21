import { motion } from 'motion/react';
import { UtensilsCrossed, Soup, Utensils, Sparkles } from 'lucide-react';

export default function Hero() {
  const bobbingTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  };

  const wiggleAnimation = {
    rotate: [0, -2, 2, -2, 0],
    y: [0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white pt-20 pb-32">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/30 blur-3xl"></div>

      {/* Main Container */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        
        {/* Top Text Label */}
        <motion.div
          animate={wiggleAnimation}
          className="relative z-30 mb-8 rounded-2xl border-4 border-black bg-white px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <span className="font-montserrat text-lg font-black tracking-tight text-black">
            Hello, I am Sanjay
          </span>
          <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-r-4 border-b-4 border-black bg-white"></div>
        </motion.div>

        {/* Central Character & Floating Icons */}
        <div className="relative h-80 w-80">
          {/* Bobbing Manchurian Bowl */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ ...bobbingTransition, delay: 0.2 }}
            className="absolute -top-4 -right-4 z-30 h-20 w-20 rounded-full border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]"
          >
            <Soup size={40} className="text-red-500" />
          </motion.div>

          {/* Bobbing Spoon */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ ...bobbingTransition, delay: 0.5 }}
            className="absolute top-1/2 -left-8 z-30 h-16 w-16 -translate-y-1/2 rounded-full border-4 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]"
          >
            <Utensils size={32} className="text-yellow-500" />
          </motion.div>

          {/* Bobbing Chopsticks (UtensilsCrossed) */}
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
            transition={{ ...bobbingTransition, delay: 0.8 }}
            className="absolute -bottom-4 right-0 z-30 h-16 w-16 rounded-full border-4 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <UtensilsCrossed size={32} className="text-black" />
          </motion.div>

          {/* Main Avatar Circle */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-black bg-gray-50 shadow-[15px_15px_0px_0px_rgba(0,0,0,0.05)]"
          >
            <img 
              src="/sanjay_photo.jpg" 
              alt="Sanjay Avatar"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
          
          {/* Decorative Sparkles */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-10 left-0 text-yellow-400"
          >
            <Sparkles size={24} />
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          animate={wiggleAnimation}
          className="mt-16 w-full max-w-xs"
        >
          <button className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-full border-4 border-black bg-red-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform active:translate-x-1 active:translate-y-1 active:shadow-none">
            <span className="relative z-10 font-montserrat text-lg font-black tracking-tighter text-white uppercase">
              Eat, Laugh, & Enjoy With Us 
            </span>
          </button>
        </motion.div>

        {/* Section Secondary Text */}
        <div className="mt-12 text-center">
          <p className="font-montserrat text-xs font-black uppercase tracking-[0.3em] text-gray-400">
            Sanjay Restro // Since 2026
          </p>
        </div>

      </div>
    </section>
  );
}
