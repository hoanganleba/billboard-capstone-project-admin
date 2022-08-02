const statusValidate = (isActive: boolean) => {
  return isActive ? (
    <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
      Approved
    </span>
  ) : (
    <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
      Not approved
    </span>
  )
}

export default statusValidate
