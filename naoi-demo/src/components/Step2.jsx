import { useEffect, useState } from 'react';
import Select from 'react-select';
const skillOptions = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
  { value: 'node', label: 'Node' },
  { value: 'express', label: 'Express' },
  { value: 'mongodb', label: 'MongoDB' }
];

export default function Step2 ({ userData, handleChange, skills, handleSkillsChange, formTitle }) {
  // Default selected skills - you can modify this array to set default skills
  const defaultSkills = ['react', 'node']; // Change these to set default skills
  
  const selectedOptions = skillOptions.filter(option => skills.includes(option.value));
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    checkDarkMode();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);
    return () => mediaQuery.removeEventListener('change', checkDarkMode);
  }, []);

  // Initialize default skills if none are selected
  useEffect(() => {
    if (skills.length === 0 && defaultSkills.length > 0) {
      const defaultOptions = skillOptions.filter(option => defaultSkills.includes(option.value));
      handleSkillsChange(defaultOptions);
    }
  }, []); // Only run on mount

  const inputBg = isDark ? 'rgba(255, 255, 255, 0.05)' : '#f9f9f9';
  const inputBorder = isDark ? 'rgba(255, 255, 255, 0.2)' : '#e0e0e0';
  const textColor = isDark ? 'rgba(255, 255, 255, 0.87)' : '#213547';

  return (
    <div className="w-full max-w-2xl mx-auto text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="skills" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Skills
          </label>
          <Select
            name="skills"
            id="skills"
            isMulti
            options={skillOptions}
            value={selectedOptions}
            onChange={handleSkillsChange}
            placeholder="Select skills..."
            className="react-select-container"
            classNamePrefix="react-select"
            styles={{
              control: (base, state) => ({
                ...base,
                minHeight: '48px',
                backgroundColor: inputBg,
                borderColor: state.isFocused ? 'black' : inputBorder,
                boxShadow: state.isFocused ? '0 0 0 1px black' : 'none',
                '&:hover': {
                  borderColor: 'black'
                }
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: inputBg,
                color: textColor
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isSelected 
                  ? 'rgba(99, 102, 241, 0.1)' 
                  : state.isFocused 
                    ? 'rgba(99, 102, 241, 0.1)' 
                    : 'transparent',
                color: state.isSelected ? 'white' : textColor,
                '&:active': {
                  backgroundColor: 'rgba(99, 102, 241, 0.1)'
                }
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: 'black'
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: 'white'
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: 'white',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white'
                }
              }),
              input: (base) => ({
                ...base,
                color: textColor
              })
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rate" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Rate
          </label>
          <input 
            name="rate" 
            id="rate" 
            type="number" 
            placeholder="Rate" 
            value={userData.rate} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-black/20"
          />
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <label htmlFor="availability" className="flex items-center gap-3 cursor-pointer select-none">
            <input 
              id="availability" 
              name="availability" 
              type="checkbox" 
              checked={userData.availability} 
              onChange={handleChange}
              className="w-5 h-5 cursor-pointer rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/20 accent-black"
            />
            <span className="text-base text-gray-900 dark:text-gray-100">Available for work</span>
          </label>
        </div>
      </div>
    </div>
  )
}