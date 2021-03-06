import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div>
        <div className="w-full max-w-xs">
          <form
            action="https://formspree.io/legacy.teams@outlook.com"
            method="POST"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Your Name:
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  required
                  name="name"
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email:
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  minLength="8"
                  required
                  placeholder="Email"
                  type="email"
                  name="_replyto"
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Message:
                <textarea
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  name="message"
                  placeholder="Message"
                />
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send"
              >
                Send
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 LegacyTEAMS. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
