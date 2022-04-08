import { useState, useRef, useEffect, useId } from "react"
import AdviceAdd from "./adviceAdd"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { database, app } from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { query, where, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { FaRegUser } from "react-icons/fa";


const AdvicePage = () => {

    const modalAdd = useRef(null)

    const [showAdviceAdd, setShowAdviceAdd] = useState(false)
    const [pageAdvice, setPageAdvice] = useState([])
    const [num, setMun ] = useState(0)

    const postAdvice = () => {
        setShowAdviceAdd(true)
    }

    const functionUse = async() => {
        const querySnapshot = await getDocs(collection(database, 'All advices'));
        // querySnapshot.forEach((doc) => {
        //   //console.log(`${doc.id} => ${doc.data()}`);
        //   console.log(doc.data())
        setPageAdvice(querySnapshot.docs.map((doc) =>{
                return { ...doc.data()}
        }))
    }

    useEffect(() => {
        functionUse()
    }, [])

    const likeButton = async(id, number) => {
        pageAdvice.filter( async(ad) => {
            if(ad.id === id){
                setMun(num + 1)
                toast('Liked')
                return(
                await updateDoc(doc(database, `All advices`, id), {
                    "num_of_likes": number + 1,
                }))
            }
        })
    }

    useEffect(() => {
        functionUse()

    }, [num, showAdviceAdd])

    const copyAdvice = async(id) => {
        pageAdvice.filter(async(advice) => {
            if(advice.id === id ){
                toast('Advice copied')
                return(
                    await navigator.clipboard.writeText(advice.textAreaValue)
                )
            }
        })
    }

    return(
        <>
        <ToastContainer />
            <div className="p-5 md:w-3/5 w-full bg-slate-200" id='mainAdvicepage' ref={modalAdd}>
                <div className="flex justify-center">
                    <button className="w-96 py-3 border-2 mb-10 bg-white font-semibold text-lg" onClick={postAdvice}>Post Advice</button>
                </div>
                <div className="flex justify-center bg-white py-5 rounded-t-xl">
                    <div className="w-10/12">
                        {pageAdvice ? pageAdvice.map((advice) => {
                            const {id, textAreaValue, adviceCategory, displayName, num_of_likes} = advice

                            //num = num_of_likes

                            return(
                                <div key={id} className='border-b-2'>
                                    <div className="my-5 flex flex-row justify-between">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-full border-2 bg-gray-300 mr-2 flex justify-center items-center">
                                                <FaRegUser className=""/>
                                            </div>
                                            <div>
                                                {displayName ? displayName : "Anonymous"}
                                            </div>
                                        </div>
                                        <div className="underline">
                                            Advice: {adviceCategory}
                                        </div>
                                    </div>
                                    <div>
                                        <span>{textAreaValue}</span>
                                        <img src="" alt="" />
                                    </div>
                                    <div className="mt-5">
                                        {num_of_likes}  {num_of_likes > 1 ? 'Likes' : 'Like'}
                                    </div>
                                    <div className="flex flex-row text-white my-5">
                                        <p className="px-10 py-2 bg-gray-500 mr-4 cursor-pointer" onClick={() => likeButton(id, num_of_likes)}>Like</p>
                                        <p className="px-10 py-2 bg-gray-500 cursor-pointer" onClick={() => copyAdvice(id)}>Copy Advice</p>
                                    </div>
                                </div>
                            )
                        }) : ''}
                        
                    </div>
                </div>
            </div>

            {showAdviceAdd ? <AdviceAdd setShowAdviceAdd={setShowAdviceAdd}/> : ''}
            
        </>
    )
}

export default AdvicePage