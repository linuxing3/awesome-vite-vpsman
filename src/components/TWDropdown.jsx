import { useEffect, useRef, useState } from 'react';

export const DropdownPage = () => (
  <Dropdown>
    <Dropdown.Toggle>
      <span className="flex px-6 py-2 font-medium text-white bg-indigo-900 rounded">
        Options
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Heroku</Dropdown.Item>
      <Dropdown.Item>Postgres</Dropdown.Item>
      <hr className="my-2" />
      <Dropdown.Item>Digital Ocean</Dropdown.Item>
      <Dropdown.Item>Aws functions</Dropdown.Item>
      <hr className="my-2" />
      <Dropdown.Item>Azure</Dropdown.Item>
      <Dropdown.Item>Strapi</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

/* Logic*/

const useToggle = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const toggle = () => {
    setShow(!show);
  };

  // close dropdown when you click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, ref]);

  // close dropdown when you click on "ESC" key
  useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return {
    show,
    toggle,
    ref,
  };
};

const style = {
  menu: `block z-30 absolute top-0 left-0 bg-white float-left py-2 px-0 text-left border border-gray-300 rounded-sm mt-0.5 mb-0 mx-0 bg-clip-padding`,
  item: `block w-full py-1 px-8 mb-2 text-sm font-normal clear-both whitespace-nowrap border-0 hover:bg-gray-200 cursor-pointer`,
};

const Dropdown = ({ children }) => {
  const { show, toggle } = useToggle();
  /* First child contains the dropdown toggle */
  const dropdownToggle = children[0];

  /* Second child contains the dropdown menu */
  const dropdownMenu = children[1];

  return (
    <>
      <button
        className="focus:outline-none"
        onClick={toggle}
        type="button"
        id="options-menu"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {dropdownToggle}
      </button>
      {show && <>{dropdownMenu}</>}
    </>
  );
};

Dropdown.Toggle = ({ children }) => <>{children}</>;

Dropdown.Menu = ({ children }) => (
  <div className="relative">
    <div
      style={{ transform: 'translate3d(0px, 3px, 0px)' }}
      className={style.menu}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      {children}
    </div>
  </div>
);

/* You can wrap the a tag with Link if you are using either Create-React-App, Next.js or Gatsby */
Dropdown.Item = ({ children }) => (
  <a href="#" className={style.item} role="menuitem">
    {children}
  </a>
);

export default Dropdown;