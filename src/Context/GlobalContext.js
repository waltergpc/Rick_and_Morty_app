import React, { useContext, useState } from 'react'

const GlobalContext = React.createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [queryUrl, setQueryUrl] = useState(
    'https://rickandmortyapi.com/api/character/?'
  )
  const [page, setPage] = useState(1)
  const [gridView, setGridView] = useState(true)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const [searchValues, setSearchValues] = useState(null)

  const mountInitialSetup = (url) => {
    setQueryUrl(url)
    setPage(1)
    setGridView(true)
    setMinPageNumberLimit(0)
    setMaxPageNumberLimit(5)
    setSearchValues(null)
  }

  const setSearchUrl = (url) => {
    setQueryUrl(url)
    setPage(1)
  }

  return (
    <GlobalContext.Provider
      value={{
        sideBarOpen,
        setSideBarOpen,
        queryUrl,
        setQueryUrl,
        page,
        setPage,
        gridView,
        setGridView,
        maxPageNumberLimit,
        setMaxPageNumberLimit,
        minPageNumberLimit,
        setMinPageNumberLimit,
        mountInitialSetup,
        setSearchUrl,
        searchValues,
        setSearchValues,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
