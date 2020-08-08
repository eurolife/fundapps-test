import React, {useEffect} from 'react';
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
                <li key={`article${i}`} className="border-b-2 border-gray-400 pb-3">
                  <div className="mt-3">
                    <a className="font-bold text-lg hover:text-pinkish leading-tight" href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
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
      <Message message="There are no articles right now."/>  
        
      }
    </div>
    )
}

export default NewsList;