import React, { useContext, useState } from 'react'
import {
  maxPagesInBar,
  minPagesInBar,
  initialPageNumber,
} from '../utils/helperVariables'

const GlobalContext = React.createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [queryUrl, setQueryUrl] = useState(
    'https://rickandmortyapi.com/api/character/?'
  )
  const [page, setPage] = useState(1)
  const [gridView, setGridView] = useState(true)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(maxPagesInBar)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(minPagesInBar)
  const [searchValues, setSearchValues] = useState(null)

  const mountInitialSetup = (url) => {
    setQueryUrl(url)
    setPage(1)
    setGridView(true)
    setMinPageNumberLimit(minPagesInBar)
    setMaxPageNumberLimit(maxPageNumberLimit)
    setSearchValues(null)
  }

  const setSearchUrl = (url) => {
    setQueryUrl(url)
    setPage(initialPageNumber)
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
