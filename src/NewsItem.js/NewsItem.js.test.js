import React from 'react';
import ReactDOM from 'react-dom';
import NewsItemJs from './NewsItemJs';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewsItemJs />, div);
  ReactDOM.unmountComponentAtNode(div);
});