import Header from '../Header/header'
import Navbar from '../Navbar/navbar'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import ThemeLayout from '../Themebtn/themeLayout'


export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        
        <ThemeLayout>
            <Header />
            <ResizablePanelGroup direction="horizontal" className='flex flex-col md:flex-row'>
                <ResizablePanel defaultSize={20} className=""><Navbar /></ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={80}>{children}</ResizablePanel>
            </ResizablePanelGroup>
        </ThemeLayout>
    )
}