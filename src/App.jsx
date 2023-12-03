import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import Team from './pages/Team';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/service' element={<Service />} />
                <Route path='/service_details' element={<ServiceDetails />} />
                <Route path='/team' element={<Team />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog-details' element={<BlogDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
