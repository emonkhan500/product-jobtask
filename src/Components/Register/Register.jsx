import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const {createUser}=useContext(AuthContext)
  const navigate =useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault()
    const name=e.target.name.value
    const email=e.target.email.value
    const password=e.target.pass.value
    console.log(name,email,password)

    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      navigate('/')
    })
    .catch(error=>{
      console.log(error)
    })
    
    }

    return (
      <div className="hero pt-20 min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-xl py-36 px-28 border-black border-t-2">
        <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            
            <div className="form-control mt-6">
              <button type="submit" className="btn  bg-[#D1A054]">Sign Up</button>
            </div>
          </form>
          <p className="text-[#D1A054] text-center mt-">
            Already registered?{" "}
            <Link to="/login">
              <span className="text-xl"> Go to log in</span>
            </Link>
          </p>

          <div className="flex mt-3 gap-4 justify-center">
            
            <button ><img  src='' alt="" /></button>
            
          </div>
        </div>
        <div className="text-center lg:text-left">
          <img  src='' alt="" />
        </div>
      </div>
    </div>
    );
};

export default Register;