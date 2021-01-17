import React, { Component } from 'react';
import classes from './Form.css';

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        experience: "",
        skills: "",
        gender: "",
        isValidEmail: true,
        // isValidCountryCode: true,
        isValidPhone: true,
        isValidForm: true
    }
    
    firstNameChangeHandler = (event) => {
        this.setState({firstName: event.target.value, isValidForm: true});
    }

    lastNameChangeHandler = (event) => {
        this.setState({lastName: event.target.value, isValidForm: true});
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value, isValidForm: true}, () => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const isValidEmail = re.test(String(this.state.email).toLowerCase());
            
            this.setState({isValidEmail: isValidEmail, isValidForm: true});
        });
    }

    // countryCodeChangeHandler = (event) => {
    //     this.setState({countryCode: event.target.value}, () => {
            
    //     });
    // }

    phoneChangeHandler = (event) => {
        this.setState({phone: event.target.value, isValidForm: true}, () => {
            let phone = this.state.phone;
            phone = phone.replace(/[^\d]/g, '');

            let isValidPhone = false;
            if (phone.length==10)
                isValidPhone = true;
            
            this.setState({isValidPhone: isValidPhone, isValidForm: true});
        });
    }
    
    dobChangeHandler = (event) => {
        this.setState({dob: event.target.value, isValidForm: true});
    }

    addressChangeHandler = (event) => {
        this.setState({address: event.target.value, isValidForm: true});
    }

    cityChangeHandler = (event) => {
        this.setState({city: event.target.value, isValidForm: true});
    }

    stateChangeHandler = (event) => {
        this.setState({state: event.target.value, isValidForm: true});
    }
    
    experienceChangeHandler = (event) => {
        this.setState({experience: event.target.value, isValidForm: true});
    }

    skillsChangeHandler = (event) => {
        this.setState({skills: event.target.value, isValidForm: true});
    }
    
    genderChangeHandler = (event) => {
        this.setState({gender: event.target.value, isValidForm: true});
    }

    submitClickedHandler = (event) => {
        event.preventDefault();

        if (this.state.firstName == "" ||
            this.state.lastName == "" || 
            this.state.email == "" ||
            this.state.phone == "" ||
            this.state.dob == "" ||
            this.state.address == "" ||
            this.state.city == "" || 
            this.state.state == "" || 
            this.state.experience == "" ||
            this.state.skills == "" || 
            this.state.gender == "" || 
            !this.state.isValidPhone || 
            !this.state.isValidEmail
        )
            this.setState({isValidForm: false});  
        else
        {
            this.props.history.push({
                pathname: "/table",
                state: {...this.state}
            })
        }
    }

    render(){
        return(
            <div className={classes.Container}>
                <p className={classes.Heading}>Enter Your Details</p>
                <form className={classes.Form}>
                    <div className={classes.Field}>
                        <label>First Name</label>
                        <input type="text" className={classes.Input} onChange={this.firstNameChangeHandler} value={this.state.firstName} />
                    </div>
                    <div className={classes.Field}>
                        <label>Last Name</label>
                        <input type="text" className={classes.Input} onChange={this.lastNameChangeHandler} value={this.state.lastName} />
                    </div>
                    <div className={classes.Field}>
                        <label>Email</label>
                        <div>
                            <input type="email" className={classes.Input} onChange={this.emailChangeHandler} value={this.state.email} />
                            {((this.state.email!="") && (!this.state.isValidEmail))? <p className={classes.Invalid}>Invalid Email!</p> : null}
                        </div>
                    </div>
                    <div className={classes.Field}>
                        <label>Phone</label>
                        <div style={{display: "flex", alignItems: "baseline"}}>
                            {/* <input type="text" className={classes.Input} onChange={this.countryCodeChangeHandler} value={this.state.countryCode} /> */}
                            <div>+91</div>
                            <div>
                                <input type="text" className={classes.Input} onChange={this.phoneChangeHandler} value={this.state.phone} />
                                {((this.state.phone!="") && (!this.state.isValidPhone))? <p className={classes.Invalid}>Invalid Phone!</p> : null}
                            </div>
                        </div>
                    </div>
                    <div className={classes.Field}>
                        <label>Date of Birth</label>
                        <input type="date" className={classes.Input} onChange={this.dobChangeHandler} value={this.state.dob} />
                    </div>
                    <div className={classes.Field}>
                        <label>Address</label>
                        <input type="text" className={classes.Input} onChange={this.addressChangeHandler} value={this.state.address} />
                    </div>
                    <div className={classes.Field}>
                        <label>City</label>
                        <input type="text" className={classes.Input} onChange={this.cityChangeHandler} value={this.state.city} />
                    </div>
                    <div className={classes.Field}>
                        <label>State</label>
                        <input type="text" className={classes.Input} onChange={this.stateChangeHandler} value={this.state.state} />
                    </div>
                    <div className={classes.Field}>
                        <label>Total Experience</label>
                        <input type="text" className={classes.Input} onChange={this.experienceChangeHandler} value={this.state.experience} />
                    </div>
                    <div className={classes.Field}>
                        <label>Skills</label>
                        <textarea rows="4" cols="50" className={classes.Textarea} onChange={this.skillsChangeHandler} value={this.state.skills} />
                    </div>
                    <div className={classes.Field}>
                        <label>Gender</label>
                        <select name="gender" className={classes.Input} onChange={this.genderChangeHandler}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Undisclosed">Choose not to disclose</option>
                        </select>
                    </div>
                </form>
                <button className={classes.Button} onClick={this.submitClickedHandler}>Submit</button>
                {(!this.state.isValidForm)? <p className={classes.Invalid} style={{textAlign: "center"}}>Please fill the form carefully!</p> : null}
            </div>
        )
    }
};

export default Form;