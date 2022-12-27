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
            <div className='bg1'>
                <h1>Random User</h1>
            </div>
            <div className='bg2'>
                <p className='about'><a target='_blank' href='https://tonnymakondesa.netlify.app/'>About developer</a></p>
            </div>
            <div className='user'>
                {userData.map((value)=>(
                    <div className='content'>
                        <div className='profile'>
                          <img src={value.picture.medium} />
                          <h2>{value.name.first} {value.name.last}</h2>
                          <div className='border'></div>
                        </div>
                        <div className='parent-user-details'>
                            <p className='user-details'>
                                <ion-icon name="mail-outline"></ion-icon>
                                <a target='_blank' href='https://twitter.com/Tonny2wo6ix5ive'>
                                    <span>{value.email}</span>
                                </a>
                            </p>
                            <p className='user-details'>
                                <ion-icon name="call-outline"></ion-icon>
                                 <span>{value.cell}</span>
                            </p>
                            <p className='user-details'>
                                <ion-icon name="logo-twitter"></ion-icon>
                                <a target='_blank' href='https://twitter.com/Tonny2wo6ix5ive'>
                                    <span>@{value.login.username}</span>
                                </a>
                            </p>
                            <p className='user-details'>
                                <ion-icon name="location-outline"></ion-icon>
                                <span>{value.location.city}, {value.location.state}, {value.location.country}</span>
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