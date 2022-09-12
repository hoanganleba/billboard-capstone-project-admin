import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constant'

function Home() {
  const { status, data, error } = useQuery(['billboards'], async () => {
    const { data } = await axios.get(`${BASE_URL}/api/billboards`)
    return data
  })

  return (
    <>
      <h1 className="text-2xl dark:text-white">Dashboard</h1>
      <Link
        to={'/dashboard/billboards'}
        className="mt-5 flex justify-between p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Billboards
        </h5>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {status === 'loading' ? '' : data.length}
        </h5>
      </Link>
    </>
  )
}

export default Home
