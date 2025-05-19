import React from 'react';

function BookPublished() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center px-4 py-12 -mt-96">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-center">
        Book Published
      </h2>
      <div className="w-64 h-0.5 bg-yellow-400 mb-10"></div>

      <div className="flex flex-wrap gap-12 justify-center">
  <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
    Non - Fiction
  </button>
  <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
    Romance
  </button>
  <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
    Paranormal
  </button>
</div>

    </div>
  );
}

export default BookPublished;
