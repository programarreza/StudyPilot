
import Banner from '@/components/Banner';
import Collaborator from '@/components/Collaborator';
import Courses from '@/components/Courses';
import React from 'react';


const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Collaborator></Collaborator>
      <Courses></Courses>
    </div>
  );
};

export default HomePage;