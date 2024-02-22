
import Banner from '@/components/Banner';
import Collaborator from '@/components/Collaborator';
import Courses from '@/components/Courses';
import Instructor from '@/components/Instructor/Instructor';
import React from 'react';


const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Collaborator></Collaborator>
      <Instructor></Instructor>
      <Courses></Courses>
    </div>
  );
};

export default HomePage;