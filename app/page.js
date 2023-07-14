import Header from '@/components/Header'
import BackgroundImage from '../components/BackgroundImage';

export default function Home() {
  return (
      <main className="flex flex-col">
        <BackgroundImage />
        <Header/>
        <div className='flex items-center justify-center min-h-screen mt-10 bg-slate-300 rounded-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-11/12'>
          Probably the hero section...
        </div>
      </main>
  )
}