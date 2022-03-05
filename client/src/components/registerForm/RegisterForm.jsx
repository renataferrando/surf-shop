import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import schema from "./FormSchema"
import Button from "../common/button/Button";
import { yupResolver } from '@hookform/resolvers/yup'
import './_register-form.scss'
import Checkmark from "../common/checkmark/Checkmark";
import { useNavigate } from "react-router-dom";
import SuccesRegistration from "../succesRegistration/SuccesRegistration";
import axios from "axios";



const Form = ({passIcon}) => {
  const [showPass, setShow] = useState(true)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors} } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
      console.log(data)
      setSuccess(!success)

  };
  
  return (  
  <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>Firstname</label>
      <input className= {errors.firstname && "--red"}
       name="firstname"
       {...register("firstname")}
      />
      <p className="error-message">{errors.firstname?.message}</p>
      
      <label>Lastname</label>
      <input className= {errors.lastname && "--red"}
      name="lastname" 
      type="text" 
      {...register("lastname")} 
      /> 
      <p className="error-message">{errors.lastname?.message}</p>

      <label>Date of birth</label>
      <input className= {errors.birth && "--red"}
      name="birth" 
      type="date" 
      {...register("birth")} 
      />
      <p className="error-message">{errors.birth?.message}</p>

      <label>Address</label>
      <input className= {errors.address && "--red"}
      name="address" 
      type="text" 
      {...register("address")} 
      />
      <p className="error-message">{errors.address?.message}</p>
     
      <label>City</label>
      <input className= {errors.city && "--red"}
      name="city" 
      type="text" 
      {...register("city")} 
      />
      <p className="error-message">{errors.city?.message}</p>
  
      <label>Email</label>
      <input className= {errors.email && "--red"}
      name="email" 
      type="email" 
      {...register("email")} 
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
      label="Accept terms and conditions"
        name="terms"
        register={register}
      />      
      <p className="error-message">{errors.terms?.message}</p>
      <br/>
      <Button label="REGISTER" type="submit" text="submit"/>
      
    </form>
    {success && 
      <SuccesRegistration isOpen={success}  onClose={()=>setSuccess(false) & navigate("/")} />
    }
    </>
  );
};

export default Form;