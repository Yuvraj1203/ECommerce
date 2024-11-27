'use client'
import { AuthContext } from '@/context/AuthContextProvider';
import { Button } from '@nextui-org/react'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const AuthButton = ({user}) => {
    const redirect = useRouter();
    const {setUser} = useContext(AuthContext);
    const handleLogout = () => {
        console.log(user)
        localStorage.removeItem('user');
        setUser(null);
        Cookies.remove('userToken');
        redirect.refresh();
    }
    return(
        <>
            {user ? 
            <Button onClick={handleLogout} className='text-white text-base font-semibold bg-themeOrange rounded-md'>Logout</Button>
            :
            <Button onClick={()=>redirect.push("/register")} className='text-white text-base font-semibold bg-themeOrange rounded-md'>Login</Button>
            }
        </>
    )
}

export default AuthButton