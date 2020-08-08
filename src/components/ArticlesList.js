import React, {useEffect} from 'react';
import Message from './Message';
import { formatDate } from '../helpers';

const NewsList = (props) => {

  return (
    <div>
      {props.totalResults ? 
      <div>
       
        <ul>
          {
            props.articles.slice(0, props.limitTo).map((article,i) =>   (
              props.source === 'All' || article.source.name === props.source ?
                <li key={`article${i}`}>
                  <span>{article.title}</span> 
                  <span className="article-source">{article.source.name}</span>
                  <span>{formatDate(article.publishedAt)}</span>
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