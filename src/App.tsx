import React from 'react';
import GeneratorPage from './pages/GeneratorPage';
import './App.css'; // Assuming you might have some base app styles

function App() {
  return (
    <div className="App">
      {/* We can add a Navbar component here later */}
      <main>
        <GeneratorPage />
      </main>
      {/* We can add a Footer component here later */}
    </div>
  );
}

export default App;
