import React from "react";

const UserMessage = ({text}) => {
  return (
    <div className="w-8/12 p-3 rounded-lg  ml-auto" dir="rtl">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center h-14 w-14 overflow-hidden rounded-full bg-indigo-500 flex-shrink-0">
          <img src="./user-icon.webp" />
        </div>
        <div className="relative mr-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
          <div>
           {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
