"use client";

import TransitionPage from "@/components/animations/TransitionPage";
import Splatter from "@/components/Splatter";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect, useRef } from "react";

interface PageProps {
  reset: () => void;
}

export default function Page() {
  const [state, handleSubmit] = useForm("xeojozpd");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      if (formRef.current) {
        formRef.current.reset(); // Reset the form
      }
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // 5000 ms = 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [state.succeeded]);

  return (
    <>
      <TransitionPage />
      <Splatter />
      <div className="flex flex-col justify-center h-lvh mt-64 mb-40 md:mt-44">
        <h1 className="text-zinc-600 text-xl leading-tight text-center md:text-2xl mb-10">
          Contact me on my social networks{" "}
          <span className="text-red-500 font-semibold">
            or by filling out the following form
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-full px-8 py-10 mx-auto overflow-hidden border-2 border-red-400 rounded-xl shadow-lg shadow-rose-400 lg:max-w-xl">
            <form
              id="contactForm"
              className="mt-4"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div className="flex-1">
                <label
                  className="block mb-2 font-medium text-lg text-zinc-600"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full px-5 py-3 mt-2 bg-transparent border rounded-md text-zinc-600 border-gray-400 focus:border-red-400 focus:ring-red-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="flex-1 mt-6">
                <label
                  className="block mb-2 font-medium text-lg text-zinc-600"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="block w-full px-5 py-3 mt-2 bg-transparent border rounded-md text-zinc-600 border-gray-400 focus:border-red-400 focus:ring-red-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="w-full mt-6">
                <label
                  className="block mb-2 font-medium text-lg text-zinc-600"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400 bg-transparent border rounded-md md:h-48 text-zinc-600 border-gray-400 focus:border-red-400 focus:ring-red-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                  placeholder="Message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                className="w-full px-6 py-3 mt-6 text-lg font-medium tracking-wide text-zinc-600 capitalize transition-colors duration-0 transform border border-red-400 rounded-md shadow-md hover:bg-red-100 hover:shadow-rose-400 focus:outline-none focus:ring focus:ring-rose-400 focus:ring-opacity-50"
                type="submit"
                disabled={state.submitting}
              >
                Contact
              </button>
            </form>
            {showSuccessMessage && (
              <div className="font-semibold text-xl mt-4 text-center text-emerald-600">
                <p>Message sent!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/*

"use client";

import TransitionPage from "@/components/animations/TransitionPage";
import Splatter from "@/components/Splatter";
import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";

export default function Page() {
  const [state, handleSubmit] = useForm("xeojozpd");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // 5000 ms = 5 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [state.succeeded]);

  return (
    <>
      <TransitionPage />
      <Splatter />
      <div className="flex flex-col justify-center h-lvh mt-64 mb-40 md:mt-44">
        <h1 className="text-zinc-600 text-xl leading-tight text-center md:text-2xl mb-10">
          Contact me on my social networks{" "}
          <span className="text-red-500 font-semibold">
            or by filling out the following form
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-full px-8 py-10 mx-auto overflow-hidden border-2 border-red-400 rounded-xl shadow-lg shadow-rose-400 lg:max-w-xl">
            <form id="contactForm" className="mt-4" onSubmit={handleSubmit}>
              <div className="flex-1">
                <label
                  className="block mb-2 font-medium text-lg text-zinc-600"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full px-5 py-3 mt-2 bg-transparent border rounded-md text-zinc-600 border-gray-400 focus:border-red-400 focus:ring-red-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="flex-1 mt-6">
                <label
                  className="block mb-2 font-medium text-lg text-zinc-600"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="block w-full px-5 py-3 mt-2 bg-transparent border rounded-md text-zinc-600 border-gray-400 focus:border-red-400 focus:ring-red-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="w-full mt-6">
                <label
                  className="block mb-2 font-medium text-lg text-zinc-600"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400 bg-transparent border rounded-md md:h-48 text-zinc-600 border-gray-400 focus:border-red-400 focus:ring-red-400 focus:ring-opacity-40 focus:outline-none focus:ring"
                  placeholder="Message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                className="w-full px-6 py-3 mt-6 text-lg font-medium tracking-wide text-zinc-600 capitalize transition-colors duration-0 transform border border-red-400 rounded-md shadow-md hover:bg-red-100 hover:shadow-rose-400 focus:outline-none focus:ring focus:ring-rose-400 focus:ring-opacity-50"
                type="submit"
                disabled={state.submitting}
              >
                Contact
              </button>
            </form>
            {showSuccessMessage && (
              <div className="font-semibold text-xl mt-4 text-center text-emerald-600">
                <p>Message sent!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

*/
