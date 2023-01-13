import Head from "next/head"
import Footer from "../components/footer"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import { useContextState } from "../context/context"


export default function realestate() {
    const { sidebar, setSidebar, openDate, setOpenDate } = useContextState()

    const handleItem = () => {
        if (sidebar) {
            setSidebar(false)
        }
        if (openDate) {
            setOpenDate(false)
        }
        return
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`relative bg-slate-100`} onClick={handleItem}>
                {sidebar ? <div className='fixed z-40'>
                    <Sidebar />
                </div> : ""}
                <div>
                    <div className='sticky p-6 space-y-2 border-b-2'>
                        <Header />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
