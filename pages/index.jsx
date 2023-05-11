import Banner from '@/components/Banner'
import Form from '@/components/Form'
import Portfolio from '@/components/Portfolio'
import Resume from '@/components/Skills'
export default function Home() {
  return (
    <div className='h-screen w-full xs:px-5 sm:px-20 overflow-y-auto'>
      {/* <div className='w-full xs:h-20 sm:h-28'></div> */}
      <div className='h-full'>
        <Banner />
        <Resume />
        <Portfolio/>
        <Form />
      </div>
    </div>
  )
}
