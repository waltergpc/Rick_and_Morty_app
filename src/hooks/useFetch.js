import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url, page) => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(false)

  const getData = async (queryUrl) => {
    setLoading(true)
    queryUrl = `${queryUrl}&page=${page}`
    console.log(queryUrl)
    try {
      const { data } = await axios.get(queryUrl)
      setInfo({ ...data.info })
      setData([...data.results])
      setLoading(false)
    } catch (error) {
      setError('Something went wrong, please try again later')
    }
  }

  useEffect(() => {
    getData(url)
  }, [url, page])

  return { loading, error, data, info }
}
