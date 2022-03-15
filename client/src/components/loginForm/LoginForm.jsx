import React, { useState, useEffect } from 'react';
import './_login-form.scss'
import { useForm } from "react-hook-form";
import loginSchema from "../loginForm/loginFormSchema";
import { yupResolver } from '@hookform/resolvers/yup'
import Checkmark from "../common/checkmark/Checkmark";
import Loading from '../common/loading/Loading';
import ErrorLogin from '../errorLogin/ErrorLogin';
import Button from '../common/button/Button';
import axios from 'axios';



const LoginForm = ({ closeModal, onClickError, ...r }) => {
  const [showPass, setShow] = useState(true) 
  const [email, setEmail] = useState("") 

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
   
  });
 
  const [ error, setError ] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data, e) => {
    const email = data.email; 
    const password = data.password;
  
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      };
      setLoading(true)
     const { data } = await axios.post('/api/users/login', {
        email, 
        password
      }, 
      config
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data))
      setLoading(false);
      closeModal()

    } catch (error) {
      setError(true)
      setLoading(false) 
    }
  }

    return (
      <>
      <div className='login-form'>
          <h4>LOG IN FOR BETTER EXPERIENCE</h4>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input className= {errors.email && "--red"}
                name="email" 
                type="email"
                value={email} 
                {...register("email")}
                onChange={(e)=> setEmail(e.target.value)}
                
                />
                <p className="error-message">{errors.email?.message}</p>

                <span className='input-icon'>
                        <i className={`${showPass ? "eye-off" : "eye"}`} onClick={() => setShow(!showPass)}></i>
                        <label>Password</label>
                        <input className= {errors.password && "--red"}
                        name="password" 
                        type={`${showPass ? "password" : "text"}`} 
                        {...register("password")}
                        />
                </span>
                <p className="error-message">{errors.password?.message}</p>

                <Checkmark
                    name="terms"
                    label="Keep me signed in"
                    register={register}
                />      
                <p>By logging in, you agree to ours Privacy Policy and Terms of Use.</p>
                <Button label="LOGIN" type="submit"/>
            </form>
        
      </div>
      {loading && <Loading/>}
      {error && 
      <ErrorLogin 
        title="Invalid email or password" 
        text="Not register?" 
        link="Click here" 
        onClickError={onClickError}
        onClickTry={() => setError(false)}
        /> }
      </>
    );

};

export default LoginForm;