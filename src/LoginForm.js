import { useState } from "react"

function LoginForm() {

    const [data, setData] = useState(
        {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    )

    const { userName, email, password, confirmPassword } = data

    const changeHandler = (e) => {                  //this code is important to remember
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const submitHandler = (e) => {
            
        e.preventDefault()
        if (password == confirmPassword) {
            console.log(data)
        } else {
            console.log("passwords are not matching") //onsubmit,if passwords are not matching we are throwing error
        }

    }

    return (
        <form>
            <h1> Signup Form </h1>
            <input type="text" name="userName" placeholder="Enter userName" value={userName} onChange={changeHandler} /> <br />
            <input type="text" name="email" placeholder="Enter email" value={email} onChange={changeHandler} /> <br />
            <input type="text" name="password" placeholder="Enter password" value={password} onChange={changeHandler} /> <br />
            <input type="text" name="confirmPassword" placeholder="Enter confirmPassword" value={confirmPassword} onChange={changeHandler} /> <br />
            <button onClick={submitHandler} type="submit" name="submit" > Submit </button>
             {password != confirmPassword ? <p style={{"color":"red"}}> passwords not matching </p> : null}
        </form>
    )

} export default LoginForm
