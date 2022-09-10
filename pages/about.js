import { Navbar } from '../components/navbar'
import { Random } from '../components/random'
import { Footer } from '../components/footer'
import Head from 'next/head'

export default function About() {
  return (
    <div>
        <Head>
            <title>About Us - Heroes Arc</title>
            <meta name='Heroes Arc by Ehmer Asim' content='Heroes Arc by Ehmer Asim' ></meta>
        </Head>
        <Navbar/>
        <Random/>
        <Footer/>
    </div>
  )
};