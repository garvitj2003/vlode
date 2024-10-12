export const Skeleton = () => {
  return (
    <div className="max-w-lg bg-white overflow-hidden border-b border-mediumGray shadow-lg animate-pulse">
      <div className="md:p-6 p-2">
        <div className="flex items-center md:mb-4 mb-1">
          <div className="w-8 h-8 rounded-full bg-gray-900 mr-4"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-24 mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
        <div className="h-6 bg-gray-300 rounded mb-1 md:mb-2 w-64"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 md:mb-4 w-full"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  );
};
