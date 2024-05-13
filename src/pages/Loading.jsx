const Loading = () => {
  return (
    <div className="container p-52 mx-auto flex justify-center items-center space-x-6">
     <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-sky-500"></div>
     <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-sky-500"></div>
     <div className="w-28 h-28 border-4 border-dashed rounded-full animate-spin border-sky-500"></div>
    </div>
  );
};

export default Loading;
