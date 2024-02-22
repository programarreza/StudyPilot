import Banner from '@/components/Banner';
import Collaborator from '@/components/Collaborator';
import Instructor from '@/components/Instructor/Instructor';
import Navbar from '@/components/Navbar/Navbar';

import React from 'react';


const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Collaborator></Collaborator>
      {/* popular classes section */}
      {/* feedback section */}
      {/* statics of this website */}
      <Instructor></Instructor>
    </div>
  );
};

export default HomePage;