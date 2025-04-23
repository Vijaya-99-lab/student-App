import { useState } from "react";
function LoginFormwithValidation() {

    const [data, setData] = useState(      //useState for data w
        {
            name: '',
            email: '',
            password: '',
        }
    )

    const {name, email, password} = data; //destructuring the data object of useState

    const [errors, setErrors] = useState({}); //useState for error messages

    const Validations = () => {
        const newErrors = {};

        if(!name.trim()) {
            newErrors.name = "Name is required"
        }
        if(!email){
            newErrors.email = "Email is required"
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
          }

        if(!password){
            newErrors.password = "password is required"
        } else if (password.length < 6) {
             newErrors.password = "password must be minimum 6 charecter length"
        }
        return newErrors
    }

    const changeHandler = (e) => {         //changeHandler method
         const {name, value } = e.target
         setData((prev)=> ({
            ...prev,
            [name] : value
         }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const validationErrors = Validations()  //caling validations method for errors to catch
        if (Object.keys(validationErrors).length==0) {
            console.log(data)
        }else {
            setErrors(validationErrors)
        }
    }
    return (

        <form>
            <label>  UserName : </label> <br />
            <input type="text"
                name="name"
                value={name}
                onChange={changeHandler}
            /> <br />
             {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
             <label>  User Email : </label> <br />
            <input type="email"
                name="email"
                value={email}
                onChange={changeHandler}
            /> <br />
            {errors.email && <p style={{color: "red"}}> {errors.email} </p>}
             <label>  User Password : </label> <br />
            <input type="password"
                name="password"
                value={password}
                onChange={changeHandler}
            /> <br />
            {errors.password && <p style = {{color: "red"}}> {errors.password} </p>}
            <button type = "submit" onClick={submitHandler} >  
             Submit </button>
        </form>
    )
} export default LoginFormwithValidation
