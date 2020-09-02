import React from 'react';
import { useDispatch } from 'react-redux';
import { message, Space, Button } from 'antd';
import { increment, decrement } from '../../reducers/counterReducer';
import './Controls.scss';
import 'antd/lib/space/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/message/style/index.css';

const Controls = () => {
  const dispatch = useDispatch();

  const onIncrement = () => {
    message.info('Incremented');
    dispatch(increment());
  };
  const onDecrement = () => {
    message.warning('Decremented');
    dispatch(decrement());
  };

  return (
    <Space>
      <Button type="primary" onClick={onIncrement}>Increment</Button>
      <Button type="danger" onClick={onDecrement}>Decrement</Button>
    </Space>
  );
};

export default Controls;
