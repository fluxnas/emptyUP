import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import AnnouncementPage from "./pages/AnnouncementPage"
import AnnouncementsPage from "./pages/AnnouncementsPage"
import BuildingPage from "./pages/BuildingPage"
import FavoritesPage from "./pages/FavoritesPage"
import ListPage from "./pages/ListPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import MessagePage from "./pages/MessagePage"
import MessagesPage from "./pages/MessagesPage"
import ProfilePage from "./pages/ProfilePage"
import UploadedPage from "./pages/UploadedPage"
import UploadPage from "./pages/UploadPage"
import SearchPage from "./pages/SearchPage"
import FiltersPage from "./pages/FiltersPage"



const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage className="homepage"/>}/>
        <Route path="/announcement" element={<AnnouncementPage/>}/>
        <Route path="/announcements" element={<AnnouncementsPage/>}/>
        <Route path="/building" element={<BuildingPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
        <Route path="/list" element={<ListPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/message" element={<MessagePage/>}/>
        <Route path="/messages" element={<MessagesPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/uploaded" element={<UploadedPage/>}/>
        <Route path="/upload" element={<UploadPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/filters" element={<FiltersPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;