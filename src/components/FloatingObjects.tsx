
import React from 'react';

const FloatingObjects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* College Building Icon */}
      <div className="absolute top-1/4 left-1/6 w-16 h-16 bg-tertiary rounded-lg animate-float opacity-70">
        <div className="w-full h-2/3 bg-tertiary relative top-0 rounded-t-lg">
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-neutral rounded-t-md"></div>
        </div>
        <div className="w-full h-1/3 bg-tertiary/80 relative bottom-0 rounded-b-lg"></div>
      </div>
      
      {/* Book Icon */}
      <div className="absolute top-1/3 right-1/5 w-12 h-14 animate-bounce-gentle opacity-70">
        <div className="w-full h-full bg-secondary rounded relative">
          <div className="absolute w-1/3 h-1/2 bg-neutral top-1/4 left-1/3 transform -rotate-12"></div>
          <div className="absolute w-4/5 h-[2px] bg-neutral/60 top-1/3 left-1/10"></div>
          <div className="absolute w-4/5 h-[2px] bg-neutral/60 top-1/2 left-1/10"></div>
          <div className="absolute w-4/5 h-[2px] bg-neutral/60 top-2/3 left-1/10"></div>
        </div>
      </div>
      
      {/* Graduation Cap */}
      <div className="absolute bottom-1/4 left-1/3 w-16 h-10 animate-float opacity-70" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full relative">
          <div className="absolute w-full h-1/3 bg-primary bottom-0 rounded"></div>
          <div className="absolute w-full h-2/3 bg-primary/80 top-0 transform rotate-45 rounded-t-lg"></div>
          <div className="absolute w-3 h-3 bg-neutral rounded-full top-1/4 right-1/4"></div>
        </div>
      </div>
      
      {/* Document Icon */}
      <div className="absolute top-2/3 right-1/4 w-10 h-12 bg-accent rounded animate-bounce-gentle opacity-70" style={{ animationDelay: '0.5s' }}>
        <div className="w-3/4 h-[2px] bg-neutral/60 mt-2 mx-auto"></div>
        <div className="w-3/4 h-[2px] bg-neutral/60 mt-2 mx-auto"></div>
        <div className="w-3/4 h-[2px] bg-neutral/60 mt-2 mx-auto"></div>
        <div className="w-1/2 h-[2px] bg-neutral/60 mt-2 mx-auto"></div>
      </div>
      
      {/* Calculator Icon */}
      <div className="absolute top-1/6 right-1/3 w-10 h-14 bg-neutral rounded animate-float opacity-70" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-1/3 bg-primary rounded-t"></div>
        <div className="grid grid-cols-3 gap-1 p-1 h-2/3">
          <div className="bg-tertiary rounded-sm"></div>
          <div className="bg-tertiary rounded-sm"></div>
          <div className="bg-tertiary rounded-sm"></div>
          <div className="bg-tertiary rounded-sm"></div>
          <div className="bg-tertiary rounded-sm"></div>
          <div className="bg-tertiary rounded-sm"></div>
        </div>
      </div>
      
      {/* Circular Decorative Elements */}
      <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/6 w-8 h-8 bg-secondary/30 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-tertiary/30 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>
    </div>
  );
};

export default FloatingObjects;
