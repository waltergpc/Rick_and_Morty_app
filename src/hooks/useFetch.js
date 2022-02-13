import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)

  const getData = async (queryUrl) => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setInfo({ ...data.info })
      setData([...data.results])
    } catch (error) {
      setError(error.response)
    }
  }

  useEffect(() => {
    getData(url)
  }, [url])

  return { loading, error, data, info }
}
