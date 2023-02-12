import { useState, useEffect } from "react"

const getStorageValue = (key, defaultValue) => {
  const savedValue = localStorage.getItem(key)
  const initialValue = JSON.stringify(savedValue)
  return initialValue || defaultValue
}

export const useLocalStorage = (key, defaultValue) => {
  const [mode, setMode] = useState(() => getStorageValue(key, defaultValue))

  useEffect(() => {
    // storing input value
    localStorage.setItem(key, JSON.stringify(mode))
  }, [key, mode])

  return [mode, setMode]
}

