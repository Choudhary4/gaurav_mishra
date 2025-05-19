import React from "react";
import Page1 from '../assets/page51.jpg'
import Page2 from '../assets/page52.jpg'

const events = [
  {
    title: "The 10X Leader Book Launch",
    description:
      "An exclusive event at the Grand Hyatt featuring industry leaders and management professionals discussing the principles of 10X leadership.",
    date: "May 15, 2025",
    image: Page1
  },
  {
    title: "Leadership Masterclass",
    description:
      "A full-day workshop for executives and aspiring leaders on implementing the 10X leadership principles in their organizations.",
    date: "June 22, 2025",
    image:Page2
  },
  {
    title: "International Literary Festival",
    description:
      "Join Dr. Verma at the prestigious International Literary Festival where he will discuss his journey from finance to fiction writing.",
    date: "July 8-10, 2025",
    image: Page1
  },
];

export default function EventsAtAGlance() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Events and Activities at a Glance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="text-gray-500 text-sm flex items-center">
                <span className="material-icons mr-2">calendar_today</span>
                {event.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          View All Events
        </button>
      </div>
    </div>
  );
}
