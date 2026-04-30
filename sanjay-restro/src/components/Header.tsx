import { MoreVertical } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-[60] flex h-16 w-full items-center justify-between bg-white/80 px-6 backdrop-blur-md">
      <div className="flex h-10 w-10 items-center justify-center">
        <div className="h-6 w-6 rounded-md border-2 border-black bg-yellow-400 rotate-12 flex items-center justify-center">
           <span className="text-[10px] font-black leading-none -rotate-12">SR</span>
        </div>
      </div>
      
      <h1 className="font-montserrat text-lg font-black tracking-tighter text-black uppercase">
        Sanjay Restro
      </h1>
      
      <button className="flex h-10 w-10 items-center justify-center text-black">
        <MoreVertical size={20} />
      </button>
    </header>
  );
}
