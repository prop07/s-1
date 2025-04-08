import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary px-4 pt-8 pb-2">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
        <div>
          <h4 className="text-sm font-bold mb-3">LATEST ARTICLES</h4>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>
              <a href="#" className="hover:text-sky-500">
                Business news today
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Technology updates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Sports highlights
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Entertainment news
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Health and wellness
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">POPULAR ARTICLES</h4>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>
              <a href="#" className="hover:text-sky-500">
                Business trends 2023
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Tech innovations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Sports events calendar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Movie reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Healthy recipes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">TRENDING TOPICS</h4>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>
              <a href="#" className="hover:text-sky-500">
                Artificial Intelligence
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Climate Change
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Global Economy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Space Exploration
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Public Health
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">QUICK LINKS</h4>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>
              <a href="#" className="hover:text-sky-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Advertise with Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">CATEGORIES</h4>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>
              <a href="#" className="hover:text-sky-500">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Sports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Entertainment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-500">
                Health
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-default-border pt-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between">
        <div>
          Copyright © 2025 - All Rights Reserved -{" "}
          <a href="#" className="hover:text-sky-500">
            Privacy Policy
          </a>
        </div>
        <div>
          Designed by{" "}
          <a href="#" className="text-sky-500">
            Prop07
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
