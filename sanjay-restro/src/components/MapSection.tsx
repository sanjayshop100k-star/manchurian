import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Navigation, Info } from 'lucide-react';

export default function MapSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white py-20 px-6">
      <div className="mb-12 text-center">
        <h2 className="font-montserrat text-3xl font-black tracking-tight text-black uppercase">Find Our Taste</h2>
        <div className="mx-auto mt-2 h-1 w-24 bg-red-500"></div>
      </div>

      {/* Map Container */}
      <div className="relative group">
        <div className="relative h-96 w-full overflow-hidden rounded-[40px] border-8 border-gray-50 shadow-2xl transition-transform duration-500 hover:shadow-red-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41702237305!2d72.752256!3d21.159462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0502758f8e02d%3A0xe54e565985b9b775!2sGodadara%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714227533000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale-[0.2]"
          ></iframe>

          {/* Trigger Button Overlay */}
          <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 rounded-full border-2 border-black bg-white px-6 py-3 font-montserrat text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] transition-transform active:scale-95"
            >
              <Info size={16} className="text-red-500" />
              View Location Details
            </button>
          </div>
          
          {/* Subtle instructions for interaction */}
          <div className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 text-[10px] font-bold text-gray-500 backdrop-blur-sm pointer-events-none">
            Use 2 fingers to pan
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="font-montserrat text-sm font-black text-black">GODADARA, SURAT</p>
        <p className="text-xs font-medium text-gray-400 mt-1 italic uppercase tracking-widest">Sunita Fashion Area</p>
      </div>

      {/* Custom Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 z-[101] w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[40px] border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full border-b-4 border-black">
                <img 
                  src="/sanjay_photo.jpg" 
                  alt="Sanjay Restro Cart" 
                  className="h-full w-full object-cover grayscale-[0.1]"
                />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-90"
                >
                  <X size={20} />
                </button>
                <div className="absolute -bottom-6 left-8 flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-black bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin size={24} />
                </div>
              </div>

              <div className="p-8 pt-10">
                <h3 className="font-montserrat text-2xl font-black tracking-tight text-black uppercase leading-tight">
                  Sanjay Restro <br />
                  <span className="text-red-500 font-bold text-lg">Reach Us</span>
                </h3>
                
                <p className="mt-4 text-sm font-medium leading-relaxed text-gray-500">
                  Located at <span className="font-bold text-black uppercase">Sunita Fashion, Godadara, Surat.</span> Come visit us for the most authentic Manchurian in town!
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href="https://share.google/iRjuZWIrJsft8ObJA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-16 w-full items-center justify-center gap-3 rounded-full border-4 border-black bg-red-500 font-montserrat text-lg font-black text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-red-600 active:translate-x-1 active:translate-y-1 active:shadow-none"
                  >
                    <Navigation size={20} />
                    GET DIRECTIONS
                  </a>
                  
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center">
                    Opens Daily: 5 PM - 11 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
