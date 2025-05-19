import React from "react";
import book1 from '../assets/page91.jpg'
import book2 from '../assets/page92.jpg'
import book3 from '../assets/page93.jpg'
import book4 from '../assets/page94.jpg'
import book5 from '../assets/page95.png'
import book6 from '../assets/page96.png'
import book7 from '../assets/page97.jpg'
import book8 from '../assets/page98.jpg'
import book9 from '../assets/page99.jpg'
import book10 from '../assets/page910.jpg'
import book11 from '../assets/page911.jpg'
import book12 from '../assets/page912.jpg'
import book13 from '../assets/page913.jpg'

import book14 from '../assets/page914.jpg'

import book15 from '../assets/page915.jpg'
import { FaCartShopping } from "react-icons/fa6";






const categories = ["Non - Fiction", "Romance", "Paranormal"];

const booksData = [
  [
    { title: "Book 1", image: book1 },
    { title: "Book 2", image:book2 },
    { title: "Book 3", image: book3 },
    { title: "Book 4", image: book4 },
    { title: "Book 5", image: book5 },
    { title: "Book 6", image: book6 },
    { title: "Book 7", image: book7 },
  ],
  [
    { title: "Book 8", image: book8 },
    { title: "Book 9", image: book9 },
    { title: "Book 10", image: book10 },
    { title: "Book 11", image: book11 },
    { title: "Book 12", image: book12 },
    { title: "Book 13", image: book13 },
  ],
  [
    { title: "Book 14", image: book14 },
  ]
];

const BookPublished = () => {
  return (
    <div className="p-6 space-y-10">
      {booksData.map((group, index) => (
        <div key={index} className="space-y-6">
          <h2 className="text-center text-2xl font-bold">Book Published</h2>
          <div className="flex justify-center gap-4">
            {categories.map((category, i) => (
              <span
                key={i}
                className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-sm shadow"
              >
                {category}
              </span>
            ))}
          </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-items-center">
  {group.map((book, i) => (
    <div key={i} className="w-32 flex flex-col items-center">
      <img
        src={book.image}
        alt={book.title}
        className="rounded shadow-md w-full h-48 object-cover"
      />
      <button className="mt-2 bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded shadow inline-flex items-center gap-2 whitespace-nowrap">
        <span>Buy on Amazon</span>
        <FaCartShopping />
      </button>
    </div>
  ))}
</div>

        </div>
      ))}
    </div>
  );
};

export default BookPublished;
