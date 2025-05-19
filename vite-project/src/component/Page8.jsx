import React from "react";
import { FaLinkedin, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const testimonials = [
  {
    text: "It's a must read for all the new generation leaders who wants to hone their leadership.",
    author: "Manish Mimani",
    title: "Founder & CEO, Protectt.ai Labs"
  },
  {
    text: "Highly recommended to practitioners for through on new-age Leadership.",
    author: "M. Balachandran",
    title: "Former Chairman, Bank of India and NPCI"
  },
  {
    text: "The 10X Leader makes you think about leadership in an entirely new way.",
    author: "Manish Mimani",
    title: "Founder & CEO, Protectt.ai Labs Pvt. Ltd"
  }
];

const socialMedia = [
  { icon: <FaLinkedin />, label: "LinkedIn" },
  { icon: <FaYoutube />, label: "YouTube" },
  { icon: <FaTwitter />, label: "Twitter" },
  { icon: <FaFacebook />, label: "Facebook" },
  { icon: <FaInstagram />, label: "Instagram" }
];

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Book Testimonials */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-semibold mb-10">Book Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 max-w-sm w-full text-left"
            >
              <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
              <p className="italic mb-4">"{t.text}"</p>
              <p className="font-bold">{t.author}</p>
              <p className="text-sm text-gray-600">{t.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Social Media</h2>
        <div className="flex justify-center gap-8 text-xl">
          {socialMedia.map((s, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center text-2xl mb-2">{s.icon}</div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="mb-4">Author, speaker, and consultant helping individuals and organizations tell their stories with impact.</p>
            <div className="flex gap-4">
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Books</li>
              <li>Speaking</li>
              <li>Consulting</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>Free Writing Guide</li>
              <li>Leadership Toolkit</li>
              <li>Storytelling Templates</li>
              <li>Podcast</li>
              <li>Video Library</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Subscribe</h3>
            <p className="mb-2">Join my newsletter for insights on leadership, storytelling, and writing.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-lg text-black w-full"
              />
              <button className="bg-yellow-500 text-black px-4 rounded-r-lg">Subscribe</button>
            </div>
            <p className="text-xs mt-2">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-10">
          © 2025 Author Name. All rights reserved.
          <div className="flex justify-center gap-4 mt-2">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
