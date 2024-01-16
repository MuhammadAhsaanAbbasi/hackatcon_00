import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/Component/Layout/layout'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'Maa_Creative_Designs',
  description: 'Designs and Upload any Image in your Gallery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={"font-['poppins'] dark:bg-[rgb(10,10,10)] transition-all duration-300"}>
          <Layout>
              {children}
          </Layout>
        </body>
      </html>
    </ClerkProvider>
  )
}

// bg-[rgb(2,8,23)]
// 