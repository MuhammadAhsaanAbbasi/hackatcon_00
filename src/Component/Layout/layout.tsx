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
            <div className="max-sm:hidden">
            <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={20} className=""><Navbar /></ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={80}>{children}</ResizablePanel>
                </ResizablePanelGroup>
            </div>
            <div className='sm:hidden flex flex-col'>
                <div className="basis-4/12">
                <Navbar />
                </div>
                <hr className='h-10 w-11/12 text-orange-500 mx-auto' />
                <div className='basis-8/12'>
                    {children}
                </div>
            </div>
        </ThemeLayout>
    )
}