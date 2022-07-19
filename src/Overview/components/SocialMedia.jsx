import React from 'react';
const SocialMedia = () => {
  return (
    <div id='social-media'>
      <a href='https://www.facebook.com/'>
        <img className = 'social-icon' id='facebook' src = 'http://localhost:3000/assets/social-media/icon-facebook.png'/>

      <a href='https://www.instagram.com/'>
        <img className = 'social-icon' id='instagram' src = 'http://localhost:3000/assets/social-media/icon-instagram.png'/>
      </a>

      <a href='https://www.pinterest.com/login/'></a>
        <img className = 'social-icon' id='pinterest' src = 'http://localhost:3000/assets/social-media/icon-pinterest.png'/>
      </a>
    </div>
  );
}

export default SocialMedia;