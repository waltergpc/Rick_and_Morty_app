import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export const useFetch = (url, page) => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)

  const getData = useCallback(
    async (queryUrl) => {
      setLoading(true)
      if (page !== 'all') {
        queryUrl = `${queryUrl}&page=${page}`
      }
      if (page === 'all') {
        queryUrl = `${queryUrl}`
      }
      console.log(queryUrl)
      try {
        const { data } = await axios.get(queryUrl)
        if (page === 'all') {
          setData(data)
          setLoading(false)
        }
        if (page !== 'all') {
          setData(data.results)
          setLoading(false)
          setInfo(data.info)
        }
      } catch (error) {
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
    getData(url)
  }, [url, page, getData])

  return { loading, error, data, info }
}
