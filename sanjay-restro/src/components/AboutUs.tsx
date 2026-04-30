import { MapPin, ChefHat, Sparkles } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-red-500">
            <ChefHat size={24} />
            <span className="font-bold uppercase tracking-widest text-xs">Our Story</span>
          </div>
          <h2 className="font-montserrat text-4xl font-black text-black leading-tight">
            The Legend of <br />
            <span className="text-red-500 underline decoration-yellow-400 decoration-4 underline-offset-8">Sanjay Sahu</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Welcome to <span className="font-bold text-black font-montserrat">Sanjay Restro</span>. 
            Founded by the culinary visionary <span className="font-semibold text-black">Sanjay Sahu</span>, 
            we have become a cornerstone of the Surat food scene. 
            We specialize in crafting the 
            <span className="font-bold text-red-500 italic"> best Manchurian and Chinese food in Surat</span>.
          </p>
          <p className="text-gray-600">
            Our mission is simple: to bring authentic, spicy, and soul-satisfying Indo-Chinese flavors 
            to your plate while providing a space where friends can chill and bond over great food.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl bg-yellow-50 p-6 flex flex-col gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-400 text-white">
                <Sparkles size={20} />
            </div>
            <h4 className="font-bold text-black">Fresh Quality</h4>
            <p className="text-xs text-gray-500">Only the best ingredients used daily.</p>
          </div>
          <div className="rounded-3xl bg-red-50 p-6 flex flex-col gap-2">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white">
                <MapPin size={20} />
            </div>
            <h4 className="font-bold text-black">Surat Local</h4>
            <p className="text-xs text-gray-500">Proudly serving Godadara area.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
