import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/SideBar';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';
import { useState } from 'react';

function App() {

  const [ selectedTab , setSelectedTab ] = useState("Home")
  return (
    
    <div className='app-container'>
    
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    <div className="content">
    <Header/>
    {selectedTab === "Home" ? <PostList/> : <CreatePost/>}
    
    <Footer/>
    </div>
    </div>
   
  )
}

export default App