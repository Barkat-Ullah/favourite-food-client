import { useState } from "react";


const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
      setDarkMode(!darkMode);
      // You can add additional logic to persist the theme preference in localStorage.
    };

    return (
        <div className={darkMode ? 'dark' : ''}>
          <div className="w-full p-4 flex justify-center">
            <button
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-gray-200'
              } px-4 py-2 text-white dark:text-gray-800 rounded-lg transition-colors duration-300`}
              onClick={toggleTheme}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      );
    }

export default Toggle;