import React from 'react';
import Message from './Message';
import { formatDate } from '../helpers';

const NewsList = (props) => {

  return (
    <div>
      {props.totalResults ? 
      <div>
       <h1 className="text-pinkish text-2xl font-bold border-b-2 border-pinkish inline-block mt-4 md:mt-0">News</h1>
        <ul className="mt-8">
          {
            props.articles.slice(0, props.limitTo).map((article,i) =>   (
              props.source === 'All' || article.source.name === props.source ?
                <li key={`article${i}`} className="flex flex-wrap border-b-2 border-gray-400 pb-3">
                  <div className="mt-3">
                    <a className="font-bold text-lg hover:text-pinkish leading-tight transition-colors duration-300" href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                  </div> 
                  <div className="mt-2 flex justify-start">
                    <span className="text-xs mr-4">{formatDate(article.publishedAt)}</span>
                    <span className="flex leading-relaxed article-source bg-gray-600 text-white text-xs rounded-full px-4">{article.source.name}</span>
                  </div>
                  
                  </li> 
                : ''
              ))
              
          }
         </ul>
        
      </div>
      :
      <Message message="There is no news right now. No news is good news."/>  
        
      }
    </div>
    )
}

export default NewsList;