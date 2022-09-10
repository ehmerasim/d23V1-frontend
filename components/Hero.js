import Image from "next/image";
import book from "../public/book.png"


export const Hero = () => {
  return (
  <div className="w-screen h-[900px] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
        <div className="text-center translate-y-40 font-medium text-8xl">
            <a>Building Stories</a>
            <div><Image className="sm:w-0 h-0" src={book} alt="Heroes Arc" height={200} width={250}></Image></div>
        </div>
  </div>
  )
};

