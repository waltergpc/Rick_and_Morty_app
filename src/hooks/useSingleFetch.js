import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const useSingleFetch = (url) => {
  const [error, setError] = useState(null)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const getSingleData = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(url)
      setData({ ...data })
      setLoading(false)
    } catch (error) {
      if (error.response.status === 404) {
        setData({})
        setLoading(false)
      } else {
        setError('Something went wrong, please try again later')
      }
    }
  }, [url])

  useEffect(() => {
    getSingleData()
  }, [url, getSingleData])

  return { loading, error, data }
}

export default useSingleFetch
