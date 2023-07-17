const Heading = () => {
  return (
    <>
      <div className="sm:flex sm:flex-col sm:align-center">
        <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
          Pricing Plans
        </h1>
        <p className="mt-5 text-xl text-gray-500 sm:text-center">
          Start building for free, then add a site plan to go live. Account
          plans unlock additional features.
        </p>
        <div className="relative self-center mt-6 rounded-lg p-0.5 flex sm:mt-8 items-center justify-center">
          <button
            type="button"
            className={`relative w-1/2  rounded-md shadow-sm  text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8 py-4 bg-white border-gray-500    
            }`}>
            Monthly billing
          </button>
        </div>
      </div>
    </>
  );
};

export default Heading;
