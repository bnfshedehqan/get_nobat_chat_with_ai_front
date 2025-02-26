import React from "react";

const AiMessage = ({ text }) => {
  return (
    <div className="w-7/12 mr-auto p-3 rounded-lg px-8ّ">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-14 w-14 rounded-full overflow-hidden bg-indigo-500 flex-shrink-0">
          <img src="./ai-icon.webp" />
        </div>
        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default AiMessage;
