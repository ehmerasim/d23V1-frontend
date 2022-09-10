import Link from "next/link";



export const Footer = () => {
    return (
    
    <div>
      <section className="bg-black">
       <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <Link href="/about">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </a>
            </div>
            </Link>
            <Link href="https://heroesarc.beehiiv.com/">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Blog
                </a>
            </div>
            </Link>
            <Link href="/Origins">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Origins
                </a>
            </div>
            </Link>
            <Link href="https://heroesarc.beehiiv.com/subscribe">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Subscribe
                </a>
            </div>
            </Link>
            <Link href="mailto:ehmerasim24@gmail.com">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </a>
            </div>
            </Link>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2022 Heroes Arc, Inc. All rights reserved.
        </p>
       </div>
      </section>
    </div> )
}
