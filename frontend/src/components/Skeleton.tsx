// skeleton for card component
export const Skeleton = () => {
  return (
    <div className="max-w-lg bg-white overflow-hidden border-b border-mediumGray shadow-lg animate-pulse">
      <div className="md:p-6 p-2">
        <div className="flex items-center md:mb-4 mb-1">
          <div className="w-8 h-8 rounded-full bg-gray-500 mr-4"></div>
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

// Skeleton for whole page
export const PageSkeleton = () => {
  return (
    <div className="flex justify-center bg-white w-screen h-screen">
      <div className="max-w-3xl mx-auto rounded-lg shadow-lg lg:w-3/4 w-full">
        <div className="p-6">
          <div className="mb-4 w-32 h-6 bg-gray-200 animate-pulse"></div>
          <div className="h-10 bg-gray-200 animate-pulse w-3/4 mb-4"></div>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 animate-pulse"></div>
            <div>
              <div className="h-4 w-24 bg-gray-200 animate-pulse mb-2"></div>
              <div className="h-3 w-20 bg-gray-200 animate-pulse"></div>
            </div>
          </div>
          <div className="max-w-none">
            <div className="h-4 w-full bg-gray-200 animate-pulse mb-4"></div>
            <div className="h-4 w-full bg-gray-200 animate-pulse mb-4"></div>
            <div className="h-4 w-5/6 bg-gray-200 animate-pulse mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
