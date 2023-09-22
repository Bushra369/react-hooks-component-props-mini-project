import React from 'react';
import Article from './Article';

function ArticleList(props) {
  return (
    <main>
      {props.posts.map((post, index) => (
        <Article
          key={index} 
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
