import { useEffect, useState } from 'react'
export const useFetchData = <DataType>(fn: () => Promise<DataType>) => {
  const [data, setData] = useState<DataType>()
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fn()
      setData(fetchedData)
    }
    fetchData()
  }, [])

  return data
}
