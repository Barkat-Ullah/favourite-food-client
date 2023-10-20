const Gallery = () => {
  return (
    <div className="bg-[#F4F3F0]">
      <div>
        <h2 className="text-slate-500 pt-10 text-3xl font-extrabold text-center">
          Food <span className="text-[#C5A35E]">Gallery</span>
        </h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              THIS WEEK'S MENU
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Explore our delectable delights in this week's special menu. From
              savory to sweet, there's something for everyone's taste buds.
              Don't miss out on these culinary delights!
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div data-aos="zoom-in-up" className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-[250px] object-center block"
                  src="https://i.ibb.co/TKYB4X8/pexels-deeana-arts-2894651.jpg"
                />
              </div>
              <div data-aos="zoom-in-up" className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-[250px] object-center block"
                  src="https://i.ibb.co/BB0jdj4/pexels-lisa-fotios-11802698.jpg"
                />
              </div>
              <div data-aos="zoom-in-up" className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-[400px] object-cover object-center block"
                  src="https://i.ibb.co/rmN0CJK/pexels-oziel-g-mez-1667427.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div data-aos="zoom-in-up" className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-[400px] object-cover object-center block"
                  src="https://i.ibb.co/5Y7pQnW/pexels-nati-17216084.jpg"
                />
              </div>
              <div data-aos="zoom-in-up" className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-[250px] object-center block"
                  src="https://i.ibb.co/nRwvcPP/pexels-eiliv-aceron-6895776.jpg"
                />
              </div>
              <div data-aos="zoom-in-up" className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-[250px] object-center block"
                  src="https://i.ibb.co/f0xRjg2/pexels-shantanu-pal-2679501.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
