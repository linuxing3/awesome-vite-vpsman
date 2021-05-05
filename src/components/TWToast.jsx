import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const ToastPage = () => (
  <>
    <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
      <button
        onClick={() => toast.success('Your message...', 'topLeft', 3000)}
        className="px-6 py-2 font-medium text-white bg-green-700 rounded focus:outline-none"
      >
        Top Left
      </button>
      <button
        onClick={() => toast.success('Your message...', 'topRight', 4000)}
        className="px-6 py-2 font-medium text-white bg-green-700 rounded focus:outline-none"
      >
        Top Right
      </button>
      <button
        onClick={() => toast.success('Your message...', 'bottomLeft', 1000)}
        className="px-6 py-2 font-medium text-white bg-green-700 rounded focus:outline-none"
      >
        Bottom Left
      </button>
      <button
        onClick={() => toast.success('Your message...', 'bottomRight', 2000)}
        className="px-6 py-2 font-medium text-white bg-green-700 rounded focus:outline-none"
      >
        Bottom Right
      </button>
    </div>
  </>
);

/* Toast logic*/
export const toast = {
  success: (message, placement, duration) => {
    triggerToast(message, placement, duration);
  },
};

const triggerToast = (message, placement, duration) => {
  ReactDOM.render(
    <ToastContainer duration={duration ? duration : 3000} placement={placement}>
      {message}
    </ToastContainer>,
    document.getElementById('toast'),
  );
};

export const ToastContainer = ({ children, placement, duration }) => {
  const [closeTimeout, setCloseTimeout] = useState(0);

  useEffect(() => {
    beginCloseTimeout();

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        ReactDOM.unmountComponentAtNode(document.getElementById('toast'));
      }
    };
    document.addEventListener('keyup', handleEscape);

    return () => {
      document.removeEventListener('keyup', handleEscape);
    };
  }, []);

  const closeSnackBar = () => {
    clearTimeout(closeTimeout);
    ReactDOM.unmountComponentAtNode(document.getElementById('toast'));
  };

  const beginCloseTimeout = () => {
    if (duration) {
      const timeout = setTimeout(() => closeSnackBar(), duration);
      setCloseTimeout(timeout);
    }
  };

  return (
    <div
      className={`${placements[placement]} flex fixed bg-white shadow-lg rounded text-sm py-3 z-10 px-4 border-l-4 border-green-600`}
      onMouseEnter={() => clearTimeout(closeTimeout)}
    >
      <div className="pr-1">
        <SuccessIcon />
      </div>
      {children}
    </div>
  );
};

/* The placement of toast (topLeft, topRight, bottomLeft and bottomRight)*/
const placements = {
  topLeft: 'animate-left top-6 left-4',
  topRight: 'animate-right top-6 right-4',
  bottomLeft: 'animate-left bottom-6 left-4',
  bottomRight: 'animate-right bottom-6 right-4',
};

/* Icon */
const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={18}
    height={18}
  >
    <linearGradient
      id="I9GV0SozQFknxHSR6DCx5a"
      x1="9.858"
      x2="38.142"
      y1="9.858"
      y2="38.142"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#21ad64" />
      <stop offset="1" stopColor="#088242" />
    </linearGradient>
    <path
      fill="url(#I9GV0SozQFknxHSR6DCx5a)"
      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
    />
    <path
      d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414    c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172   C34.219,15.391,32.953,15.391,32.172,16.172z"
      opacity=".05"
    />
    <path
      d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0   L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13 C22.475,33.646,21.525,33.646,20.939,33.061z"
      opacity=".07"
    />
    <path
      fill="#fff"
      d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0   L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13 C22.317,33.098,21.683,33.098,21.293,32.707z"
    />
  </svg>
);

// import Document, { Html, Head, Main, NextScript } from 'next/document';

// /* Add <div id="toast"/> inside pages/_document.js with Next.js*/

// /* if you are using create-react-app, just add <div id="toast"/> in public/index.html*/

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head />
//         <body>
//           <Main />
//           <div id="toast" />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }