import Image from "next/image"
import Link from "next/link"
import bg from "../public/background.jpg"
import logo from "../public/logodark.png"

const SignUp = () => {
    const styles = {
        background: `white url(${bg.src})`,
        width: '100%',
        height: '100vh',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

    }

    return (
        <div className='h-[100vh] flex justify-center items-center' style={styles}>
            <div className="bg-slate-50 px-10 max-w-[400px] lg:max-w-[600px] rounded-xl max-h-[650px] overflow-scroll relative">
                <div className="text-center sticky top-0 bg-slate-50 py-4">
                    <div className='flex justify-center mb-6'>
                        <Link href="/">
                            <Image src={logo} alt="logo" width={100} />
                        </Link>
                    </div>
                    <p>Please enter your details</p>
                </div>
                <form >
                    <label>Full name</label>
                    <input type="email" className="w-full mt-1 mb-4 text-xl p-2 border-[3px] focus:border-red-300 outline-none" />
                    <label>Email</label>
                    <input type="email" className="w-full mt-1 mb-4 text-xl p-2 border-[3px] focus:border-red-300 outline-none" />
                    <label>Password</label>
                    <input type="password" className="w-full mt-1 mb-4 text-xl p-2 border-[3px] focus:border-red-300 outline-none" />
                    <label>Confirm password</label>
                    <input type="password" className="w-full mt-1 mb-10 text-xl p-2 border-[3px] focus:border-red-300 outline-none" />
                    <button className="bg-purple-400 w-full text-xl py-2 rounded-md font-semibold text-white">Sign up</button>
                </form>
                <div>
                    <div className="text-center my-3">
                        <p>Already have an account? <Link href="/login" className="text-blue-500 hover:underline">login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp