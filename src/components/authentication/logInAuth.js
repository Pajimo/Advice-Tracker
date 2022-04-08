import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import { app, database } from "../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const LogIn = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const sendMessage = async(e) => {
        e.preventDefault()
        if(!email || !password){
            toast.error('First name, Email Address or Message empty')
        }else{
            // try{
            //     const id = toast("Please wait...", { autoClose: false })
            //     await addDoc(collection(database, "userAuth"), {
            //         firstName,
            //         lastName,
            //         email,
            //         supportMessage
            //     });
            //     toast.update(id, {render: "Please Wait", type: "success", autoClose: 5000 });
            //     toast('Message Sent');
            // }catch(err){
            //     toast.error('Message error')
            // }
        }
    }


    return(
        <>
            <ToastContainer />
            <form className="md:flex md:justify-center" onSubmit={sendMessage}>
                <div className="shadow-xl border-t-2 mt-10 pt-10 pb-10 md:px-7 px-2">
                    <div className='mb-5'>
                        <label htmlFor='email' className='text-left'>Email address</label><br></br>
                        <input type="email" required className='h-10 md:w-96 w-full px-2 mb-3 border-2 border-gray-300 rounded-lg' value={email} id='email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label  htmlFor='password' className='text-left'>Password</label><br></br>
                        <input type='password' required className='h-10 md:w-96 w-full px-2 mb-3 border-2 border-gray-300 rounded-lg' value={password} id='password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='text-right'>
                        <button className='bg-black p-3 text-white'>Log in</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LogIn