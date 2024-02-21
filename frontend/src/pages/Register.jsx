import { Link } from "react-router-dom";
import registerImg from "../assets/register.png";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({})
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
    } catch (error) {
        
    }
  }
  return (
    <div className="min-h-screen md:mt-20 sm:mt-10">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1">
          <div className="">
            <img
              src={registerImg}
              alt="register"
              width={400}
              className="register__img"
            />
          </div>
          <p className="text-sm mt-5">
            Welcome to spaces. Sign up with a new account or with your google
            account
          </p>
        </div>

        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="text"
                placeholder="name@example.com"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter your password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientMonochrome="failure" type="submit">
              Sign up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
