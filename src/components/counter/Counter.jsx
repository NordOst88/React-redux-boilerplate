import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../../reducers/counterSlice';
import './Counter.scss';

const Counter = () => {
  const count = useSelector(selectCount);
  return (
    <div>
      {count}
    </div>
  );
};

export default Counter;
