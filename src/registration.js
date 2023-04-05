import React,{Component,useState} from 'react';
// import ''
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ErrorSharp } from '@mui/icons-material';
import { style } from '@mui/system';
import './registration.css';
function Validform() { ;
    let myStyle={
        borderColor:'',
        
    }
    const initValues={usename:'',email:'',password:''};
    const [formValues,setformValues] = useState(initValues);
    const [formErrors,setformErrors] = useState({});
    const [isSubmit,setisSubmit] = useState(false);
    const handleChange =(event)=>{
        const {id,value}=event.target;
        setformValues({...formValues,[id]:value})
    }
    const handleSubmit =(event)=>{
       event.preventDefault();
       setformErrors(validate(formValues));
       setisSubmit(true);
    }
    const validate =(values)=>{
        const errors={};
        const reg4= new RegExp("[!@#$&]");
        const reg1= new RegExp("[A-Za-z]");
        const reg3= new RegExp("[A-Z]");
        const reg2= new RegExp("[0-9]");
        if(!values.username){
            myStyle={
                borderColor:'red',
            };
             errors.username="Please fill the column";
        }
          
               
        else if(!values.email){
             errors.email="Invalid Email";
             myStyle={
                borderColor:'red',
            };
        }
        else if(!values.password){
            myStyle={
                borderColor:'red',
            };
             errors.email="Please fill the password";
        }
        else if((reg1.test(values.password))&(reg2.test(values.password) &(reg3.test(values.password)) &(reg4.test(values.password)))){
        myStyle={
            borderColor:'green',
        };
             errors.password=<p style={{color:'green'}}>Password is VeryStrong </p>;}
        else if((reg1.test(values.password))&(!reg2.test(values.password) &(!reg3.test(values.password)) &(!reg4.test(values.password)))){

            myStyle={
                borderColor:'red',
            };
              errors.password=<p style={{color:'red'}}>Password is weak </p>;}
         else if((reg1.test(values.password))&&(reg2.test(values.password) &(!reg3.test(values.password)) &(!reg4.test(values.password)))){
            myStyle={
                borderColor:'orange',
            };
              errors.password=<p style={{color:'orange'}}>password is Good</p>;
         }
         else if((reg1.test(values.password))&&(reg2.test(values.password) &&(reg3.test(values.password)) &(!reg4.test(values.password)))){
            myStyle={
                borderColor:'lightgreen',
            };
              errors.password=<p style={{color:'lightgreen'}}>password is Strong</p>;
         }
               return errors;
    }
        return (
            <div style={{paddingLeft:500,paddingTop:70}}>
            <div className='container' 
            style={{backgroundColor:'lightyellow',borderRadius:15,padding:40}}>
                {/* <pre>{JSON.stringify(formValues,undefined,3)}</pre> */}
                <form onSubmit={handleSubmit}>
                <h1 style={{textAlign:'center'}}> Dynamic Form</h1>
                <div className='row'style={{padding:10}}>
                    <label>Enter Your Username</label>
                    <input type="text" id="username" placeholder='Type Username Here' value={formValues.username} onChange={handleChange} onMouseLeave={handleSubmit}/>
                </div>
                <p style={{color:'red'}}>{formErrors.username}</p>
                <div className='row' style={{padding:10}}>
                    <label>Enter Your Email</label>
                    <input type="email" id="email" placeholder='Type Emailid Here' value={formValues.email} onChange={handleChange}  onMouseLeave={handleSubmit} />
                </div>
                <p  style={{color:'red'}}>{formErrors.email}</p>
                <div className='row' style={{padding:10}}>
                    <label>Enter Your Password</label>
                    <input type="password" id="password" placeholder='Type Password Here' value={formValues.password} onChange={handleChange}  onMouseLeave={handleSubmit} style={myStyle}/>
                </div>
                <p  style={{color:'red'}}>{formErrors.password}</p>
                {/* <div className='row' style={{padding:10}}>
                    <button className='btn btn-secondary'>Sign In</button>
                </div> */}
            </form>
            </div>
            </div>
        );
    }
export default Validform;