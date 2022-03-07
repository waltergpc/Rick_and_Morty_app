import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useGlobalContext } from '../Context/GlobalContext'

export const useFetch = () => {
  const { queryUrl, page } = useGlobalContext()

  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)

  const getData = useCallback(
    async (queryUrl) => {
      setLoading(true)
      queryUrl = `${queryUrl}&page=${page}`
      try {
        const { data: axiosData } = await axios.get(queryUrl)
        setData(axiosData.results)
        setLoading(false)
        setInfo(axiosData.info)
      } catch (error) {
        console.log(error)
        if (error.response.status === 404) {
          setData([])
          setInfo({})
          setLoading(false)
        } else {
          setError('Something went wrong, please try again later')
        }
      }
    },
    [page]
  )

  useEffect(() => {
    getData(queryUrl)
  }, [queryUrl, page, getData])

  return { loading, error, data, info }
}
