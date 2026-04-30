import { motion } from 'motion/react';
import { Utensils } from 'lucide-react';

const menuItems = [
  {
    name: "Veg Manchurian",
    desc: "Spicy & crispy vegetable balls in thick gravy.",
    img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200&auto=format&fit=crop",
    price: "₹120"
  },
  {
    name: "Hakka Noodles",
    desc: "Wok-tossed noodles with garden fresh veggies.",
    img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=200&auto=format&fit=crop",
    price: "₹110"
  },
  {
    name: "Fried Rice",
    desc: "Classic comfort: Basmati rice with veggies.",
    img: "https://images.unsplash.com/photo-1544436484-9993389bf94f?q=80&w=200&auto=format&fit=crop",
    price: "₹100"
  },
  {
    name: "Paneer Chilli",
    desc: "Soft paneer cubes in spicy schezwan sauce.",
    img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=200&auto=format&fit=crop",
    price: "₹140"
  },
  {
    name: "Spring Rolls",
    desc: "Crispy rolls filled with shredded vegetables.",
    img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=200&auto=format&fit=crop",
    price: "₹90"
  },
  {
    name: "Veg Crispy",
    desc: "Assorted vegetables fried to perfection.",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=200&auto=format&fit=crop",
    price: "₹130"
  },
  {
    name: "Jeera Rice",
    desc: "Fluffy rice tempered with cumin seeds.",
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=200&auto=format&fit=crop",
    price: "₹80"
  },
  {
    name: "Veg Schezwan",
    desc: "Extra spicy stir-fry for the bold ones.",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ef4a4f8?q=80&w=200&auto=format&fit=crop",
    price: "₹120"
  }
];

export default function Menu() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="font-montserrat text-3xl font-black tracking-tight text-black uppercase">
            Our <span className="text-red-500">Specials</span>
          </h2>
          <div className="mt-2 h-1 w-16 bg-yellow-400"></div>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Utensils size={24} className="text-red-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-center gap-4 rounded-3xl border-2 border-transparent p-2 transition-all hover:border-black hover:bg-red-50"
          >
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <img src={item.img} alt={item.name} className="h-full w-full object-cover grayscale-[0.3] transition-all group-hover:grayscale-0" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-montserrat text-sm font-black text-black uppercase tracking-tight">{item.name}</h4>
                <span className="text-xs font-bold text-red-500">{item.price}</span>
              </div>
              <p className="mt-1 text-[10px] font-medium leading-relaxed text-gray-500 line-clamp-2">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block rounded-full border-2 border-black bg-gray-50 px-6 py-2">
           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Deliciousness Guaranteed</p>
        </div>
      </div>
    </section>
  );
}
