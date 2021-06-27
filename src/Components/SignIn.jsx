import { NavLink } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/Lock';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import Footer from "./Footer";
import signinPic from "../Images/login7.png";
import { useState } from "react";
import validator from "validator";
import("../css/SignIn.css");






const SignIn = () => {

    const [inputFieldsData, setInputFieldsData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });

    const [inputFieldsError, setInputFieldsError] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        phoneNumberError: "",
        passwordError: "",
        confirmPasswordError: ""
    });


    const inputTextChange = (event) => {
        const inputFieldName = event.target.name;
        const inputFieldValue = event.target.value;
        setInputFieldsData({...inputFieldsData, [inputFieldName]: inputFieldValue});
        setInputFieldsError({
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            phoneNumberError: "",
            passwordError: "",
            confirmPasswordError: ""
        });
    }

    const {firstName, lastName, email, phoneNumber, password, confirmPassword } = inputFieldsData;
    const {firstNameError, lastNameError, emailError, phoneNumberError, passwordError, confirmPasswordError } = inputFieldsError;

    const formValidation = () => {
        //check if users fills all the input fields currectly or not
        if(firstName.trim().length<3){
            setInputFieldsError({...inputFieldsError, firstNameError: "Name length must be at least 3 characters"});
            return false
        }
        if(!validator.isAlpha(firstName)){
            setInputFieldsError({...inputFieldsError, firstNameError: "Name must contains only alphabates not spaces, numbers or special characters"});
            return false;
        }

        if(lastName.trim().length<1){
            setInputFieldsError({...inputFieldsError, lastNameError: "Please enter your last name."});
            return false;
           }
           if(! validator.isAlpha(lastName.trim())){
            setInputFieldsError({...inputFieldsError, lastNameError: "Name must contains only alphabates not spaces, numbers, special characters."});
            return false;
           }
        if(!validator.isEmail(email.trim())){
            setInputFieldsError({...inputFieldsError, emailError: "This email address is not valid"});
            return false;
        }

        if(!validator.isAlphanumeric(phoneNumber.trim()) || phoneNumber.trim().length != 10){
            setInputFieldsError({...inputFieldsError, phoneNumberError: " This Phone Number is not valid"});
            return false;
        }

        if(password.trim().length <6){
            setInputFieldsError({...inputFieldsError, passwordError: "Password length must be at least 6 characters"});
            return false;
        }

        if(password != confirmPassword){
            setInputFieldsError({...inputFieldsError, confirmPasswordError: " Confirm Password not matched"});
            return false;
        }

        return true;
    
    }

    const signinFormSubmit = (event) => {
        event.preventDefault();
        const isAllOk = formValidation();
        if(isAllOk){
            //send user data to server for signin

        }
    }

  

    return(
          
        <>
         <section className=" root_div">
                <div className="row_div container shadow">
                  <div className="signin_div">
                    <h2 className="sign_heading">User Registration</h2>
                    </div>
                    <div className="row  my-0 g-0">
                        <div className="col-lg-6 col-md-6 col-sm-10 col-sm-10 d-block m-auto ">
                            <img src={signinPic} className="img-fluid " alt="Signin img" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-11 col-sm-11 d-block m-auto">
                            <form method="POST" className="form_style" onSubmit={signinFormSubmit}>
                            
                                <div className=" p-4">
                                    <p className="text-center text-danger fw-bold"></p>
                                    <div className="row g-3 my-2">
                                        <div className="col-md-6 col-sm-12 col-12">
                                            <label htmlFor="exampleInputFirstName" className="form-label text-dark fw-bold"><PersonOutlineIcon className="metrial_icon" />First Name*</label>
                                            <input type="text" id="exampleInputFirstName" className="form-control" placeholder="First name" aria-label="First name" onChange={inputTextChange} name="firstName"  value={firstName} required/>
                                            <span className="input_error_span">{firstNameError}</span>
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-12">
                                            <label htmlFor="exampleInputLastName" className="form-label text-dark fw-bold"><PersonOutlineIcon className="metrial_icon" />Last name*</label>
                                            <input type="text" id="exampleInputLastName" className="form-control" placeholder="Last name" aria-label="Last name" onChange={inputTextChange} name="lastName"  value={lastName} required/>
                                            <span className="input_error_span">{lastNameError}</span>
                                        </div>
                                    </div>
                                    <div className="row g-3 my-2">
                                        <div className="col-md-6 col-sm-12 col-12">
                                            <label htmlFor="exampleInputEmail1" className="form-label text-dark fw-bold"><EmailIcon className="metrial_icon" style={{fontSize: "20px"}}  />Email address*</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email address" aria-label="First name" onChange={inputTextChange} name="email"   value={email} required />
                                            <span className="input_error_span">{emailError}</span>
                                            </div>
                                        <div className="col-md-6 col-sm-12 col-12">
                                            <label htmlFor="exampleInputPhone" className="form-label text-dark fw-bold"><PhoneIcon className="metrial_icon" style={{fontSize: "20px"}}  />Phone number*</label>
                                            <input type="number" id="exampleInputPhone" className="form-control" placeholder="Enter phone number" aria-label="Last name" name="phoneNumber" onChange={inputTextChange}   value={phoneNumber} required />
                                            <span className="input_error_span">{phoneNumberError}</span>
                                        </div>
                                    </div>
                                    <div className="row g-3 my-3">
                                        <div className="col-md-6 col-sm-12 col-12">
                                            <label htmlFor="exampleInputPassword" className="form-label text-dark fw-bold"><PasswordIcon style={{fontSize: "18px"}}  className="metrial_icon mb-1" />Password*</label>
                                            <input type="password" id="exampleInputPassword" placeholder="Enter password" className="form-control" placeholder="Enter Password" aria-label="First name" onChange={inputTextChange} name="password"  value={password} required />
                                            <span className="input_error_span">{passwordError}</span>
                                           </div>
                                        <div className="col-md-6 col-sm-12 col-12">
                                            <label htmlFor="exampleInputConfirmPassword" className="form-label text-dark fw-bold"><PasswordIcon style={{fontSize: "18px"}}  className="metrial_icon mb-1" />Confirm Password*</label>
                                            <input type="password" id="exampleInputConfirmPassword" placeholder="Confirm password" className="form-control" placeholder="Enter confirm Password" onChange={inputTextChange} aria-label="Last name" name="confirmPassword"   value={confirmPassword} required />
                                            <span className="input_error_span">{confirmPasswordError}</span>
                                        </div>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-md-6 col-sm-12 col-12">
                                            <Button variant="contained" className="mt-3" color="secondary" className="singin_btn"  startIcon={<PersonAddIcon />}  type="submit">
                                             SignIn
                                           </Button>
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-12 mt-4">
                                            <NavLink to="/login"  className="nav_link">I already have an account</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                  {/* page Footer */}

                 <Footer/>
            </section>


        </>
    );
}

export default SignIn;