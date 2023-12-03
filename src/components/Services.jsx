const Services = () => {
    return (
        <section className='services section-padding'>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center w-100 service-heading'>
                        We Provide a Platform To Easily
                        <span className='highlight'>
                            Build Your Project
                        </span>{' '}
                    </h2>
                </div>
            </div>
            <div className='container text-center mt-5'>
                <div className='row mx-auto my-auto'>
                    <div
                        id='myCarousel'
                        className='carousel slide w-100'
                        data-ride='carousel'
                    >
                        <div
                            className='.service-carousel carousel-inner w-100'
                            role='listbox'
                        >
                            <div className='carousel-item active'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <div
                                        className='card service-card'
                                        style={{width: '18rem'}}
                                    >
                                        <img
                                            className='card-img-top'
                                            src='/image/ui-ux.jpeg'
                                            alt='Card image cap'
                                        />
                                        <div className='card-body bg-white'>
                                            <h5 className='card-title'>
                                                UI/UX
                                            </h5>
                                            <p className='card-text'>
                                                Crafting delightful user
                                                experiences to elevate your
                                                digital presence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <div
                                        className='card service-card'
                                        style={{width: '18rem'}}
                                    >
                                        <img
                                            className='card-img-top'
                                            src='/image/webdev.png'
                                            alt='Card image cap'
                                        />
                                        <div className='card-body bg-white'>
                                            <h5 className='card-title'>
                                                Website Optimization and
                                                Development
                                            </h5>
                                            <p className='card-text'>
                                                Transforming websites into
                                                powerful tools for success with
                                                optimization and development
                                                strategies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <div
                                        className='card service-card'
                                        style={{width: '18rem'}}
                                    >
                                        <img
                                            className='card-img-top'
                                            src='/image/socialmedia.jpeg'
                                            alt='Card image cap'
                                        />
                                        <div className='card-body bg-white'>
                                            <h5 className='card-title'>
                                                Social Media Marketing
                                            </h5>
                                            <p className='card-text'>
                                                Building your brand and engaging
                                                audiences through effective
                                                social media marketing
                                                strategies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <div
                                        className='card service-card'
                                        style={{width: '18rem'}}
                                    >
                                        <img
                                            className='card-img-top'
                                            src='/image/appdev.png'
                                            alt='Card image cap'
                                        />
                                        <div className='card-body bg-white'>
                                            <h5 className='card-title'>
                                                App Development
                                            </h5>
                                            <p className='card-text'>
                                                Turning innovative ideas into
                                                functional and user-friendly
                                                mobile applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <div
                                        className='card service-card'
                                        style={{width: '18rem'}}
                                    >
                                        <img
                                            className='card-img-top'
                                            src='/image/pm.png'
                                            alt='Card image cap'
                                        />
                                        <div className='card-body bg-white'>
                                            <h5 className='card-title'>
                                                Project Management
                                            </h5>
                                            <p className='card-text'>
                                                Efficiently plan, execute, and
                                                oversee projects for successful
                                                and timely completion.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                    <div
                                        className='card service-card'
                                        style={{width: '18rem'}}
                                    >
                                        <img
                                            className='card-img-top'
                                            src='/image/mso.webp'
                                            alt='Card image cap'
                                        />
                                        <div className='card-body bg-white'>
                                            <h5 className='card-title'>
                                                Office Productivity
                                            </h5>
                                            <p className='card-text'>
                                                Enhancing workplace efficiency
                                                and productivity with tailored
                                                solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            className='carousel-control-prev w-auto '
                            href='#myCarousel'
                            role='button'
                            data-slide='prev'
                        >
                            <span
                                className='carousel-control-prev-icon service-control-prev'
                                aria-hidden='true'
                            />
                            <span className='sr-only'>Previous</span>
                        </a>
                        <a
                            className='carousel-control-next w-auto'
                            href='#myCarousel'
                            role='button'
                            data-slide='next'
                        >
                            <span
                                className='carousel-control-next-icon service-control-next'
                                aria-hidden='true'
                            />
                            <span className='sr-only'>Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
