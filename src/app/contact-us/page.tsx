"use client"
import { useState } from "react";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";
import { LuMapPin, LuSend } from "react-icons/lu";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // const [submitError, setSubmitError] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", description: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="w-full mx-auto">
      {/* Page Header */}

      <div className=" gap-8 space-y-6">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="bg-primary border border-default-border  p-6">
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            <p className="mb-2">
              We&lsquo;d love to hear from you. Send us a message and we&lsquo;ll respond as
              soon as possible.
            </p>

            {submitSuccess && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                Thank you for your message! We&lsquo;ll get back to you soon.
              </div>
            )}

            {/* {submitError && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                There was an error sending your message. Please try again.
              </div>
            )} */}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2  border border-default-border focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2  border border-default-border focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block mb-1 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2  border border-default-border focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors flex items-center gap-2"
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
                  <>
                    <LuSend className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-primary p-6 ">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MdOutlineMailOutline className="w-5 h-5 mt-1 text-sky-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="">info@newsmagazine.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdOutlinePhone className="w-5 h-5 mt-1 text-sky-500" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LuMapPin className="w-5 h-5 mt-1 text-sky-500" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="">123 News Street, Media City, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 border-t border-default-border pt-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary p-5 ">
            <h3 className="font-semibold text-lg mb-2">
              How quickly will you respond to my inquiry?
            </h3>
            <p className="">
              We aim to respond to all inquiries within 24-48 business hours.
            </p>
          </div>

          <div className="bg-primary p-5 ">
            <h3 className="font-semibold text-lg mb-2">
              Can I submit a news tip?
            </h3>
            <p className="">
              Yes! We welcome news tips. Please include as much detail as
              possible in your message.
            </p>
          </div>

          <div className="bg-primary p-5 ">
            <h3 className="font-semibold text-lg mb-2">
              How can I advertise with News Magazine?
            </h3>
            <p className="">
              For advertising inquiries, please mention &ldquo;Advertising&ldquo; in your
              message and our sales team will contact you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;