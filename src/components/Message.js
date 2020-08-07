import React from 'react';

const Message = (props) => <div className="message font-bold text-center text-lg">{props.message}</div>

Message.defaultProps = {
  message: 'No articles found.'
}

export default Message;