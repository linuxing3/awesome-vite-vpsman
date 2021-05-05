import React from 'react'

export const CardPage = () => (
  <div className="flex flex-wrap">
    <div className="w-full mb-6 md:w-4/12 md:mb-0 md:p-3">
      <Card>
        <img
          className="h-auto max-w-full md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1608683063/Assets/lamborghini_mxb2j7.jpg"
          alt="Bugatti"
        />
        <Card.Body>
          <Card.Title className="text-lg">Lamborghini</Card.Title>
          <Card.Text>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </Card.Text>
          <a className="inline-flex items-center mt-4 text-indigo-500 cursor-pointer">
            View Details
            <ArrowIcon />
          </a>
        </Card.Body>
      </Card>
    </div>
    <div className="w-full mb-6 md:w-4/12 md:mb-0 md:p-3">
      <Card>
        <img
          className="h-auto max-w-full md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1608683147/Assets/bugatti-cars-7-free-car-hd-wallpaper_j4xyj6.jpg"
          alt="Bugatti"
        />
        <Card.Body>
          <Card.Title className="text-lg">Bugatti</Card.Title>
          <Card.Text>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </Card.Text>
          <a className="inline-flex items-center mt-4 text-indigo-500 cursor-pointer">
            View Details
            <ArrowIcon />
          </a>
        </Card.Body>
      </Card>
    </div>
    <div className="w-full mb-6 md:w-4/12 md:mb-0 md:p-3">
      <Card>
        <img
          className="h-auto max-w-full md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1599343428/Assets/3_znyzrd.jpg"
          alt="blog"
        />
        <Card.Body>
          <Card.Title className="text-lg">Computer</Card.Title>
          <Card.Text>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </Card.Text>
          <a className="inline-flex items-center mt-4 text-indigo-500 cursor-pointer">
            View Details
            <ArrowIcon />
          </a>
        </Card.Body>
      </Card>
    </div>
  </div>
);

/* Logic */
const style = {
  card: `relative flex flex-col border-2 border-gray-200 rounded-lg`,
  cardBody: `block flex-grow flex-shrink p-5`,
  cardTitle: `font-medium text-gray-700 mb-3`,
  cardText: `text-gray-500`,
};
const inlineStyle = {
  boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};

export const Card = ({ children }) => (
  <div className={style.card} style={inlineStyle}>
    {children}
  </div>
);

Card.Body = ({ children }) => <div className={style.cardBody}>{children}</div>;
Card.Title = ({ children }) => (
  <div className={style.cardTitle}>{children}</div>
);
Card.Text = ({ children }) => <div className={style.cardText}>{children}</div>;

export const ArrowIcon = () => (
  <svg
    className="w-4 h-4 ml-2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);