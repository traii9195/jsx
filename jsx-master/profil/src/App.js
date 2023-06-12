{/* importation de notre fichier stylesheet */}

import './App.css';
{/* importation de nos composants  */}

import ProfilePhoto from './profil/Profilphoto';
import FullName from './profil/Fullname';
import Adresse from './profil/Adresse';

function App() {
  return (
    {/* l appele de nos composants */}

    <div className='t'>
    <ProfilePhoto/>
    <FullName/>
   <Adresse/>
   </div>
  );
}

export default App;
