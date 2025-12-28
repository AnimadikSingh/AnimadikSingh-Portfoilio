import React, { Suspense } from 'react';
import { Scene } from './components/Scene';
import { Overlay } from './components/Overlay';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="flex items-center justify-center h-full text-white/50">Loading Experience...</div>}>
          <Scene />
        </Suspense>
      </div>

      {/* UI Content Layer */}
      <main className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden scroll-smooth">
        <Overlay />
      </main>
    </div>
  );
};

export default App;