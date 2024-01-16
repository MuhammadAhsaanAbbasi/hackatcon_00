

const Layout = ({children}:{children:React.ReactNode})=>{
    return(
        <div className="min-h-screen w-full flex justify-center items-center bg-[#F6F8FD]">
            {children}
        </div>
    )
}

export default Layout