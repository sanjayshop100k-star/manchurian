/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import FAB from './components/FAB';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-yellow-200">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main className="mx-auto max-w-lg overflow-x-hidden">
            <Hero />
            <Carousel />
            <Menu />
            <AboutUs />
            <Reviews />
            <MapSection />
            
            {/* Footer */}
            <footer className="bg-gray-50 py-12 pb-32 text-center">
              <h3 className="font-montserrat text-lg font-bold text-black uppercase tracking-tighter">Sanjay Restro</h3>
              <p className="mt-2 text-sm text-gray-400">© 2026 Crafted with ❤️ in Surat</p>
              <div className="mt-6 flex justify-center gap-4 text-gray-300">
                <span className="text-xs uppercase tracking-widest">Quality</span>
                <span className="text-xs uppercase tracking-widest">•</span>
                <span className="text-xs uppercase tracking-widest">Taste</span>
                <span className="text-xs uppercase tracking-widest">•</span>
                <span className="text-xs uppercase tracking-widest">Chill</span>
              </div>
            </footer>
          </main>
          <FAB />
        </>
      )}
    </div>
  );
}

