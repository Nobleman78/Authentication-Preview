import PropTypes from 'prop-types';
import './Profile.css'
import { useState } from 'react';
const Profile = ({user}) => {
    console.log(user?.email);
    const[isopen,setIsopen]=useState(false);

  

    return (
        
        <div className=''>
          
           
        </div>
    );
};
Profile.propTypes={
    user:PropTypes.object
}
export default Profile;