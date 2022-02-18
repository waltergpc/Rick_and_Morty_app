import React, { useContext, useState } from 'react'

const GlobalContext = React.createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <GlobalContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
      {children}
    </GlobalContext.Provider>
  )
}
