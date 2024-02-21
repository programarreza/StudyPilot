import Banner from '@/components/Banner';
import Collaborator from '@/components/Collaborator';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';


const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Collaborator></Collaborator>
    </div>
  );
};

export default HomePage;