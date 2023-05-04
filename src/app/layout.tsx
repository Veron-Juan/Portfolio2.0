import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';

interface Props {
  children: React.ReactNode;
}
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Juan Veron',
  description: 'Portfolio by Juan Veron',
  
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <div className="mt-4   h-screen flex  flex-col">
          <Header/>
          {children}
          <Footer/>
          </div>
          </Providers>
        
      </body>
    </html>
  )
}
