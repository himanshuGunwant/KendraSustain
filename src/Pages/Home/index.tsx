import React from 'react';
import { Navbar, HomeDetails, Features, Organize, HomeFooter } from 'Components';
export default function Home() {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          padding: '2rem',
          zIndex: 10
        }}>
        <Navbar />
      </div>
      <HomeDetails />
      <Features />
      <Organize />
      <HomeFooter />
    </>
  );
}
