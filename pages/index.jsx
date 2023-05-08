import Banner from '@/components/Banner'
import Form from '@/components/Form'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Skills'
export default function Home() {
  return (
    <main>
      <div className='h-screen w-full pt-20 xs:px-5 sm:px-10 overflow-y-auto'>
        <Banner />
        <Resume />
        <Portfolio/>
        <Form />
      </div>
    </main>
  )
}
