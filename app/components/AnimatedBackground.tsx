import React from 'react';

const AnimatedBackground: React.FC = () => {

    return (
    <main>
        <div className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden blur-[10vw] saturate-150">
                <div className="absolute h-full w-full animate-orbit">
                    <div className="absolute left-[25%] top-[25%] w-[50%] rounded-full bg-sky-500 pb-[50%]"></div>
                </div>
                <div className="animate-orbit2 absolute h-1/2 w-full">
                  <div className="absolute left-[25%] top-[20%] w-[40%] rounded-full bg-fuchsia-500 pb-[40%]"></div>
                </div>
                <div className="animate-orbit3 absolute h-full w-full">
                  <div className="absolute left-[30%] top-[50%] w-[30%] rounded-full bg-cyan-400 pb-[30%]"></div>
                </div>
                <div className="animate-orbit4 absolute h-full w-1/2">
                  <div className="absolute left-[25%] top-[25%] w-[30%] rounded-full bg-white pb-[30%]"></div>
                </div>
          </div>
          <h2 className="relative text-2xl font-bold text-white">Work in progress</h2>
        </div>

    </main>
  );
};

export default AnimatedBackground;
