import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Person from './Person/PersonData';


const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Person
          name="John Doe"
          title="Software Engineer"
          salary="120000"
          phone="123-456-7890"
          email="johndoe@example.com"
          animal="Dog"
        />
       
      </main>
      <Footer />
    </div>
  );
};

export default App;
