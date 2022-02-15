import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export const useFetch = (url, page) => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)

  const getData = useCallback(
    async (queryUrl) => {
      console.log('hola')
      setLoading(true)
      queryUrl = `${queryUrl}&page=${page}`
      console.log(queryUrl)
      try {
        const { data } = await axios.get(queryUrl)
        setInfo({ ...data.info })
        setData([...data.results])
        setLoading(false)
      } catch (error) {
        if (error.response.status === 404) {
          setData([])
          setInfo({})
          setLoading(false)
        } else {
          setError('Something Wen wrong, please try again later')
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
