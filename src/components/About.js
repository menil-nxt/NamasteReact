import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            About Namaste React
          </h1>
          <p className="text-lg text-orange-500 font-medium">
            Crafting Experiences, One Meal at a Time.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            "Our journey began with a simple craving for authentic flavors and a
            frustration with long delivery wait times. We realized that a great
            meal isn't just about the ingredients; it's about the warmth and
            connection it creates at your dining table. Namaste React was
            founded to bridge the gap between world-class local chefs and your
            doorstep. Today, we are proud to serve a community of food lovers
            who refuse to compromise on quality or speed. We're not just
            delivering food; we're bringing the heart of the kitchen to your
            home."
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-orange-50 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Local First
            </h3>
            <p className="text-gray-500 text-sm">
              We partner with neighborhood kitchens to support local businesses.
            </p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Real-time Tracking
            </h3>
            <p className="text-gray-500 text-sm">
              Know exactly where your food is, from the wok to your front door.
            </p>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🌿</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Fresh Quality
            </h3>
            <p className="text-gray-500 text-sm">
              Only the highest rated restaurants make it onto our curated list.
            </p>
          </div>
        </div>

        <div className="flex justify-around items-center bg-gray-50 rounded-2xl py-6 px-4 mb-8">
          <div className="text-center">
            <span className="text-2xl font-bold text-orange-500">50+</span>
            <p className="text-sm text-gray-500">Restaurants</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-orange-500">10k+</span>
            <p className="text-sm text-gray-500">Happy Customers</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-orange-500">20 min</span>
            <p className="text-sm text-gray-500">Avg. Delivery</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Explore Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
