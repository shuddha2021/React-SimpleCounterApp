// App.tsx

import React from 'react';
import Counter from './Counter'; // Import the Counter component from Counter.tsx
import './App.css'; // Import the CSS file for styling

const App = (): JSX.Element => {
  // Return JSX elements for rendering the app
  return (
      <div className="App">
        <h1>Counter App</h1>
          {/* Render the Counter component */}
        <Counter />
      </div>
  );
};

export default App;
