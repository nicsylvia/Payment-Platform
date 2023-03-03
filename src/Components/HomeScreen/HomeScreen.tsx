import React from 'react'
import Header from '../Header/Header';
import BuildSavings from './BuildSavings';
import Hero from './Hero';
import Investment from './Investment';
import SaverForTheMonth from './SaverForTheMonth';
import Security from './Security';

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <Security />
      <br />
      <br />
      <br />
      <BuildSavings />
      <Investment />
      <SaverForTheMonth />
    </div>
  )
}

export default HomeScreen