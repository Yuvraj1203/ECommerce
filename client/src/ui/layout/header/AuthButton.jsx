'use client'
import { AuthContext } from '@/context/AuthContextProvider';
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const AuthButton = () => {
    const redirect = useRouter();
    const {user,setUser} = useContext(AuthContext);
    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
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