"use client"
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Login() {

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password })
      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      toast.success('Login Successful')
      if (user.role === 'admin') {
        router.push('admin')
      } else {
        router.push('profile')
      }

    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Error Logging You In')
      }
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className='mx-auto container md:px-[150px] min-h-[calc(100vh-100px)] px-4 mt-7 mb-7 '>
      <ToastContainer />
      <div className="flex flex-col md:flex-row h-auto justify-center items-center">
        <div className="hidden md:flex md:w-1/2  shadow-2xl">
          <img src='event.jpg' className='flex  object-cover' />
        </div>
        <div className="md:w-1/3 px-3 py-6  flex flex-col shadow-2xl  justify-center space-y-3 w-full">
          <div className='py-4'>
            <h2 className='text-black/60 font-bold text-3xl text-center'>New to Event<span className='text-secondary font-bold text-3xl'>IE</span></h2>
            <h2 className='text-center font-bold text-black/60 text-secondary'>Register Here!</h2>
          </div>
          <div className='flex flex-col '>
            <form className='flex flex-col gap-2' onSubmit={handleLogin}>



              <div className='flex flex-col'>

                <label>Email</label>
                <input className='md:w-80 h-8 bg-black/10 outline-none rounded-md px-4'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <div className='flex flex-col relative'>

                <label>Password</label>

                <input className=' bg-black/10 rounded-md md:w-80 h-8 outline-none  px-4' type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className='absolute flex right-3 items-center inset-y-0 top-6 justify-center cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}

                </span>

              </div>

              <div className='flex justify-center'>
                <Button className='rounded-none px-4 py-2 text-white font-bold' type='submit'>
                  {loading ? "Login In" : "Log In"}
                </Button>
              </div>
            </form>
            <div className='py-2'>
              <p className='text-black/70 text-center'>
                Don't have an account? Sign Up  
              </p>
            </div>


          </div>

        </div>
      </div>

    </div>
  )
}
