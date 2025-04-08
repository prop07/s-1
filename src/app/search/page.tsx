import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const page = () => {
  return (
    <div>
    {/* Featured Articles Grid */}
    <div className=" border-b border-default-border py-2 mb-4">
      <h3 className="text-sky-500 font-bold">Articles</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="border-b border-default-border pb-4">
        <a href="#">
          <img
            src="https://picsum.photos/500/300"
            alt="Article"
            className="w-full h-40 object-cover mb-2"
          />
          <h3 className="font-bold text-sky-500 hover:underline">
            Lorem Ipsum Dolor Sit Amet
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Error aperiam
            nisi numquam dolorum. Voluptatem blanditiis, facilis delectus
            voluptas corrupti nisi illum laudantium esse dolorem perspiciatis
            fugit voluptatum repellat dolor deleniti. Modi consectetur
            corrupti accusantium natus repellat harum praesentium, nemo, quam
            voluptatum sequi reprehenderit. Eos assumenda ipsam ipsa ea
            voluptatibus adipisci maiores nesciunt accusantium, laboriosam
            repellendus repudiandae. Non alias illo culpa!
          </p>
        </a>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>March 15, 2023</span>
          <a href="#" className="text-sky-500 flex items-center">
            Continue Reading{" "}
            <MdKeyboardArrowRight size={12} className="ml-1" />
          </a>
        </div>
      </div>

      <div className="border-b border-default-border pb-4">
        <a href="#">
          <img
            src="https://picsum.photos/500/300"
            alt="Article"
            className="w-full h-40 object-cover mb-2"
          />
          <h3 className="font-bold text-sky-500 hover:underline">
            Lorem Ipsum Dolor Sit Amet
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Error aperiam
            nisi numquam dolorum. Voluptatem blanditiis, facilis delectus
            voluptas corrupti nisi illum laudantium esse dolorem perspiciatis
            fugit voluptatum repellat dolor deleniti. Modi consectetur
            corrupti accusantium natus repellat harum praesentium, nemo, quam
            voluptatum sequi reprehenderit. Eos assumenda ipsam ipsa ea
            voluptatibus adipisci maiores nesciunt accusantium, laboriosam
            repellendus repudiandae. Non alias illo culpa!
          </p>
        </a>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>March 15, 2023</span>
          <a href="#" className="text-sky-500 flex items-center">
            Continue Reading{" "}
            <MdKeyboardArrowRight size={12} className="ml-1" />
          </a>
        </div>
      </div>

      <div className="border-b border-default-border pb-4">
        <a href="#">
          <img
            src="https://picsum.photos/500/300"
            alt="Article"
            className="w-full h-40 object-cover mb-2"
          />
          <h3 className="font-bold text-sky-500 hover:underline">
            Lorem Ipsum Dolor Sit Amet
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Error aperiam
            nisi numquam dolorum. Voluptatem blanditiis, facilis delectus
            voluptas corrupti nisi illum laudantium esse dolorem perspiciatis
            fugit voluptatum repellat dolor deleniti. Modi consectetur
            corrupti accusantium natus repellat harum praesentium, nemo, quam
            voluptatum sequi reprehenderit. Eos assumenda ipsam ipsa ea
            voluptatibus adipisci maiores nesciunt accusantium, laboriosam
            repellendus repudiandae. Non alias illo culpa!
          </p>
        </a>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>March 15, 2023</span>
          <a href="#" className="text-sky-500 flex items-center">
            Continue Reading{" "}
            <MdKeyboardArrowRight size={12} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page