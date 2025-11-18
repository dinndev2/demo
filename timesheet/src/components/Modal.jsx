import { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose, selectedDay, currentMonth, currentYear, recordedDays, setRecordedDays }) {
  const [isClosing, setIsClosing] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      // Load existing notes if day was already recorded
      const existingRecord = recordedDays.find(record => record.day === selectedDay);
      setNotes(existingRecord?.notes || "");
    }
  }, [isOpen, selectedDay]);

  if (!isOpen && !isClosing) return null;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200); // Match the animate-out duration (0.5s)
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if day already exists and update, otherwise add new
    const existingIndex = recordedDays.findIndex(record => record.day === selectedDay);
    
    if (existingIndex >= 0) {
      // Update existing record
      const updatedDays = [...recordedDays];
      updatedDays[existingIndex] = { day: selectedDay, notes: notes };
      setRecordedDays(updatedDays);
    } else {
      // Add new record
      const newRecordedDay = { day: selectedDay, notes: notes };
      setRecordedDays([...recordedDays, newRecordedDay]);
    }
    
    // Clear form and close modal
    setNotes("");
    handleClose();
  };

  return (
    <div 
      className={`fixed inset-0 backdrop-blur-[2px] bg-opacity-50 flex items-center justify-center z-50 ${isClosing ? 'animate-out' : 'animate-in'}`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full mx-4 ${isClosing ? 'animate-out' : 'animate-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {monthNames[currentMonth]} {selectedDay}, {currentYear}
          </h2>
          <button
            onClick={handleClose}
            className="bg-transparent text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="notes" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">Notes</label>
            <div className="mt-2">
              <textarea 
                id="notes" 
                name="notes" 
                rows="3" 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="block w-full rounded-md bg-white dark:bg-gray-700 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:focus:outline-indigo-400 sm:text-sm/6"
                placeholder="Write a few sentences about your day..."
              />
            </div>
            <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">Write a few sentences about your day.</p>
            <button 
              className="bg-gray-900 dark:bg-gray-700 rounded-lg text-white px-4 py-2 mt-2 text-xs hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors" 
              type="submit"
            >
              {recordedDays.find(record => record.day === selectedDay) ? 'Update Day' : 'Record Day'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

