import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';

export default function JobList({nextDemoPage}) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

  // Placeholder data - replace with props/state
  const jobData = {
    companyIcon: '🟢',
    companyName: 'Demo Company',
    companyCode: 'RTR-082',
    jobTitle: 'Software Engineer',
    location: 'Ireland',
    department: 'Development',
    rateAmount: '€200 - 600/hour',
    deadline: '10 April 2021',
    createdAt: '1 April 2021',
    status: 'Hiring',
    jobPeriod: '14 April 2021 - 14 May 2021',
    numberOfOpenings: 15,
    employmentType: 'Part-time',
    requiredExperience: '1-2 years in software development',
    description: 'Demo Company is seeking a Software Engineer to join our team. The ideal candidate will be responsible for developing and maintaining software applications.',
    skills: [
      'React',
      'Node.js',
    ],
  };

  const tabs = [
    { id: 'All', label: 'All', count: 3 },
  ];

  // Placeholder candidates 
  const candidates = [
    { 
      id: 5, 
      name: 'Alex Somchai', 
      age: 27, 
      gender: 'Male', 
      expectedSalary: '€380', 
      experience: '4 Years', 
      rating: 4.8, 
      status: 'Interviewed',
      specialTag: 'TOP TALENT',
      avatar: '👤'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Applied': 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      'Shortlisted': 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      'Invited to Interview': 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
      'Interviewed': 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
      'Hired': 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
    };
    return colors[status] || colors['Applied'];
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
      <div className="space-y-6 md:gap-8">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {jobData.companyName} · {jobData.companyCode}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                {jobData.jobTitle}
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {jobData.location}
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {jobData.department}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <button onClick={nextDemoPage} className="bg-black text-white hover:bg-gray-800 hover:text-white transition-all duration-200 w-full md:w-auto md:max-w-[200px] px-8 py-2 text-base font-semibold rounded-full cursor-pointer active:translate-y-0">Hire this worker!</button>
          </div> 
          </div>

          {/* Job Overview Card - Redesigned */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Job Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Rate Amount */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 dark:text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Rate Amount</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{jobData.rateAmount}</p>
                </div>
              </div>

              {/* Deadline */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 dark:text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Deadline</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{jobData.deadline}</p>
                </div>
              </div>

              {/* Created At */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 dark:text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Created At</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{jobData.createdAt}</p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 dark:text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Status</p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-xs font-medium">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    {jobData.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description & Skills - Combined Expandable Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
              className="w-full cursor-pointer flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Job Description & Qualifications</h2>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                animate={{ rotate: isDetailsExpanded ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </motion.svg>
            </button>
            <AnimatePresence>
              {isDetailsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 space-y-4">
                    {/* Job Description */}
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Description</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {jobData.description}
                      </p>
                    </motion.div>
                    
                    {/* Skills / Qualifications */}
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Skills / Qualifications</h3>
                      <ul className="space-y-2">
                        {jobData.skills.map((skill, index) => (
                          <motion.li
                            key={index}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.2 + (index * 0.05) }}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-gray-400 dark:text-gray-500 mt-1">•</span>
                            <span>{skill}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
      </div>
    </div>
  );
}
