import React from 'react';
import Main from './components/Main.js';
import ContentBox from './components/ContentBox';
import Footer from './components/Footer';

function App() {
  return (
    <body class="body">
    <div className="page">
      <Main />
      <ContentBox />
      <Footer />
    </div>
    </body>
  );
}

export default App;
