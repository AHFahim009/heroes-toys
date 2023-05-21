const Spinner = () => {
  return (
    <div>
      <div>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 border-4 border-blue-600 rounded-full animate-spin"></div>
            </div>
            <div className="text-gray-800 text-center">
              <p className="font-bold">Loading</p>
              <p>Please wait a moment...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
