import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import Page1 from '../assets/page1.jpg'

const books = [
  {
    id: 1,
    title: 'No Closure No Forgiveness',
    author: 'Pawan Verma',
    category: 'Non-Fiction - Leadership',
    rating: 5,
    coverImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dB6o0FileUtJIyeSLHV30adbS8OJPq.png',
    description:
      '"No Closure, No Forgiveness" by Pawan Verma is a thought-provoking book that delves into the complexities of emotional wounds, justice, and unresolved pain. It explores how individuals and societies grapple with past traumas, betrayals, and injustices that remain unacknowledged or unaddressed. Verma examines the human need for closure and the challenges of forgiveness when healing is incomplete. Through compelling narratives and deep reflections, the book sheds light on the psychological and societal consequences of carrying unresolved grief or anger, urging readers to confront their truths rather than suppress them. It\'s a powerful exploration of memory, reconciliation, and the emotional cost of silence.',
  },
];

export default function BookCarousel() {
  const [index, setIndex] = useState(0);

  const prevBook = () => setIndex((index - 1 + books.length) % books.length);
  const nextBook = () => setIndex((index + 1) % books.length);

  const current = books[index];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-semibold text-center mb-2">Latest Books</h1>
      <div className="w-72 h-0.5 bg-yellow-400 mt-10"></div>

      

      <div className="relative w-full max-w-5xl bg-white border rounded-xl shadow-lg p-8">
         <div className="flex items-center text-black text-3xl   font-bold  ml-14">
            <BookOpen className="mr-2 text-amber-500 ml-1"/>Fiction Book's  <span className=''></span>
          </div>
        <div className="flex flex-col md:flex-row gap-8 items-start mt-9">
         

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="md:w-1/3 ml-14">
  <img
    src={Page1}
    alt={current.title}
    className="w-[202px] h-[296px] object-cover rounded-lg shadow-md"
  />
</div>


            <div className="md:w-2/3 -ml-14">
              <h2 className="text-xl font-semibold mb-1"> <span className="text-xl  font-bold mb-1">{current.title}</span> <span className="text-yellow-500 text-sm mb-2">{'★'.repeat(current.rating)}{'☆'.repeat(5 - current.rating)}</span></h2>
              
              <p className="text-xs inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded mb-4">
                {current.category}
              </p>
              <p className="text-gray-700 text-sm mb-6">{current.description}</p>
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
<div className="w-72 h-0.5 bg-yellow-400 mt-10 "></div>
    </div>
  );
}
