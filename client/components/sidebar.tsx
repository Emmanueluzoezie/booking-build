import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { MdApartment, MdDevicesOther, MdEmojiTransportation, MdFavorite, MdHelp, MdHome, MdHouse, MdOutlineAddShoppingCart, MdOutlineAirplanemodeActive, MdPerson, MdRealEstateAgent, MdSettings } from "react-icons/md"
import { FaCarSide } from "react-icons/fa"
import { GiGreenhouse, GiFamilyHouse } from "react-icons/gi"
import logo from "../public/logodark.png"

const Sidebar = () => {
    const router = useRouter()

    return (
        <div className='w-[300px] h-[100vh] bg-slate-50 shadow-2xl'>
            <div className="flex justify-center p-3">
                <Image src={logo} alt="logo" className='w-[50px]' />
            </div>
            <div className='mt-7'>
                <Link className={`${router.pathname === "/" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/favorite">
                    <MdHome className='text-xl' />
                    <h5>Home</h5>
                </Link>
                <Link className={`${router.pathname === "/appartment" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/appartment">
                    <MdApartment className='text-xl' />
                    <h5>Apartment</h5>
                </Link>
                <Link className={`${router.pathname === "/transportation" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/transportation">
                    <MdEmojiTransportation className='text-xl' />
                    <h5>Transportation</h5>
                </Link>
                {/* <Link className="{`${router.pathname === "/"? "text-blue-600 bg-gray-300":""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`}" href="/favorite">
          <MdFavorite className='text-xl' />
          <h5>Favorites</h5>
        </Link> */}
                <Link className={`${router.pathname === "/house" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/house">
                    <GiGreenhouse className='text-lg' />
                    <h5>House</h5>
                </Link>
                <Link className={`${router.pathname === "/hotels" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/hotels">
                    <GiFamilyHouse className='text-lg' />
                    <h5>Hotels</h5>
                </Link>
                <Link className={`${router.pathname === "/orders" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/orders">
                    <MdOutlineAddShoppingCart className='text-xl' />
                    <h5>Orders</h5>
                </Link>
                <Link className={`${router.pathname === "/cars" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/cars">
                    <FaCarSide className='text-xl' />
                    <h5>Cars</h5>
                </Link>
                <Link className={`${router.pathname === "/flight" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/flight">
                    <MdOutlineAirplanemodeActive className='text-xl' />
                    <h5>Flight</h5>
                </Link>
                <Link className={`${router.pathname === "/realestate" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/realestate">
                    <MdRealEstateAgent className='text-xl' />
                    <h5>Real Estate</h5>
                </Link>
                <Link className={`${router.pathname === "/others" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/others">
                    <MdDevicesOther className='text-xl' />
                    <h5>Others</h5>
                </Link>
                <Link className={`${router.pathname === "/favorite" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/favorite">
                    <MdFavorite className='text-xl' />
                    <h5>Favorites</h5>
                </Link>
                <Link className={`${router.pathname === "/settings" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/settings">
                    <MdSettings className='text-xl' />
                    <h5>Settings</h5>
                </Link>
                <Link className={`${router.pathname === "/profile" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/profile">
                    <MdPerson className='text-xl' />
                    <h5>Profile</h5>
                </Link>
                <Link className={`${router.pathname === "/help" ? "text-blue-600 bg-gray-300" : ""} flex items-center space-x-3 hover:bg-gray-300 hover:no-underline px-6 py-3 text-gray-600`} href="/help">
                    <MdHelp className='text-xl' />
                    <h5>Help center</h5>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar