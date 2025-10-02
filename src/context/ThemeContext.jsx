import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('stellar-theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  }, [])

  const enableDarkMode = () => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('stellar-theme', 'dark')
    setIsDark(true)
  }

  const disableDarkMode = () => {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('stellar-theme', 'light')
    setIsDark(false)
  }

  const toggleTheme = () => {
    if (isDark) {
      disableDarkMode()
    } else {
      enableDarkMode()
    }
  }

  const value = {
    isDark,
    toggleTheme,
    enableDarkMode,
    disableDarkMode
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}