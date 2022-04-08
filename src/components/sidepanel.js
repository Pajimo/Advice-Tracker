const SidePanel = () => {
    return(
        <>
            <div className="w-4/6 fixed md:w-60 bg-gray-500 h-screen side_panel pt-40">
                <div className="text-white text-xl flex md:flex-col flex-row">
                    <div className='bg-white text-black text-center cursor-pointer p-5 text-2xl rounded-lg'>Post Advice<br></br><br></br>
                    Click the button at the top of the page to write your advice on this page</div>
                </div>
            </div>
        </>
    )
}

export default SidePanel