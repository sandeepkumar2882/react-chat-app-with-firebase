import React, { useState } from 'react';
import Avatar from '../img/avatar.jpg';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //get values of form fields
        const displayName = e.target.name.value;
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        const userAvatar = e.target.avatar.files[0];

        try {
            //Create User
            const response = await createUserWithEmailAndPassword(auth, userEmail, userPassword);

            const storageRef = ref(storage, displayName);

            //upload image
            //const uploadTask = await uploadBytesResumable(storageRef, userAvatar);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure 
            // 3. Completion observer, called on successful completion
            await uploadBytesResumable(storageRef, userAvatar).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(response.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            userEmail,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", response.user.uid), {});
                        navigate('/');
                    } catch (error) {
                        console.log(error);
                    }
                });
            });
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Developers Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder="Display Name" />
                    <input type="email" name='email' placeholder="Your Email" />
                    <input type="password" name='password' placeholder="Password" />
                    <input type="file" id="file" name='avatar' className='inputFile' />
                    <label htmlFor="file" className='addAvatar'>
                        <img src={Avatar} alt="Add Avatar" className='avatarImage' />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {error && <span style={{ color: "red" }}>Error Message : {error}</span>}
                </form>
                <p>
                    If you already registered? <Link to="/login">Login</Link> 
                </p>
            </div>
        </div>
    )
}
