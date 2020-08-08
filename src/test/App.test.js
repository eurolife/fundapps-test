import React from 'react';
import ReactDOM from 'react-dom';
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

describe('Show More button', () => {
  test('Shows more articles when clicking',  () => {

    act(() => {
      ReactDOM.render(<App />, container)
    });

    const button = document.querySelector('button');
    const listItems = document.querySelectorAll('li')

    expect(listItems).toHaveLength(5)

    // Test click of show more button
     act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    
    // check number of list items
    const listItems2 = document.querySelectorAll('li')
    expect(listItems2.length > 5);

  });
});

