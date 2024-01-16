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
            <div className='max-md:hidden'>
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={20} className=""><Navbar /></ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={80}>{children}</ResizablePanel>
                </ResizablePanelGroup>
            </div>
            <div className="md:hidden">
                <ResizablePanelGroup
                    direction="vertical"
                    className="min-h-screen max-w-md rounded-lg border"
                >
                    <ResizablePanel defaultSize={15}>
                        <Navbar />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={85}>
                            {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </ThemeLayout>
    )
}