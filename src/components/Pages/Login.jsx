import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Authprovider/Authprovider';

const Login = () => {

    const { signUser } = useContext(AuthContext)
    const [erromessage, setErrormessage] = useState('');
    const [success, setSucess] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        //Using react toastify

        if (erromessage) {
            toast(erromessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }


        setErrormessage(' ');
        setPassword('');
        setEmail(' ');
        setSucess(false);


        signUser(email, password)
            .then(res => {
                console.log(res.user)
                setSucess(true);
                navigate('/')

            })
            .catch(error => {
                console.log('Error', error.message)
                setErrormessage(error.message)
                setSucess(false);
            })


    }
    return (
        <div className='bg-gray-50'>

            <div className='flex mx-auto flex-col items-center justify-center py-5 px-4'>
                <div className=' p-8 rounded-2xl bg-white shadow'>
                    <h2 className='text-2xl text-center font-bold'>Login</h2>
                    <form onSubmit={handleSubmit} className='mt-4 space-y-3' action="">

                        <div>
                            <label htmlFor="">Email</label>
                            <div>
                                <input onChange={(event) => setEmail(event.target.value)} required className='rounded p-2 w-full outline-none' type="email" value={email} placeholder='Enter your email' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <div>
                                <input onChange={(event) => setPassword(event.target.value)} required className='rounded p-2 w-full outline-none' type="password" value={password} placeholder='Enter your password' />
                            </div>
                        </div>

                        <div className=' flex items-center justify-between '>
                            <div className=' flex items-center flex-wrap gap-2'>
                                <input type="checkbox" name="remember-me" />
                                <label className='ml-2 block text-sm' htmlFor="">
                                    Remember me
                                </label>
                                <a href='#password-reset' className='text-sm forget-button ' >Forgot your password?</a>

                            </div>
                        </div>
                        <button className="text-center w-full bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 py-3 text-white mt-1">Log in</button>


                        {
                            success && <p className='text-secondary text-center'>Log in successfull.</p>
                        }

                        <p className='text-sm'>Don&apos;t Have an account? <Link className="text-sm ml-1" to="/registration">Registration here</Link></p>

                        <p className='text-center'>Or</p>

                        <div className=''>
                            <div className='flex justify-start  gap-2 outline outline-blue-600 rounded ' >
                                <FcGoogle className='mt-2.5 ml-3  w-[20px] h-[20px] '></FcGoogle>
                                <a className='bg-blue-500 text-center text-white p-2 w-full' href="#login-with-google">Login With Google</a>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
        </div>

    );
};

export default Login;