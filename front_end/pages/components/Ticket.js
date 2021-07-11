import React, { useState } from "react";
import {useForm} from 'react-hook-form'
export default function TeckitForm(props) {

    const {register, handleSubmit}= useForm();
    const [userInfo, setUserInfo] = useState('');
    const [errors, setErrors]= useState({});

    const onSubmit = (data) =>{
        setUserInfo(data)
        console.log(data)
    }
    const [show, setShow] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-blue-100">
            {show?
        <form onSubmit = {handleSubmit(onSubmit)} >
            <label className="block my-3 border border-blue-200" >Describtion: </label>
            <input className="block my-3 border border-blue-200" name="description" className="m-8" type="text" placeholder="description" {...register('description', { required: true  })} />
            {<p> {errors.email} </p>}
            <br />
            <label className="block my-3 border border-blue-200" >Room nmber:</label>
            <input className="block my-3 border border-blue-200" name="RoomNmber" type="nmber" placeholder="Room Nmber" {...register('RoomNmber', { required: true  })}/>
            {<p> {errors.Password} </p>}
            <label className="block my-3 border border-blue-200" >Lab number</label>
            <input className="block my-3 border border-blue-200" name="LabNmber" type="nmber" placeholder="Lab Nmber" {...register('LabNmber', { required: true  })}/>
            <br />
            <button className="w-full bg-blue-200" >Raise</button>
            <br />
            <button onClick={()=>setShow(false)   } >Cancel</button>
            
        </form>
        :<button onClick={()=>setShow(true)}>+ Teckit</button> }
        {/* {!show? :null } */}
        {/* <button onClick={()=>setShow(false)   } >hide </button> */}
        </div>
    )
}