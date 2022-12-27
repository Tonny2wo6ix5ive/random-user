import axios from 'axios';
import { useEffect, useState } from 'react';
import '../index';

const User = () => {

    const [userData, setUserData] = useState([]);
    const [reflesh, setReflesh] = useState(false);

    useEffect(()=>{
        axios.get('https://randomuser.me/api/').then((promise)=>{
            setUserData(promise.data.results);
        })
    },[reflesh])

    if(!userData){
    return <h1>Loading...</h1>
    }
    return ( 
        <div className='user-parent-div'>
            <div className='bg1'></div>
            <div className='bg2'></div>
            <div className='user'>
                {userData.map((value)=>(
                    <div className='content'>
                        <div className='profile'>
                          <img src={value.picture.medium} />
                          <p>Hi my name's, {value.name.first} {value.name.last}</p>
                          <div className='border'></div>
                        </div>
                        <div className='parent-user-details'>
                            <p className='user-details'>
                                <ion-icon name="mail-outline"></ion-icon>
                                {value.email}
                            </p>
                            <p className='user-details'>
                                <ion-icon name="call-outline"></ion-icon>
                                {value.cell}
                            </p>
                            <p className='user-details'>
                                <ion-icon name="logo-twitter"></ion-icon>
                                <a target='_blank' href='https://twitter.com/Tonny2wo6ix5ive'>
                                    @{value.login.username}
                                </a>
                            </p>
                            <p className='user-details'>
                                <ion-icon name="location-outline"></ion-icon>
                                {value.location.city}, {value.location.state}, {value.location.country}
                            </p>
                        </div>
                        <button onClick={()=>setReflesh(!reflesh)} >Reflesh</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default User;