import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    try {

      const response = await fetch(url);
      const data = await response.json()

      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    isLoading
  }

}