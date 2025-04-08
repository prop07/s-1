"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


const SideLayout = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div>
      <div>
        <div className=" flex items-center border border-default-border justify-between p-1">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2   border-default-border focus:outline-none"
            placeholder="Search..."
            required
          />
          <IoSearch className="h-4 w-4 cursor-pointer mr-2" />
        </div>
        {/* Recent Posts */}
        <div className="mb-6 mt-4">
          <h3 className="text-sm font-bold border-b border-default-border pb-2 mb-4">
            RECENT POSTS
          </h3>
          <ul className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <li key={item} className="flex">
                <a href="#" className="flex-shrink-0 mr-3">
                  <img
                    src="https://picsum.photos/500/300"
                    alt="Post"
                    className="w-16 h-12 object-cover"
                  />
                </a>
                <div>
                  <a
                    href="#"
                    className="text-xs font-medium hover:text-sky-500 text-ellipsis line-clamp-1 sm:line-clamp-2"
                  >
                    Suspendisse potenti nullam ac tortor vitae purus faucibus
                    Lorem ipsum dolor sit amet.
                  </a>
                  <div>
                    <p className="text-xs text-gray-500 mt-1">
                      March {5 - item}, 2023
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-sm font-bold border-b border-default-border pb-2 mb-4">
            CATEGORIES
          </h3>
          <ul className="text-xs space-y-2">
            <li>
              <a href="#" className="hover:text-sky-500">
                Business (23)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Technology (15)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Sports (7)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Entertainment (12)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Health (9)
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-sm font-bold border-b border-default-border pb-2 mb-4">
            CATCH US
          </h3>
          <div className="flex gap-2">
            <Link href="/">
              <FaFacebookF
                size={32}
                className="bg-[#1877F2] px-1 pt-1 text-white rounded-md "
              />
            </Link>
            <Link href="/">
              <FaInstagram
                size={32}
                className="text-white p-1 rounded-md bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#833AB4]"
              />
            </Link>
            <Link href={"/"}>
              <FaXTwitter
                size={32}
                className="bg-black text-white p-1 rounded-md"
              />
            </Link>
          </div>
        </div>
        <div className="mb-6 space-y-2">
          <h3 className="text-sm font-bold border-b border-default-border pb-2 mb-4">
            SUBSCRIBE TO NEWSLETTER
          </h3>
          <p>Stay updated with our latest news and articles.</p>
          <form className="space-y-2">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2  border border-default-border focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your Email Address"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 w-full justify-center bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>Subscribe</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideLayout;