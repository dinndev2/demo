import { useState } from "react";


export default function Tile({ cell, currentDay, onCellClick, recordedDays }) {
  const data = recordedDays.find(u => u.day === cell);
  const handleClick = () => {
    if (cell !== null && onCellClick) {
      onCellClick(cell);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`${cell === currentDay ? 'text-red-400' : ''} ${cell !== null ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' : 'cursor-default opacity-50'} text-xl md:text-4xl font-bold cell aspect-square transition-all duration-300 flex items-center justify-center border rounded-lg border-gray-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-0 w-full`}
    >
      <>
        {
          data ? <div className="flex flex-col gap-2 items-center"> <>{cell}</> <span className="text-xs text-green-600 bg-gray-50 rounded-full px-2 py-1"> Recorded </span> </div> : cell
        }
      </>
    </div>
  );
}