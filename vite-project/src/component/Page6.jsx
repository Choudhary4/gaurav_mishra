import React from 'react';
import Page1 from '../assets/page61.jpg';
import Page2 from '../assets/page62.jpg';
import Page3 from '../assets/page63.jpg';
import Page4 from '../assets/page64.jpg';
import Page5 from '../assets/page65.jpg';
import Page6 from '../assets/page66.jpg';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6">
      <div className="max-w-6xl mx-auto">
        {/* Professional Speaker Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 border-b pb-2 w-fit mx-auto">
            Professional Speaker
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Page1}
                alt="Expert speaker"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-sm text-gray-700">
                An expert is typically an individual whose knowledge and experience are deeply rooted within a specific industry or field.
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Page2}
                alt="Speaker delivering speech"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-sm text-gray-700">
                The core task of a professional speaker is to deliver speeches or presentations at various events, such as conferences, seminars, corporate meetings, or special occasions.
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Page3}
                alt="Professional speaker on stage"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-sm text-gray-700">
                One of the main benefits of working with a professional speaker is that they spend a significant amount of time researching and crafting their speeches.
              </div>
            </div>
          </div>
        </section>

        {/* Management Consultant Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 border-b pb-2 w-fit mx-auto">
            Management Consultant
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Page4}
                alt="Strategic leadership"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Strategic Leadership</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Developing leadership capabilities and strategic thinking at all levels of your organization to drive sustainable growth.
                </p>
                <a href="#" className="text-sm text-yellow-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Page5}
                alt="Organizational transformation"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Organizational Transformation</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Guiding organizations through complex change initiatives with a focus on culture, structure, and leadership alignment.
                </p>
                <a href="#" className="text-sm text-yellow-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={Page6}
                alt="Innovation and growth"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Innovation & Growth</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Building innovation capabilities and growth strategies for businesses looking to expand or enter new markets.
                </p>
                <a href="#" className="text-sm text-yellow-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
