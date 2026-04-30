import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carouselData = [
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop", 
    title: "Clean Toilet",
    desc: "100% Hygienic Restrooms"
  },
  {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop",
    title: "Modern Counter",
    desc: "Fast & Friendly Service"
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    title: "Chill Sitting Area",
    desc: "Perfect for Friend Hangouts"
  },
  {
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
    title: "Hygiene First",
    desc: "Safe & Clean Environment"
  },
  {
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=600&auto=format&fit=crop",
    title: "Premium Quality",
    desc: "Best Street Food in Surat"
  },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mb-16 px-6">
        <div className="flex items-center gap-3 text-red-500 mb-2">
          <CheckCircle2 size={18} />
          <span className="text-xs font-black uppercase tracking-[0.2em]">Our Facilities</span>
        </div>
        <h2 className="font-montserrat text-4xl font-black tracking-tight text-black uppercase leading-none">
          Experience <br /><span className="text-red-500">The Comfort</span>
        </h2>
        <div className="mt-4 h-1 w-24 bg-yellow-400"></div>
      </div>

      <div className="relative w-full px-4">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={0}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="h-[400px] w-full !overflow-visible"
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index} className="!w-[240px] !flex items-center justify-center">
              {({ isActive }) => (
                <motion.div 
                  animate={{ 
                    scale: isActive ? 1.4 : 0.85,
                    filter: isActive ? 'grayscale(0) blur(0px)' : 'grayscale(1) blur(2px)',
                    opacity: isActive ? 1 : 0.4
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="h-64 w-full overflow-hidden rounded-[40px] border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] transition-shadow duration-500 slide-content"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover" 
                  />
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Floating Navigation Buttons */}
        <div className="absolute top-1/2 left-0 z-40 flex w-full -translate-y-1/2 justify-between px-2 pointer-events-none">
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-90 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:scale-90 transition-transform"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Synced Text Content */}
        <div className="mt-20 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="text-center"
            >
              <h3 className="font-montserrat text-3xl font-black text-black uppercase tracking-tighter">
                {carouselData[activeIndex].title}
              </h3>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.3em] text-red-500">
                {carouselData[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="mt-8 flex gap-2">
            {carouselData.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? 'w-10 bg-black' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


