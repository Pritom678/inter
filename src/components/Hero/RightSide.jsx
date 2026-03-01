import React from "react";

const RightSide = () => {
  return (
    <div className="relative h-full">
      <div className="absolute top-10 left-20 w-60 h-65 rounded-4xl overflow-hidden bg-primary"></div>
      <div className="absolute bottom-65 right-5 w-60 h-60 rounded-4xl overflow-hidden bg-black"></div>
      <div className="absolute bottom-23 left-20 w-70 h-45 rounded-4xl overflow-hidden bg-blue-500"></div>
      {/* overlay design */}
      <div className="absolute bottom-57 left-60 w-35 h-17 border-8 p-3 z-10 border-white rounded-full overflow-hidden bg-green-500"></div>
      <div className="absolute -top-2 left-65 w-25 h-25 border-8 p-3 z-10 border-white rounded-full overflow-hidden bg-blue-300"></div>
      {/* small designs */}
      <div className="absolute top-5 right-10 w-5 h-5  p-3 z-10 rounded-full overflow-hidden bg-blue-600"></div>
      <div className="absolute bottom-30 right-22 w-8 h-8  p-3 z-10 rounded-full overflow-hidden bg-sky-600"></div>
      {/* star */}
      <div
        className="absolute top-6 left-8 h-10 w-10 bg-teal-500 
[clip-path:polygon(50%_0%,_60%_40%,_100%_50%,_60%_60%,_50%_100%,_40%_60%,_0%_50%,_40%_40%)]"
      ></div>

      <div
        className="absolute bottom-50 right-37 h-8 w-8 bg-teal-200 
[clip-path:polygon(50%_0%,_60%_40%,_100%_50%,_60%_60%,_50%_100%,_40%_60%,_0%_50%,_40%_40%)]"
      ></div>
    </div>
  );
};

export default RightSide;
