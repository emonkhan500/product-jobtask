import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
const {loginUser,googleLogin}=useContext(AuthContext)
const navigate =useNavigate()

const handleLogin=(e)=>{
    e.preventDefault()
const email=e.target.email.value
const password=e.target.password.value
console.log(email,password)

loginUser(email,password)
.then(result=>{
  console.log(result.user)
  navigate('/')
})
.catch(error=>{
  console.log(error.message)
})

}
const handleGoogle=()=>{
  googleLogin()
  .then((result)=>{
    console.log(result.user)
    // toast.success('Login Successful!!')
    navigate('/')
    // navigate
  // navigate(location?.state ? location.state :'/')
    
  })
  .catch(error=>{
    console.error(error)
  })
}

    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-xl py-36 px-28 border-black border-t-2">
    
      <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              
            </div>
            
           
            
            <div className="form-control mt-6">
              <button  className="btn  bg-[#D1A054]">Sign In</button>
            </div>
          </form>
          <p className='text-[#D1A054] text-center mt-'>New here? <Link to='/register'><span className='text-xl'>Create a New Account</span></Link></p>
    
          <div className='flex mt-8 gap-4 justify-center'>
            
           <button onClick={handleGoogle}>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
           </button>
            
          </div>
        </div>
        
        
        
      </div>
    </div>
    );
};

export default Login;