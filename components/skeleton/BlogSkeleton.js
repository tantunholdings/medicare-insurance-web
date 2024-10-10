// components/skeleton/BlogSkeleton.js
const BlogSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="h-40 bg-gray-300 rounded mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;