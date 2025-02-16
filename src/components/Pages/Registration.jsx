import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { FcGoogle } from 'react-icons/fc';
const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();


        if (password !== confirmPassword) {
            setError('Password should be match');
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        // If the form submit then the input
        //  field will be clear, also setError will be clear
        setError(' ');
        setPassword('');
        setEmail(' ');
        setConfirmPassword('');


        //This is from useContext API
        createUser(email, password)
            .then(res => {
                console.log(res.user)

            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })



    }
    return (
        <div className='bg-gray-50'>

            <div className='flex mx-auto flex-col items-center justify-center py-5 px-4'>
                <div className=' p-8 rounded-2xl bg-white shadow'>
                    <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
                    <form onSubmit={handleSubmit} className='mt-4 space-y-3' action="">

                        <div>
                            <label htmlFor="">Email</label>
                            <div>
                                <input onChange={(event) => setEmail(event.target.value)} className='rounded p-2 w-full outline-none' type="email" value={email} placeholder='Enter your email' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <div>
                                <input onChange={(event) => setPassword(event.target.value)} className='rounded p-2 w-full outline-none' type="password" value={password} placeholder='Enter your password' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Confirm Password</label>
                            <div>
                                <input onChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} className='rounded p-2 w-full outline-none' type="password" placeholder='Enter confirm password' />
                            </div>

                        </div>
                        <div className=' flex items-center justify-between '>
                            <div className=' flex items-center flex-wrap gap-4'>
                                <input type="checkbox" name="remember-me" />
                                <label className='ml-2 block text-sm' htmlFor="">
                                    I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                </label>

                            </div>
                        </div>
                        <button className="text-center w-full bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 py-3 text-white mt-1">Sign up</button>
                        {
                            error && alert(error)
                        }
                        <p className='text-sm'>Already Have an account? <Link className="text-lg ml-1" to="/login">Login here</Link></p>
                        <div className=''>
                            <div className='flex justify-start  gap-2 outline outline-blue-600 rounded ' >
                                <FcGoogle className='mt-2.5 ml-3  w-[20px] h-[20px] '></FcGoogle>
                                <a className='bg-blue-500 text-center text-white p-2 w-full' href="#login-with-google">Sign in With Google</a>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;