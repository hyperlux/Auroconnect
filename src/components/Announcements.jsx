const Announcements = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Important Announcements
      </h2>
      <div className="space-y-4">
        {/* Alert Notice */}
        <div className="p-4 rounded-xl dark:bg-red-900/30 dark:border-red-800 border">
          <div className="flex items-start gap-3">
            <AlertTriangleIcon className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h3 className="font-medium dark:text-red-300">Water Conservation Notice</h3>
              <p className="text-sm mt-1 dark:text-red-400">Due to reduced rainfall, please minimize water usage. Conservation guidelines in effect.</p>
              <span className="text-xs dark:text-gray-400 mt-2 block">1 hour ago</span>
            </div>
          </div>
        </div>
        
        {/* Info Notice */}
        <div className="p-4 rounded-xl dark:bg-blue-900/30 dark:border-blue-800 border">
          <div className="flex items-start gap-3">
            <InfoIcon className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <h3 className="font-medium dark:text-blue-300">New Community Guidelines</h3>
              <p className="text-sm mt-1 dark:text-blue-400">Updated guidelines for community participation have been released.</p>
              <span className="text-xs dark:text-gray-400 mt-2 block">3 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
