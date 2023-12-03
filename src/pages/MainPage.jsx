import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import NavBar from '../components/NavBar';
import WorkerProcess from '../components/WorkerProcess';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Header from '../components/Header';

const MainPage = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <WorkerProcess />
            <Services />
            <Testimonial />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default MainPage;
