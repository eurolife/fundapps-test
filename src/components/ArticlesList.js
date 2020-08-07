import React, {useEffect} from 'react';
import Message from './Message';


const NewsList = (props) => {

  return (
    <div>
      {props.totalResults ? 
      <div>
       
        <ul>
          {
            props.articles.slice(0, props.limitTo).map((article,i) =>   (
              props.source === 'All' || article.source.name === props.source ?
                <li role="listitem" data-testid="list-item" key={`article${i}`}>{article.title} <span>{article.source.name}</span></li> 
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