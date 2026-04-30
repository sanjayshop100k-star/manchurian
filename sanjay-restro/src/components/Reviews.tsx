import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'motion/react';
import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const allReviews = [
  {
    id: 1,
    name: "Rahul",
    text: "Best Manchurian in Surat! The flavor is unmatched and it's always served piping hot.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya",
    text: "Super hygienic and tasty. I love how clean the cart is. Definitely my go-to spot.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Amit",
    text: "The Schezwan Fried Rice is a must-try. Spicy and authentic! Perfect balance.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Neha",
    text: "Chill place to hang out. Great service by Sanjay Sahu. Very friendly atmosphere.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Vikram",
    text: "Authentic Chinese street food. The dry chilly paneer is crispy and saucy. 10/10!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  }
];

export default function Reviews() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-montserrat text-2xl font-black tracking-tight text-black uppercase">
            Top <br /><span className="text-red-500">Reviews</span>
          </h2>
          <div className="mt-1 h-1 w-12 bg-yellow-400"></div>
        </div>
        <div className="flex items-center gap-1 text-red-500">
           <Star size={16} className="fill-red-500" />
           <span className="font-black text-lg">5.0</span>
        </div>
      </div>

      <div className="relative h-auto w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="reviews-swiper !pb-12"
        >
          {allReviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="relative overflow-hidden rounded-[32px] border-2 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {/* Horizontal Header */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-black">
                    <img src={review.avatar} alt={review.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-montserrat text-sm font-black text-black uppercase leading-none">{review.name}</h4>
                    <div className="mt-1 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Quote size={20} className="ml-auto text-red-500 opacity-20" />
                </div>

                {/* Review Text */}
                <p className="mt-4 text-xs font-medium leading-relaxed text-gray-500 line-clamp-3 italic">
                  "{review.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 text-center">
        <motion.a
          href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="inline-flex h-12 w-full max-w-xs items-center justify-center rounded-full border-2 border-black bg-red-500 px-6 font-montserrat text-sm font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          WRITE A REVIEW
        </motion.a>
      </div>
    </section>
  );
}


