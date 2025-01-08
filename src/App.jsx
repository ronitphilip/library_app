import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  )
}

export default App;