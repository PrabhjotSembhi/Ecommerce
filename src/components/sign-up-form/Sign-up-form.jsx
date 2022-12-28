import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, saveWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
const defaultFormFeilds = {
    Displayname: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
}


const SignUpForm = () => {

    const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
    const { Displayname, Email, Password, ConfirmPassword } = formFeilds;

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('its happening');

        if (Email && Password == ConfirmPassword) {

            try {
                const {user} = await createAuthUserWithEmailAndPassword(Email, Password);
                await createUserDocumentFromAuth(user, Displayname)


                console.log(user);
            } catch (error) {
                console.log(error, 'error hai')
            }

        }

    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormFeilds({ ...formFeilds, [name]: value })
    }



    return (
        <div>
            <h1>Sign up with your email and password</h1>

            <form onSubmit={handleSubmit}>

                <label>Display name</label>
                <input type='text' required name='Displayname' onChange={handleChange} value={Displayname} />

                <label>Email</label>
                <input type='email' required name='Email' onChange={handleChange} value={Email} />

                <label>Password</label>
                <input type='password' required name='Password' onChange={handleChange} value={Password} />

                <label>Confirm Password</label>
                <input type='password' required name='ConfirmPassword' onChange={handleChange} value={ConfirmPassword} />

                <button type='submit' >Sign up</button>

            </form>

        </div>

    )
}

export default SignUpForm