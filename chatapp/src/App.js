import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import AuthContextProvider from './contexts/AuthContextProvider';
import Chats from './components/Chats';

function App() {
  return (
    <div className="App">
     <AuthContextProvider>
      <Routes>
        <Route path="/chats" element ={<Chats/>} />
        <Route path="/" element ={<Login/>} />
      </Routes>
     </AuthContextProvider>
    </div>
  );
}

export default App;
