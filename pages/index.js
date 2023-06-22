import Layaout from '@/components/Layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <Layaout>
      <div className='bg-white h-full rounded-md p-10 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
        </div>
      </div>
    </Layaout>
  )
}

