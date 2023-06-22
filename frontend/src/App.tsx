import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Library } from './pages/Library';
import { Listen } from './pages/Listen';
import { Chat } from './pages/Chat';
import { Read } from './pages/Read'

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Library/>}/>
      <Route path="/read/:id" element={<Read/>}/>
      <Route path="/listen" element={<Listen/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
    </div>
  );
}

export default App;
