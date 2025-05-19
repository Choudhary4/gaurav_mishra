import React from 'react';

export default function AwardsAndBlogsPage() {
  return (
    <div className="bg-white text-gray-900 font-sans mt-11">
      {/* Consultation Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-xl p-8 m-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold">Ready to Transform Your Organization?</h2>
          <p>
            With experience serving on boards and leading initiatives in organizations like Reliance Group and LIC of India, Dr. Verma brings a wealth of practical knowledge to help your organization thrive.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800">
            Schedule a Consultation
          </button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Consultation Meeting"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Awards Section */}
      <section className="text-center py-12 bg-gray-50">
        <h2 className="text-3xl font-semibold text-yellow-800 mb-10">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {[
            {
              title: 'Leadership Excellence Award',
              subtitle: 'Financial Services Forum, 2024',
              badge: 'Excellence',
              icon: '🏆'
            },
            {
              title: 'Best Business Author',
              subtitle: 'India Authors Award, 2023',
              badge: 'Author',
              icon: '🏅'
            },
            {
              title: 'Distinguished Speaker',
              subtitle: 'Global Leadership Summit, 2022',
              badge: 'Speaker',
              icon: '🎤'
            },
            {
              title: 'Lifetime Achievement',
              subtitle: 'Financial Services Association, 2021',
              badge: 'Achievement',
              icon: '🌟'
            }
          ].map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">{award.icon}</div>
              <h3 className="font-semibold text-lg">{award.title}</h3>
              <p className="text-sm text-gray-600">{award.subtitle}</p>
              <span className="mt-2 inline-block bg-yellow-100 text-yellow-700 px-3 py-1 text-xs rounded-full">
                {award.badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-10">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {[
            {
              title: 'In the Service Of God',
              description: 'God is highly disturbed. He surveys the universe and finds everything to be in order. But as he looks around, he finds his own heaven...',
            },
            {
              title: 'Of Men And Women',
              description: 'Life is indeed cruel to men. When they are born, their mothers get compliments and flowers, when they get married, their brides get presents and...',
            },
            {
              title: 'Tax Us More, Dear FM',
              description: 'Dear Pranab Da, As you were reading out the pages of your budget speech in the Parliament last week, with me and my family members listening...'
            }
          ].map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left">
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-700 font-medium">By Pawan Verma <span className="text-yellow-600 ml-2 cursor-pointer">Read More</span></p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800">
            View All Blogs
          </button>
        </div>
      </section>
    </div>
  );
} 
