import React from 'react';

const LinkForm = () => {
    return (
        <div className="flex justify-center items-center bg-white">
        <form className="w-full m-8" action="#">
          <div className="flex flex-col md:flex-row items-center border-2 border-gray-200 rounded-lg overflow-hidden">
            <input
              className="flex-auto min-w-0 w-full px-4 py-2"
              id="link"
              type="text"
              placeholder="Link"
              aria-label="Link"
            />
            <button
              className="w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      );
};

export default LinkForm;