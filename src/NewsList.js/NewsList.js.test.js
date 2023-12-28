import React from 'react';
import ReactDOM from 'react-dom';
import NewsListJs from './NewsListJs';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsListJs />, div);
  ReactDOM.unmountComponentAtNode(div);
});