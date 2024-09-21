import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem('theme'); // Moved inside useEffect

    const handleChange = () => {
      let check;
      if (userPref) {
        check = userPref === 'dark' ? 'dark' : 'light';
      } else {
        check = mediaQuery.matches ? 'dark' : 'light';
      }

      setMode(check);
      document.documentElement.classList.toggle('dark', check === 'dark');
    };

    // Initial call to set mode on mount
    handleChange();

    // Listen to changes in the system's dark mode setting
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [preferDarkQuery]);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem('theme', mode);
      document.documentElement.classList.toggle('dark', mode === 'dark');
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
