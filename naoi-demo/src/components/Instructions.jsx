import Controls from "./Controls";
import * as motion from "motion/react-client";

export default function Instructions ({ recordedDays, userData }) {
  return (
    <motion.div 
      className="flex max-w-2xl mb-2 mx-auto gap-2 md:col-span-2 p-3 sm:p-4 w-full rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      initial={{ y: -20, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: -20, opacity: 0, scale: 0.95 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      layout
    >

      {/* Content */}
      <div className="space-y-2 sm:space-y-3 w-full">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="shrink-0 flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full p-2 sm:p-3 justify-center mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <div className="flex flex-col flex-1 min-w-0">  
            <div className="gap-2 sm:gap-3 flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-semibold text-gray-900 dark:text-gray-100 break-words"> {userData.firstName} {userData.lastName} </span>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed break-all">
                {userData.email}
              </span>
            </div>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap mt-1.5 sm:mt-2">
              {
                userData.skills && userData.skills.length > 0 && (
                  userData.skills.map((skill, index) => (
                    <span key={index} className="text-xs rounded-full border border-gray-200 dark:border-gray-700 px-2 py-0.5 sm:px-2.5 sm:py-1 font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))
                )
              }
            </div>
          </div>
          <Controls recordedDays={recordedDays} userData={userData} />
        </div>
        <div className="flex gap-1.5 sm:gap-2 flex-wrap pt-1 border-t border-gray-200 dark:border-gray-700">  
          { userData.country && (
            <div className="flex gap-1.5 sm:gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="text-xs sm:text-sm pr-1.5 sm:pr-2 text-gray-600 dark:text-gray-400 leading-relaxed border-r border-gray-300 dark:border-gray-600"> {userData.country} </span>
            </div>
          )}
          { userData.phone && (
            <div className="flex gap-1.5 sm:gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
              <span className="text-xs sm:text-sm pr-1.5 sm:pr-2 text-gray-600 dark:text-gray-400 leading-relaxed border-r border-gray-300 dark:border-gray-600 break-all"> {userData.phone} </span>
            </div>
          )}
          { userData.rate && (
            <div className="flex gap-1.5 sm:gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-xs sm:text-sm pr-1.5 sm:pr-2 text-gray-600 dark:text-gray-400 leading-relaxed border-r border-gray-300 dark:border-gray-600 whitespace-nowrap"> €{userData.rate}/hour </span>
            </div>
          )}
          <div className="flex gap-1.5 sm:gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${
              userData.availability 
                ? 'text-indigo-600 dark:text-indigo-400' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {userData.availability ? 'Available' : 'Not Available'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}