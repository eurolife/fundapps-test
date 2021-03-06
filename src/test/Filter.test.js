import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from '../components/App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  document.body.removeChild(container);
  container = null;
});

describe('Filter', () => {
  test('Filter by article source', () => {

    act(() => {
      ReactDOM.render(<App />, container)
    });

    const filter = document.querySelector('.filter');
    fireEvent.change(filter,  { target: { value: 'BBC News' }})
    //screen.debug()
    // check each item is the correct filtered source
    const sourceText = document.querySelectorAll('.articleSource')
    sourceText.forEach((item, index) => {
      expect(item.textContent.toEqual('BBC News'))
    });
  });
});