const SidePanel = () => {
    return(
        <>
            <div className="w-full fixed md:w-60 bg-gray-500 h-screen side_panel">
                <div className="text-white text-xl flex md:flex-col flex-row">
                    <div className='bg-white text-black text-center cursor-pointer p-5 text-2xl rounded-lg grid place-self-center'>Post Advice<br></br>
                    Click the button up to write your advice on this page</div>
                </div>
            </div>
        </>
    )
}

export default SidePanel