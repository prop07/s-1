import React from "react";

const MediaGalary = () => {
  return (
    <div>
      {/* media Galary */}
      <div className=" border-b border-default-border py-2 mb-4">
        <h3 className="text-sky-500 font-bold">MEDIA GALARY</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className=" pb-4">
          <a href="#">
            <iframe
              className="w-full lg:w-[425px] h-[280px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=4DHOZphAMKK2Hrqp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h3 className="font-bold text-sky-500 hover:underline">
              Lorem Ipsum Dolor Sit Amet
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>March 15, 2023</span>
          </div>
        </div>

        <div className="r pb-4">
          <a href="#">
            <iframe
              className="w-full lg:w-[425px] h-[280px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=4DHOZphAMKK2Hrqp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h3 className="font-bold text-sky-500 hover:underline">
              Lorem Ipsum Dolor Sit Amet
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>March 15, 2023</span>
          </div>
        </div>

        <div className="r pb-4">
          <a href="#">
            <iframe
              className="w-full lg:w-[425px] h-[280px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=4DHOZphAMKK2Hrqp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h3 className="font-bold text-sky-500 hover:underline">
              Lorem Ipsum Dolor Sit Amet
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>March 15, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaGalary;
