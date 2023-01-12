import Image from "next/image"
import Link from "next/link"
import bg from "../public/background.jpg"
import logo from "../public/logodark.png"

const Login = () => {
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
            <div className="bg-slate-50 py-6 px-10 max-w-[400px] lg:max-w-[600px] rounded-xl">
                <div className="text-center mb-10">
                    <div className='flex justify-center'>
                        <Link href="/">
                            <Image src={logo} alt="logo" width={100} />
                        </Link>
                    </div>
                    <h2 className="mt-4 text-3xl">Welcome Back </h2>
                    <p>Please enter your details</p>
                </div>
                <form >
                    <label>Email</label>
                    <input type="email" className="w-full mt-1 mb-7 text-xl p-2 border-[3px] focus:border-red-300 outline-none" />
                    <label>Password</label>
                    <input type="password" className="w-full mt-1 mb-10 text-xl p-2 border-[3px] focus:border-red-300 outline-none" />
                    <button className="bg-purple-400 w-full text-xl py-2 rounded-md">Login</button>
                </form>
                <div>
                    <div className="text-center mt-3">
                        <p>Don't have an account? <Link href="/signUp" className="text-blue-500 hover:underline">sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login