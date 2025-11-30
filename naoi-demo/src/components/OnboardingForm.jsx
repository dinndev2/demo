import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { AnimatePresence } from "motion/react"
import Instructions from "./Instructions";
import * as motion from "motion/react-client"
import JobList from "./JobList";
import Calendar from "./Calendar";
import Controls from "./Controls";

export default function OnboardingForm () {
  const [step, setStep] = useState(1);
  const [skills, setSkills] = useState([]);
  const [formTitle, setFormTitle] = useState('Onboarding');
  const [userType, setUserType] = useState('Worker');
  const [recordedDays, setRecordedDays] = useState([]); 
  const [ProfilePicture, setProfilePicture] = useState([]);


  const [userData, setUserData] = useState({
    firstName: 'Demo',
    lastName: 'User',
    email: 'testdemo@gmail.com',
    phone: '1234567890',
    country: 'United States',
    skills: [],
    rate: 100,
    availability: true,
  });
  const figureStep = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setStep(1); 
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'skills') {
      const newSkills = skills.includes(value) 
        ? skills.filter(skill => skill !== value)
        : [...skills, value];
      setSkills(newSkills);
      setUserData((prev) => ({ ...prev, skills: newSkills }));
    } else if (type === 'checkbox') {
      setUserData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setUserData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setUserData((prev) => ({ ...prev, [name]: value }));
    }
  }

  const nextDemoPage = () => {
    if (step === 2) {
      setStep(3);
      setUserType('Company');
      setFormTitle('Hire worker');
    } else if (step === 3) {
      setStep(4);
      setUserType('Worker');
      setFormTitle('Fill in timesheet');
    }
  }

  const handleBack = () => {
    if (step === 4) {
      setStep(3);
      setUserType('Company');
      setFormTitle('Hire worker');
    } else if (step === 3) {
      setStep(2);
      setUserType('Worker');
      setFormTitle('Onboarding');
    } else if (step === 2) {
      setStep(1);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    figureStep();
  }

  const handleSkillsChange = (selectedOptions) => {
    const newSkills = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSkills(newSkills);
    setUserData((prev) => ({ ...prev, skills: newSkills }));
  }

  return (
    <AnimatePresence mode="wait">
      <div className="w-full min-h-screen flex items-center justify-center flex-col p-4">
        <>
          <motion.div>  
            <div className="w-full max-w-2xl flex flex-col gap-4 mb-6 px-2 sm:px-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                <h1 className="text-center sm:text-left text-lg sm:text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-900 dark:text-gray-100 break-words">
                  {formTitle} as a <span className="text-indigo-800">{userType}</span>
                </h1>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {/* Back Button - Show for all steps except step 1 */}
                  {step > 1 && (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={handleBack}
                      className="bg-white text-gray-500 hover:text-black hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto sm:max-w-[200px] px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold rounded-full cursor-pointer active:translate-y-0 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                      </svg>
                      <span className="sm:hidden">Back</span>
                    </motion.button>
                  )}
                  {/* Next/Submit Button - Show for step 1 and 2 */}
                  {(step === 1 || step === 2) && (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type={step === 1 ? "submit" : "button"}
                      form={step === 1 ? "onboarding-form" : undefined}
                      onClick={step === 2 ? nextDemoPage : undefined}
                      className="bg-black text-white hover:bg-gray-800 hover:text-white transition-all duration-200 w-full sm:w-auto sm:max-w-[200px] px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold rounded-full cursor-pointer active:translate-y-0"
                    >
                      {step === 1 ? 'Next' : 'Continue'}
                    </motion.button>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-1/2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-black transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>  
          </motion.div>
          <AnimatePresence mode="wait">
            <Instructions key="instructions" recordedDays={recordedDays} userData={userData} />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {
              (step === 1 || step === 2) && (
                <form onSubmit={handleSubmit} id="onboarding-form" className="w-full" key={`form-${step}`}>
                  {step === 1 && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      key={step}
                    >
                      <Step1 userData={userData} handleChange={handleChange} formTitle={formTitle} />
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      key={step}
                    >
                      <Step2 userData={userData} handleChange={handleChange} skills={skills} handleSkillsChange={handleSkillsChange} formTitle={formTitle} />
                    </motion.div>
                  )}
                </form>
              )
            }
            {
              step === 3 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  key="joblist"
                  className="w-full flex items-center justify-center"
                >
                  <JobList userData={userData} handleChange={handleChange} formTitle={formTitle} nextDemoPage={nextDemoPage} />
                </motion.div>
              )
            }
            {
              step === 4 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-full"
                  key="calendar"
                >
                  <Calendar
                    userData={userData}
                    recordedDays={recordedDays}
                    setRecordedDays={setRecordedDays}
                  />
                </motion.div>
              )
            }
          </AnimatePresence>
        </> 
      </div>
    </AnimatePresence>
  )
}