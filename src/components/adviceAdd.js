import autosize from "autosize"
import { useEffect, useRef, useState, useId } from "react";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { database, app } from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify"
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';


const AdviceAdd = ({setShowAdviceAdd}) => {

    const textareaRef = useRef(null)
    const id = useId()
    const [textAreaValue, setTextAreaValue] = useState('')
    const [adviceCategory, setAdviceCategory] = useState('')
    const [displayName, setDisplayName] = useState('')

    const num_of_likes = 0;

    useEffect(() => {
        autosize(textareaRef.current);
    }, [])

    const closeAdviceAdd = () => {
        setShowAdviceAdd(false)
    }

    const submitAdvice = async() => {
        const id = uuidv4()
        if(!textAreaValue){
            toast.error('Write an advice to post')
        }else if(!adviceCategory){
            toast.error('Choose an advice category')
        }
        else{
            try{
                const idToast = toast("Please wait...", { autoClose: false })
                await setDoc(doc(database, `All advices`, id), {
                    id,
                    displayName,
                    textAreaValue,
                    adviceCategory,
                    num_of_likes
                });
                toast.update(idToast, {render: "Please Wait", type: "success", autoClose: 5000 });
                toast('Message Sent');
            }catch(err){
                    toast.error('Message error')
            }
            setTimeout(() => {
                closeAdviceAdd()
            }, 2000)
        }
    }

    return(
        <> 
            <ToastContainer/>
            <div>
                <div className="modal" id="modal1">
                    <div className="modal-dialog md:w-2/5 w-full h-3/5 md:h-4/6 rounded-2xl border-2 bg-white">
                        <header className="modal-header flex flex-row justify-between text-lg md:text-xl font-semibold items-center bg-black">
                            <button onClick={submitAdvice} className="start-button p-3 bg-gray-600 text-white rounded-3xl" aria-label="close modal">
                                Share Advice
                            </button>
                            <div>
                                <select onChange={(e) => setAdviceCategory(e.target.value)}>
                                    <option>advice category</option>
                                    <option>Programming</option>
                                    <option>StartUp</option>
                                    <option>Business</option>
                                    <option>Teaching</option>
                                    <option>Job Search</option>
                                    <option>Life</option>
                                    <option>Health</option>
                                    <option>Workout</option>
                                    <option>Work Life</option>
                                    <option>Child Care</option>
                                    <option>Child Birth</option>
                                    <option>School Life</option>
                                </select>
                            </div>
                            <div onClick={closeAdviceAdd} className='cursor-pointer text-2xl font-bold border-2 px-2 border-black ml-2 rounded-full bg-gray-600 text-white'>X</div>
                        </header>
                        <div>
                            <label className="text-lg font-semibold mr-2">Display Name: </label>
                            <input type='text' value={displayName} placeholder='Enter Display Name'
                                 onChange={(e) => setDisplayName(e.target.value)}
                                 className='border-2 border-gray-600 p-2'
                            />
                        </div>
                        <section className="modal-content h-72">
                            <div className="">
                                <textarea placeholder="What advice do you have?" value={textAreaValue} className="w-full border-t-2 border-gray-400 pt-2" ref={textareaRef} 
                                    onChange={(e) => setTextAreaValue(e.target.value)}>
                                </textarea>
                            </div>  
                        
                        </section>
                        <footer className="modal-footer">
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdviceAdd