import React from 'react';
{/* l appele de l image  */}

import photo from './PIC.jpg'
{/* importation de notre fichier stylesheet */}
import './Profilephoto.css'
{/* function ProfilePhoto */}

function ProfilePhoto({src, alt}) {
  return (
    <img src={photo} alt="mypitcure "className='x'/>
  );
}

export default ProfilePhoto;
