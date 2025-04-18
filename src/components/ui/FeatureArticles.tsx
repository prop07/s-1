import Image from "next/image";
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const FeatureArticles = () => {
  return (
    <div>
      {/* Featured Articles Grid */}
      <div className=" border-b border-default-border py-2 mb-4">
        <h3 className="text-sky-500 font-bold">Featured Articles</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border-b border-default-border pb-4">
          <a href="#">
            <Image
              src="https://picsum.photos/500/300"
              alt="Article"
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="font-bold text-sky-500 hover:underline">
              Lorem Ipsum Dolor Sit Amet
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
                <div className='space-y-1'>
                        <span className=' flex items-center'>
                      <FaRegEye size={12} className="mr-1" />
                        1.2k views
                        </span>
                      <span>March 15, 2023</span>
                      </div>
            <a href="#" className="text-sky-500 flex items-center">
              Continue Reading{" "}
              <MdKeyboardArrowRight size={12} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="border-b border-default-border pb-4">
          <a href="#">
            <Image
              src="https://picsum.photos/500/300"
              alt="Article"
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="font-bold text-sky-500 hover:underline">
              Lorem Ipsum Dolor Sit Amet
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
                <div className='space-y-1'>
                        <span className=' flex items-center'>
                      <FaRegEye size={12} className="mr-1" />
                        1.2k views
                        </span>
                      <span>March 15, 2023</span>
                      </div>
            <a href="#" className="text-sky-500 flex items-center">
              Continue Reading{" "}
              <MdKeyboardArrowRight size={12} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="border-b border-default-border pb-4">
          <a href="#">
            <Image
              src="https://picsum.photos/500/300"
              alt="Article"
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="font-bold text-sky-500 hover:underline">
              Lorem Ipsum Dolor Sit Amet
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </a>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
                <div className='space-y-1'>
                        <span className=' flex items-center'>
                      <FaRegEye size={12} className="mr-1" />
                        1.2k views
                        </span>
                      <span>March 15, 2023</span>
                      </div>
            <a href="#" className="text-sky-500 flex items-center">
              Continue Reading{" "}
              <MdKeyboardArrowRight size={12} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArticles;
