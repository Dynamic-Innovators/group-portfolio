import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Projects = () => {
    return (
        <>
            <section className='header contact-header'>
                <NavBar />

                <div className='container header-content '>
                    <div className='row h-100'>
                        <div className='col-md-6 centralize'>
                            <div className='left-content '>
                                <h2>
                                    Our{' '}
                                    <span className='highlight'>Project</span>
                                </h2>
                                <p>Home / Project</p>
                            </div>
                        </div>
                        <div className='col-md-6 centralize'>
                            <div className='right-content'>
                                <img src='/image/PROJECT.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='portfolio section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='text-center portfolio-heading'>
                                Dynamic{' '}
                                <span className='highlight'>Team Work</span>{' '}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='portfolio-buttons text-center'>
                                <button
                                    type='button'
                                    className='control'
                                    data-filter='all'
                                >
                                    All
                                </button>
                                <button
                                    type='button'
                                    className='control'
                                    data-filter='.design'
                                >
                                    Personal Based
                                </button>
                                <button
                                    type='button'
                                    className='control'
                                    data-filter='.development'
                                >
                                    Client{' '}
                                </button>
                                <button
                                    type='button'
                                    className='control'
                                    data-filter='.case'
                                >
                                    Buisness
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='container myMixCont text-center'
                    data-ref='mixitup-container'
                >
                    <div className='row d-flex justify-content-center '>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                            <div
                                className='portfolio-block design'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/e library.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>E-Library</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Education</p>
                                    </a>
                                </div>
                            </div>
                            <div
                                className='portfolio-block development'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/invoice.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>Invoice System</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Finance </p>
                                    </a>
                                </div>
                            </div>
                            <div
                                className='portfolio-block development'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/medilab.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>MediLab</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Health </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                            <div
                                className='portfolio-block design'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/ugtube.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>UG TUBE</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Entertainment </p>
                                    </a>
                                </div>
                            </div>
                            <div
                                className='portfolio-block case'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/vmobile.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>VIRTUA</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Mobile Application </p>
                                    </a>
                                </div>
                            </div>
                            <div
                                className='portfolio-block case'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/ugpage.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>UG PAGE</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Education </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                            <div
                                className='portfolio-block case'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/bricker.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>BRICKER</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Technology </p>
                                    </a>
                                </div>
                            </div>
                            <div
                                className='portfolio-block development'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/Blog.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>Delly Media</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Social Media </p>
                                    </a>
                                </div>
                            </div>
                            <div
                                className='portfolio-block case'
                                data-ref='mixitup-target'
                            >
                                <img
                                    src='/image/Agency.png'
                                    className='img-fluid'
                                />
                                <div className='portfolio-overlay'>
                                    <a href='#'>
                                        <h3>Delly Agency</h3>
                                    </a>
                                    <a href='#'>
                                        <p> Buisness </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-padding portfolio-call-to-action'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>
                                Any Consultation For Made Creative <br />
                                <span className='highlight'>
                                    Web Design &amp; Develoment
                                </span>
                            </h2>
                            <a
                                href='contact-us.html'
                                className='btn btn-primary project-button-1'
                            >
                                Let's Talk <i className='fas fa-angle-right' />
                            </a>
                            <a
                                href='./service'
                                className='btn btn-secondary project-button-2'
                            >
                                Explore More{' '}
                                <i className='fas fa-angle-right' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Projects;
