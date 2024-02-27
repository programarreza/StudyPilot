
import Banner from '@/components/Banner';
import Collaborator from '@/components/Collaborator';
import Courses from '@/components/Courses';
import Instructor from '@/components/Instructor/Instructor';
import UserStatics from '@/components/UserStatics/UserStatics';
import React from 'react';


const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Collaborator></Collaborator>
      <Instructor></Instructor>
      <Courses></Courses>
      <UserStatics></UserStatics>
    </div>
  );
};

export default HomePage;