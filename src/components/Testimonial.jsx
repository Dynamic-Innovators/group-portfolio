const Testimonial = () => {
    return (
        <section className='testimonial section-padding'>
            <div className='container'>
                <div className='card col-md-12 mt-2'>
                    <div
                        id='carouselExampleControls'
                        className='carousel slide'
                        data-ride='carousel'
                        data-interval={100000}
                    >
                        <div
                            className='w-100 carousel-inner mb-5'
                            role='listbox'
                        >
                            <div className='carousel-item active'>
                                <div className='row'>
                                    <div className='col-lg-7 d-flex flex-column justify-content-center'>
                                        <div className='testimonial-description'>
                                            <h3>
                                                {' '}
                                                Clients’ Love To Work With Us{' '}
                                            </h3>
                                            <div className='client-meta-data'>
                                                <h5>Mr.Felix N.O Ashong</h5>
                                                <p>Co-operate Entrepreneur</p>
                                                <p className='clients-feedback'>
                                                    Working with Dynamic
                                                    Innovators has been an
                                                    incredible experience. The
                                                    team's dedication and
                                                    expertise have elevated our
                                                    projects to new heights.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5'>
                                        <div className='client-picture'>
                                            <img
                                                src='/image/prof.jpg'
                                                alt=''
                                                className='img-fluid'
                                            />
                                            <img
                                                src='/image/coma.svg'
                                                alt=''
                                                className='coma'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='carousel-item'>
                                <div className='row'>
                                    <div className='col-md-7 d-flex flex-column justify-content-center'>
                                        <div className='testimonial-description'>
                                            <h3>
                                                {' '}
                                                Clients’ Love To Work With Us{' '}
                                            </h3>
                                            <div className='client-meta-data'>
                                                <h5>Mr. Francis Amponsah</h5>
                                                <p>CEO (Dukes Technologies)</p>
                                                <p className='clients-feedback'>
                                                    Collaborating with Dynamic
                                                    Innovators has been a
                                                    strategic move for Dukes
                                                    Technologies.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='client-picture'>
                                            <img src='/image/ppp.jpg' alt='' />
                                            <img
                                                src='/image/coma.svg'
                                                alt=''
                                                className='coma'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            className='carousel-control-prev testimonial-control'
                            href='#carouselExampleControls'
                            role='button'
                            data-slide='prev'
                        >
                            <span
                                className='carousel-control-prev-icon testimonial-control-icon'
                                aria-hidden='true'
                            >
                                <i className='fas fa-chevron-left' />
                            </span>
                            <span className='sr-only'>Previous</span>
                        </a>
                        <a
                            className='carousel-control-next testimonial-control'
                            href='#carouselExampleControls'
                            role='button'
                            data-slide='next'
                        >
                            <span
                                className='carousel-control-next-icon testimonial-control-icon'
                                aria-hidden='true'
                            >
                                <i className='fas fa-chevron-right' />
                            </span>
                            <span className='sr-only'>Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
