import React from 'react';

function About(props) {
  
  const imageUrl = props.image || "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
