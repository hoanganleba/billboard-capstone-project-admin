import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import Sidebar from './Sidebar'

function ProtectedLayout() {
  const { token, onLogout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  if (!token) {
    return <Navigate to="/" />
  }

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap justify-end items-center ml-64 mr-12">
          <div className="relative flex items-center md:order-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
            {isOpen ? (
              <div className="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-2xl dark:bg-gray-700 dark:divide-gray-600 block absolute top-10 right-0">
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-1">
                  <li
                    onClick={onLogout}
                    className="block cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      <Sidebar />
      <div className="ml-64 p-12">
        <Outlet />
      </div>
    </>
  )
}

export default ProtectedLayout
