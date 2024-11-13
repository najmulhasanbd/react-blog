import profile from '../../assets/images/testimonials-1.jpg'

const Header = () => {
    return (

        <>
            <div className='flex items-center justify-between border-b-2 p-2 border-cyan-500'>
                <h2 className='text-3xl font-bold'>Welcome</h2>
                <img src={profile} className='w-10 rounded-full' alt="" />
                
            </div>
        </>

    )
}

export default Header