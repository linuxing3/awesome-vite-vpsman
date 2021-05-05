import { useEffect, useRef, useState } from 'react';
/* You'll need to install @reach/portal which simplify creating portal*/
import Portal from '@reach/portal';

export const DrawerPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-8">
      <button
        type="button"
        onClick={toggle}
        className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
      >
        Click to open me
      </button>
      <Drawer isOpen={isOpen} toggle={toggle} position="left">
        <Drawer.Header>Drawer title</Drawer.Header>
        <Drawer.Body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Drawer.Body>
        <Drawer.Footer>
          <button
            onClick={toggle}
            className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500"
          >
            Close
          </button>
          <button
            onClick={toggle}
            className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
          >
            Confirm
          </button>
        </Drawer.Footer>
      </Drawer>
    </div>
  );
};

/* Logic */
const style = {
  body: `flex-shrink flex-grow p-4`,
  container: `fixed top-0 left-0 z-40 w-full h-full m-0 overflow-hidden`,
  animation: {
    right: 'animate-drawer-right',
  },
  content: `relative flex flex-col bg-white pointer-events-auto`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
  header: `items-start justify-between p-4 border-b border-gray-300`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  orientation: {
    right: `flex w-8/12 md:w-80 lg:w-96 h-full right-0 mx-0 my-0 absolute focus:outline-none `,
  },
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
};

const Drawer = ({ children, isOpen, toggle }) => {
  const ref = useRef(null);

  // close drawer when you click outside the dialog
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref?.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen, ref]);

  // close drawer when you click on "ESC" key
  useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen) return;
      if (event.key === 'Escape') {
        toggle(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [isOpen]);

  // Put focus on drawer, hide scrollbar and prevent body from moving when drawer is open
  useEffect(() => {
    if (!isOpen) return;

    ref.current?.focus();
    const overflow = document.documentElement.style.overflow;
    const paddingRight = document.documentElement.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }, [isOpen]);

  return (
    <Portal>
      {isOpen && (
        <>
          <div className={style.overlay} />
          <div className={style.container}>
            <div
              aria-modal={true}
              className={style.orientation.right}
              ref={ref}
              role="dialogue"
              tabIndex={-1}
            >
              <div className={`${style.animation.right} ${style.content}`}>
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
};

Drawer.Header = ({ children }) => (
  <div className={style.header}>
    <h4 className={style.headerTitle}>{children}</h4>
  </div>
);

Drawer.Body = ({ children }) => <div className={style.body}>{children}</div>;

Drawer.Footer = ({ children }) => (
  <div className={style.footer}>{children}</div>
);