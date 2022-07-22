import React from 'react';
const SocialMedia = () => {
  return (
    <div id='social-media'>
      <a href='https://www.facebook.com/'>
        <img className = 'social-icon' id='facebook' src = '/assets/social-media/icon-facebook.png'/>
      </a>
      <a href='https://www.instagram.com/'>
        <img className = 'social-icon' id='instagram' src = '/assets/social-media/icon-instagram.png'/>
      </a>
      <a href='https://www.pinterest.com/login/'>
        <img className = 'social-icon' id='pinterest' src = '/assets/social-media/icon-pinterest.png'/>
      </a>
    </div>
  );
}

export default SocialMedia;