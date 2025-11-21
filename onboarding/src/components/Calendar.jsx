import { useEffect, useState } from "react";
import Tile from "./Tile";
import Modal from "./Modal";
import { nanoid } from "nanoid";

export default function Calendar({ recordedDays, setRecordedDays, userData }) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const getCurrentDay = new Date().getDate();
  const [calendarCells, setCalendarCells] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const buildCalendarGrid = (month, year) => {
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
      return {firstDayOfMonth, daysInMonth, lastDayOfMonth}
    }
    const buildCalendar = (month, year) => {
      const {firstDayOfMonth, daysInMonth, lastDayOfMonth} = buildCalendarGrid(month, year);
      const days = [];
      for (let i = 1; i < firstDayOfMonth; i++) {
        days.push(null);
      }

      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
      }
      for (let i = 6; i >= lastDayOfMonth; i--) {
        days.push(null);
      }  
      setCalendarCells(days);
    }
    buildCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  const handleCellClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };

  return ( 
    <>
      <div className="calendar-container w-full flex h-full items-center justify-center">
        <div id="calendar" className="calendar md:p-4">
          {calendarCells.map((cell) => (
            <Tile 
              key={nanoid()} 
              cell={cell} 
              recordedDays={recordedDays}
              currentDay={getCurrentDay}
              onCellClick={handleCellClick}
            />
          ))}
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        setRecordedDays={setRecordedDays}
        recordedDays={recordedDays}
        onClose={handleCloseModal}
        selectedDay={selectedDay}
        currentMonth={currentMonth}
        currentYear={currentYear}
      />
    </>
  );
}