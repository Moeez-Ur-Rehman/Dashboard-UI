import React from 'react';
import { Link } from 'react-router-dom';

const ending=()=>{
    return(<section className="bg-blue-500 text-center py-24">
  <div className="max-w-3xl mx-auto px-4"data-aos="zoom-in">
    <h1 className="text-4xl font-bold text-white mb-4">
      The Password Manager for Teams
    </h1>
    <p className="text-white text-lg mb-8">
      TeamPassword is the fastest, easiest and most secure way to store and share team logins and passwords.
    </p>
    <Link to='/get-started'>
    <button
      className="block mx-auto w-full sm:w-auto rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring active:bg-blue-500"
    >
      Get Started
    </button>
    </Link>
  </div>
</section>
)

}
export default ending;