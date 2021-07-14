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
    const [cont, setCont] = useState(false);
    return (
        <div className="h-auto col-span-1 col-start-6 row-span-6 row-start-1 w-80">
            <div>
            {cont?
            <div className="items-center p-6 mt-4 ml-4 overflow-y-scroll rounded-lg shadow-xl h-44 w-72 bg-gradient-to-b from-white/70 to-green-light/70">
            <button onClick={()=>setCont(false)} className="block w-full h-8 mt-3 antialiased font-normal text-white rounded-md rounded-l shadow-lg hover:bg-green-light bg-blue-dark text-md" >Close</button>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            <h1>Tickets order</h1>
            </div>       
            :null}
            </div>
              {show?
              
         <div className="items-center h-64 p-6 mt-4 ml-4 rounded-lg shadow-xl w-72 bg-gradient-to-b from-white/70 to-green-light/70">
         <form onSubmit = {handleSubmit(onSubmit)} className=" w-60" >
           
            <input className="block w-full h-8 pl-3 border-2 rounded-md rounded-l shadow-inner border-green-light focus:ring-blue-dark focus:border-green-light sm:text-sm " name="description"  type="text" placeholder="description" {...register('description', { required: true  })} />

            <input className="block w-full h-8 pl-3 mt-3 border-2 rounded-md rounded-l shadow-inner border-green-light focus:ring-blue-dark focus:border-green-light sm:text-sm " name="RoomNmber" type="nmber" placeholder="Room Number" {...register('RoomNmber', { required: true  })}/>
            
            <input className="block w-full h-8 pl-3 mt-3 border-2 rounded-md rounded-l shadow-inner border-green-light focus:ring-blue-dark focus:border-green-light sm:text-sm " name="LabNmber" type="nmber" placeholder="Lab Number" {...register('LabNmber', { required: true  })}/>

            <button onClick={()=>{setShow(false);setCont(true)}} className="block w-full h-8 mt-3 antialiased font-normal text-white rounded-md rounded-l shadow-lg hover:bg-green-light bg-blue-dark text-md" >Raise</button>

            <button onClick={()=>setShow(false)}  className="block w-full h-8 mt-3 antialiased font-normal text-white rounded-md rounded-l shadow-lg hover:bg-green-light bg-blue-dark text-md" >Cancel</button>
            
        </form>
        </div>

                
             
        :<button onClick={()=>setShow(true)}  className="block h-8 mt-5 ml-4 text-lg antialiased font-normal rounded-md shadow-md w-72 bg-gray-lightest text-blue-dark hover:bg-green-light">+ Ticket</button> }
        {/* {!show? :null } */}
        {/* <button onClick={()=>setShow(false)}>hide</button>*/}
   
        </div>
    )
}