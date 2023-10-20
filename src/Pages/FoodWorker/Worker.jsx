const Worker = () => {
  return (
    <div>
      <section className="bg-[#cec9ba] dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our Team Members
          </h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://i.ibb.co/9hNnShV/pexels-gustavo-fring-3983570.jpg"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Jane Doe
                </h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Steve Ben
                </h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://i.ibb.co/Wcfnf36/pexels-cottonbro-studio-4057748.jpg"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Patterson Johnson
                </h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  Robert Hook
                </h3>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Worker;
