import React from 'react';
import PropTypes from 'prop-types';
import AdvertCard from './AdvertCard';
import { TableCard } from './TableCard';

const cards = [
  {
    id: 'chartjs-7',
    meta: {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
          {
            label: 'Page Impressions',
            data: [10, 20, 30, 40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
          },
          {
            label: 'Adsense Clicks',
            data: [5, 15, 10, 30],
            type: 'line',
            fill: false,
            borderColor: 'rgb(54, 162, 235)'
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  },
  {
    id: '',
    meta: {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Views',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            lineTension: 0.1
          }
        ]
      },
      options: {}
    }
  },
  {
    id: '',
    meta: {
      type: 'bar',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Likes',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    }
  },
  {
    id: '',
    meta: {
      type: 'doughnut',
      data: {
        labels: ['P1', 'P2', 'P3'],
        datasets: [
          {
            label: 'Issues',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ]
          }
        ]
      }
    }
  }
];

const GraphCard = (props) => {
  return (
    <div className='flex flex-row flex-wrap flex-grow mt-2'>
      {cards.map((card) => (
        <div className='w-full p-6 md:w-1/2 xl:w-1/3'>
          {' '}
          <div className='bg-white border-transparent rounded-lg shadow-xl'>
            <div className='p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100'>
              <h5 className='font-bold text-gray-600 uppercase'>Graph</h5>
            </div>
            <div className='p-5'>
              <canvas
                id={card.id}
                className='chartjs'
                width='undefined'
                height='undefined'
              ></canvas>
            </div>
          </div>
        </div>
      ))}
      <TableCard></TableCard>
      <AdvertCard></AdvertCard>
    </div>
  );
};

GraphCard.propTypes = {
  list: PropTypes.object
};

export default GraphCard;
