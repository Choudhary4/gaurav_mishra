import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import Page2 from '../assets/page2.png'

const books = [
  {
  id: 1,
  title: 'The 10X Leader',
  author: 'Pawan Verma',
  category: 'Non-Fiction - Leadership',
  rating: 5,
  coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dB6o0FileUtJIyeSLHV30adbS8OJPq.png',
  description:
  "Leadership expert Pawan Verma introduces you to a new kind of leader — the 10X leader — the one who looks at leadership as a responsibility to make the world a better place to live.\nEquipped with a larger purpose and a future-oriented mindset, this 10X leader harnesses the power of ideas and innovation to create meaningful impact in organizations and communities alike."

}

];

export default function BookCarousel() {
  const [index, setIndex] = useState(0);

  const prevBook = () => setIndex((index - 1 + books.length) % books.length);
  const nextBook = () => setIndex((index + 1) % books.length);

  const current = books[index];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 -mt-28">
      
      

      

      <div className="relative w-full max-w-5xl bg-white border rounded-xl shadow-lg p-8">
         <div className="flex items-center text-black text-3xl   font-bold  ml-14">
            <BookOpen className="mr-2 text-amber-500 ml-1"/>Non-Fiction Book's  <span className=''></span>
          </div>
        <div className="flex flex-col md:flex-row gap-8 items-start mt-9">
         

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="md:w-1/3 ml-14">
  <img
    src={Page2}
    alt={current.title}
    className="w-[202px] h-[296px] object-cover rounded-lg shadow-md"
  />
</div>


            <div className="md:w-2/3 -ml-14">
              <h2 className="text-xl font-semibold mb-1"> <span className="text-xl  font-bold mb-1">{current.title}</span> <span className="text-yellow-500 text-sm mb-2">{'★'.repeat(current.rating)}{'☆'.repeat(5 - current.rating)}</span></h2>
              
              <p className="text-xs inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded mb-4">
                {current.category}
              </p>
              <p className="text-gray-700 text-xl mb-6">Leadership expert Pawan Verma introduces you to a new <br /> kind of leader — the 10X leader — the one who looks at <br /> leadership as a responsibility to make the world a better <br /> place to live.\nEquipped with a larger purpose and a future- <br />oriented mindset, this 10X leader harnesses the power of <br /> ideas and innovation to create meaningful impact in <br /> organizations and communities alike."</p>
              <div className="flex gap-3">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-md">
                  Read More
                </button>
                <button className="bg-white border border-gray-300 hover:bg-gray-100 text-sm text-gray-700 px-4 py-2 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prevBook}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-yellow-500 hover:bg-yellow-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextBook}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-yellow-500 hover:bg-yellow-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="w-72 h-0.5 bg-yellow-400 mt-10"></div>
    </div>
  );
}
