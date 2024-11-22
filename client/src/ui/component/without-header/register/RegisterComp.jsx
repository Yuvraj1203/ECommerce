"use client"
import React, { useState } from 'react'
import {Button, Input} from "@nextui-org/react";
import Link from 'next/link';
import { toast } from 'react-toastify';
import {z} from 'zod'
import { useRouter } from 'next/navigation'

const inputData = [
    {title : "Username", label:"Login Username"}
]
const RegisterComp = () => {
  const [isLogin,setIsLogin] = useState(true);

  return (
    <div className='w-full md:max-w-96 gap-2 md:gap-4 flex flex-col items-center p-3 md:p-7 rounded-xl shadow-[0_12px_34px_0_#3943571a]'>
      <p className='text-xl md:text-2xl text-[#4C5867] font-bold'>Hello there! 👋</p>
      {isLogin ? 
        <Login setIsLogin={setIsLogin} />
        :
        <SignUp setIsLogin={setIsLogin} />
      }

    </div>
  )
}

const Login = ({setIsLogin}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loginForm,setLoginForm] = useState({});
  const router = useRouter();

  const loginZod = z.object({
    username : z.string().email('Invalid email format').transform(username => username.trim().toLowerCase()),
    password: z.string().min(6),
  })

  const handleLoginData = (e) => {
    const {name,value} = e.target;
    setLoginForm((prevData)=>({...prevData,[name]:value}))
  }

  const loginValidation = () => {
    try {
      const zodLoginValidation = loginZod.parse(loginForm); // Validates the form
      console.log("Validated Data:", zodLoginValidation);
      return true;      
    } catch (error) {
      console.error("Login Validation Errors:", error.errors); // Access error messages
      error.errors.forEach((err) => toast.error(err.message));
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!loginValidation()) return;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({email:loginForm.username,password:loginForm.password})
    })
    const data = await response.json();

    if(data.message == "login successfull"){
      toast.success("Login Successfully");
      router.push('/');
    }else{
      toast.error("not valid credentials");
    }

    console.log("login successfull client",await response.json());
  };

  return(
    <form onSubmit={handleSubmit} className='gap-2 md:gap-4 flex flex-col items-center' >
        <Input 
          onChange={handleLoginData}
          name={"username"}
          size='md' 
          type="email" 
          variant={"bordered"} 
          labelPlacement='outside' 
          label="Email" 
          placeholder='Email' 
          classNames={{
            inputWrapper:"rounded-md"
          }}
          required
        />
        <Input
          onChange={handleLoginData}
          name='password'
          label="Password"
          variant="bordered"
          labelPlacement='outside' 
          placeholder='Password'
          size='md'
          classNames={{
            inputWrapper:"rounded-md"
          }}
          required
          endContent={
            <button className="focus:outline-none" type="button" onClick={()=>setIsVisible(!isVisible)} aria-label="toggle password visibility">
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Link href={"#"} className='text-[#DB4444] font-semibold text-sm self-end hover:text-[#b23636] hover:underline duration-300' >Forget Password?</Link>
        <Button type='submit' className="bg-[#DB4444] text-white text-sm md:text-base font-semibold rounded-md w-full">
          Login
        </Button>
        <p className='text-sm'>Don't have an account? <span onClick={()=>setIsLogin((prev)=>!prev)} className='font-bold cursor-pointer hover:underline duration-300'>Sign up</span> for free.</p>
    </form>
  )
}

const SignUp = ({setIsLogin}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [signupForm,setSignupForm] = useState({});

  const handleLoginData = (e) => {
    const {name,value} = e.target;
    setSignupForm((prevData)=>({...prevData,[name]:value}))
  }

  const handleSubmit = () => {
    return null;
  }

  return(
    <>
        {/* Name  */}
        <Input 
          onChange={handleLoginData}
          name={"name"}
          size='md' 
          type="text" 
          variant={"bordered"} 
          labelPlacement='outside' 
          label="Name" 
          placeholder='Enter your name' 
          classNames={{
            inputWrapper:"rounded-md"
          }}
        />
        {/* phone number  */}
        <Input 
          onChange={handleLoginData}
          name={"phone"}
          size='md' 
          type="number" 
          variant={"bordered"} 
          labelPlacement='outside' 
          label="Phone Number" 
          placeholder='Enter your number' 
          classNames={{
            inputWrapper:"rounded-md"
          }}
        />
        {/* email  */}
        <Input 
          onChange={handleLoginData}
          name={"email"}
          size='md' 
          type="email" 
          variant={"bordered"} 
          labelPlacement='outside' 
          label="Email" 
          placeholder='Enter your email' 
          classNames={{
            inputWrapper:"rounded-md"
          }}
        />
        <Input
          onChange={handleLoginData}
          name='password'
          label="Password"
          variant="bordered"
          labelPlacement='outside' 
          placeholder='Enter password'
          size='md'
          classNames={{
            inputWrapper:"rounded-md"
          }}
          endContent={
            <button className="focus:outline-none" type="button" onClick={()=>setIsVisible(!isVisible)} aria-label="toggle password visibility">
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <Link href={"#"} className='text-[#DB4444] font-semibold text-sm self-end hover:text-[#b23636] hover:underline duration-300' >Forget Password?</Link>
        <Button onClick={handleSubmit} type='submit' className="bg-[#DB4444] text-white text-sm md:text-base font-semibold rounded-md w-full">
          Sign up
        </Button>
        <p className='text-sm'>Already an account? <span onClick={()=>setIsLogin((prev)=>!prev)} className='font-bold cursor-pointer hover:underline duration-300'>Log in</span> now.</p>
    </>
  )
}

export const EyeSlashFilledIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
      fill="currentColor"
    />
    <path
      d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
      fill="currentColor"
    />
    <path
      d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
      fill="currentColor"
    />
    <path
      d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
      fill="currentColor"
    />
    <path
      d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
      fill="currentColor"
    />
  </svg>
);

export const EyeFilledIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
      fill="currentColor"
    />
    <path
      d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
      fill="currentColor"
    />
  </svg>
);

export default RegisterComp