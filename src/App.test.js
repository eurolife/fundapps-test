import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { render, getAllByTestId, screen, queryAllByTestId, getAllByRole, within } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './components/App';
import axios from 'axios';
import ArticlesList from './components/ArticlesList';
import {testData} from './data/testData';

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
  test('Shows next 5 articles when clicking', () => {
    const fakeResults = testData;

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

    // check message and number of list items
    const listItems2 = document.querySelectorAll('li')
    expect(listItems2).toHaveLength(10)

  });
});