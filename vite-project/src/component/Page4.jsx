import React from "react";
import Page4 from '../assets/page1.jpg'
import Page1 from '../assets/page2.png'
import Page2 from '../assets/Book1.jpg'
import Page3 from '../assets/book2.png'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';



const books = [
  {
    title: "The 10X Leader",
    subtitle: "Breaking the Rules of Conventional Leadership",
    author: "Pawan Verma",
    image:
      Page1,
  },
  {
    title: "Age of the Imperfect Leader",
    subtitle: "Leading from the Heart",
    author: "Pawan Verma",
    image:
      Page2
  },
  {
    title: "Unbroken",
    subtitle: "A Journey of Resilience and Redemption",
    author: "Pawan Verma",
    image:
      Page3
  },
  {
    title: "No Closure No Forgiveness",
    subtitle: "A Gripping Psychological Thriller",
    author: "Pawan Verma",
    image:
      Page4
  },
];

const BookGlance = () => {
  return (
    <section className="px-4 py-12 bg-white text-center -mt-64">
      <div className="flex items-center justify-center mb-6">
  <div className="flex-grow h-0.5 bg-yellow-400 max-w-[100px] mx-2" />
  <h2 className="text-3xl font-bold text-black flex items-center gap-2">
    Book at a Glance <span role="img" aria-label="books">📚</span>
  </h2>
  <div className="flex-grow h-0.5 bg-yellow-400 max-w-[100px] mx-2" />
</div>

      
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Discover our curated collection of insightful books that will transform your perspective on leadership, personal growth, and professional development.
      </p>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
  {books.map((book, idx) => (
    <div key={idx} className="flex flex-col items-center text-center">
      <img
        src={book.image}
        alt={book.title}
        className="w-[218px] h-[331px] rounded-md shadow-md mb-2"
      />
      <h3 className="font-bold text-black">{book.title}</h3>
      <p className="text-gray-600 text-sm">{book.subtitle}</p>
      <p className="text-gray-500 text-sm mb-4">by {book.author}</p>
     <button className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition flex items-center gap-2">
  <BookOpen />
  Read More
</button>

    </div>
  ))}
</div>

    </section>
  );
};

export default BookGlance;
