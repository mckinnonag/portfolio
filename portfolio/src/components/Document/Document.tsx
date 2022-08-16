import React from 'react';

const DocIframe = () => {
  const src: string = 'https://docs.google.com/document/d/1EYJOQPmWTERhknI0hZTI7yrUY0pQ6rXdk-GViXy6_3k/edit?usp=sharing';
  if (!src) {
    return <div>Loading...</div>;
  }

  
  return (
    <div>
      <iframe
        src={src}
        title= 'file'
        height= '1000'
        width= '1000'
      ></iframe>
    </div>
  );
};

export default DocIframe;