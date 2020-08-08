import React from 'react';
import ReactDOM from 'react-dom';
import { within } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import ArticlesList from '../components/ArticlesList';
import {testData} from '../data/testData';
 
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

describe('ArticlesList', () => {
  test('Shows first 5 articles and displays source and title of each', async () => {
    const fakeResults = testData;
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeResults)
      })
    );

    await act(async () => {
      ReactDOM.render(<ArticlesList limitTo={5} source="All" totalResults={fakeResults.totalResults} articles={fakeResults.articles} />, container)
    });

    //screen.debug()
    const listItems = document.querySelectorAll('li')
    expect(listItems).toHaveLength(5)
    

    listItems.forEach((item, index) => {

      const { getByText, queryByText } = within(item)
      const { title, source } = fakeResults.articles[index]
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(source.name)).toBeInTheDocument()
    });

  });
})


