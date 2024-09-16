// src/components/FeaturePage.js
   import React from 'react';
   import './FeaturePage.css';

   const FeaturePage = () => {
     return (
       <div className="feature-page">
         <header className="header">
           <h1>Zymo Booking Feature</h1>
           <p>Book your appointments with ease using Zymo.app</p>
         </header>
         <section className="feature-description">
           <h2>Feature Description</h2>
           <p>Zymo.app allows you to book appointments seamlessly with just a few clicks. Our intuitive interface ensures a smooth booking experience.</p>
         </section>
         <section className="benefits">
           <h2>Benefits</h2>
           <ul>
             <li>Easy to use</li>
             <li>Quick booking process</li>
             <li>Real-time updates</li>
           </ul>
         </section>
         <section className="screenshots">
           <h2>Screenshots</h2>
           <img src="screenshot1.png" alt="Screenshot 1" />
           <img src="screenshot2.png" alt="Screenshot 2" />
         </section>
         <section className="call-to-action">
           <button>Try Now</button>
           <button>Learn More</button>
         </section>
       </div>
     );
   };

   export default FeaturePage;
