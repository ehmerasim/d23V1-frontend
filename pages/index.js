import Head from 'next/head'
import { Navbar } from '../components/navbar'
import { Hero } from '../components/Hero'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div>
       <Head>
        <title>Heroes Arc</title>
        <meta name='Heroes Arc - Ehmer Asim' content='Heroes Arc created by Ehmer Asim'></meta>
       </Head>
       <Navbar/>
       <Hero/>
       <Footer/>
    </div>
  )
};
