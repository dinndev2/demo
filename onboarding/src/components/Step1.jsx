export default function Step1 ({ userData, handleChange, formTitle }) {
  return (
    <div className="w-full max-w-2xl mx-auto text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            First Name
          </label>
          <input 
            required 
            id="firstName" 
            type="text" 
            name="firstName" 
            placeholder="First Name" 
            value={userData.firstName} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-black/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Last Name
          </label>
          <input 
            required 
            id="lastName" 
            type="text" 
            name="lastName" 
            placeholder="Last Name" 
            value={userData.lastName} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-black/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input 
            required 
            id="email" 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={userData.email} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-black/20"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone
          </label>
          <input 
            id="phone" 
            type="text" 
            name="phone" 
            placeholder="Phone" 
            value={userData.phone} 
            onChange={handleChange}
              className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-gray-800 focus:ring-2 focus:ring-black/20"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="country" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Country
          </label>
          <input 
            id="country" 
            type="text" 
            name="country" 
            placeholder="Country" 
            value={userData.country} 
            onChange={handleChange}
            className="w-full px-4 py-3 text-base bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-black/20"
          />
        </div>
      </div>
    </div>
  )
}