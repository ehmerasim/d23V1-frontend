import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import { Navbar } from '../components/navbar'
import imageUrlBuilder from '@sanity/image-url'
import { Footer } from '../components/footer'



function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }


const Blogitems = ({posts}) => {
    return (
      <div>
        <Navbar/>
        <div className='bg-gradient-to-tl from-purple-200 via-yellow-50 to-indigo-400 text-center h-[400px] -mb-8'>
        <h1 className='text-8xl translate-y-20'>Origins</h1>
        <h3 className='translate-y-28 font-medium m-1'>Profiling some of the most creative voices across Business, Tech, Media, Entertainment, Fashion and more.</h3>
        <h3 className='translate-y-28 font-medium m-1'>Here are some of there journeys and thoughts.</h3>
        </div>
        <div className='grid grid-cols-1 grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-5 md:p-6 bg-gradient-to-tl from-sky-200 via-yellow-100 to-purple-200'>
        {posts.length > 0 && posts.map(
          ({mainImage, _id, title = '', slug = '', publishedAt = ''}) =>
            slug && (
            <Link href="/post/[slug]" as={`/post/${slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <li key={_id} className="list-none">
                <img src={urlFor(mainImage).url()} alt='Heroes Arc' className='object-cover w-full h-52 group-hover:scale-105 transition-transform duration-200 ease-in-out'/>
                <div className='flex justify-between p-5 bg-white'>
                    <div>
                      <h2 className='text-lg font-medium'>{title}</h2>
                      <a className='text-sm text-gray-500'>({new Date(publishedAt).toDateString()})</a>
                    </div>
                </div>
                {' '}
              </li>
            </div>
            </Link>
            )
        )}
        </div>
        <Footer/>
      </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      },
      revalidate: 10,
    }
}

export default Blogitems