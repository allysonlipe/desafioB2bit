import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { RequireAuth } from './contexts/Auth/RequireAuth';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<RequireAuth>
          <Profile />
        </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
