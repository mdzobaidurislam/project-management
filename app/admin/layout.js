import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({ children }) {
    return <div className="main_warper">
        <Header/>
        <Sidebar/>
        <div className="main_content">
        { children }
        </div>
    </div>
}