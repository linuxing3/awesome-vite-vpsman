import React from 'react';
import { classNames } from '../utils';

const defaultInputStyle = [
  'w-full',
  'px-3',
  'pb-3',
  'text-gray-700',
  'transition',
  'duration-500',
  'bg-gray-200',
  'border-b-4',
  'border-gray-300',
  'rounded',
  'focus:outline-none',
  'focus:border-purple-600'
];

const defaultLabelStyle = [
  'w-full',
  'px-10',
  'pb-3',
  'mb-2',
  'ml-3',
  'text-7xl',
  'font-bold',
  'text-gray-700'
];

export const TWInput = ({ label, register, type, style }) => (
  <div className='mb-6 bg-gray-200 rounded'>
    <label hidden className={classNames(defaultLabelStyle)} htmlFor={label}>
      <span>{label}</span>
    </label>
    <input
      id={label}
      type={type ? type : 'text'}
      placeholder={label}
      className={classNames(...defaultInputStyle, style)}
      {...register(label, { required: true, maxLength: 90 })}
    />
  </div>
);

export const TWSelect = ({ onChange, onBlur, name, label, style, options }) => (
  <div className='mb-6 bg-gray-200 rounded'>
    <label>{label}</label>
    <select
      id={label}
      name={name}
      className={classNames(...defaultInputStyle, style)}
      onChange={onChange}
      onBlur={onBlur}
    >
      {options.map((option: string | number) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  </div>
);
