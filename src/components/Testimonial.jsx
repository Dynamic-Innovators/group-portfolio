import {useEffect, useState} from 'react';

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
        );
    };

    const handleNextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextSlide();
        }, 5000); // Auto transition every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            name: 'Mr.Felix N.O Ashong',
            role: 'Co-operate Entrepreneur',
            feedback:
                "Working with Dynamic Innovators has been an incredible experience. The team's dedication and expertise have elevated our projects to new heights.",
            image: '/image/prof.jpg',
        },
        {
            name: 'Mr. Francis Amponsah',
            role: 'CEO (Dukes Technologies)',
            feedback:
                'Collaborating with Dynamic Innovators has been a strategic move for Dukes Technologies.',
            image: '/image/ppp.jpg',
        },
    ];

    return (
        <section className='testimonial section-padding'>
            <div className='container'>
                <div className='card col-md-12 mt-2'>
                    <div
                        id='carouselExampleControls'
                        className='carousel slide'
                        data-ride='carousel'
                        data-interval={false}
                    >
                        <div
                            className='w-100 carousel-inner mb-5'
                            role='listbox'
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${
                                        index === activeIndex ? 'active' : ''
                                    }`}
                                >
                                    <div className='row'>
                                        <div className='col-md-7 d-flex flex-column justify-content-center'>
                                            <div className='testimonial-description'>
                                                <h3>
                                                    Clients’ Love To Work With
                                                    Us
                                                </h3>
                                                <div className='client-meta-data'>
                                                    <h5>{testimonial.name}</h5>
                                                    <p>{testimonial.role}</p>
                                                    <p className='clients-feedback'>
                                                        {testimonial.feedback}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className='client-picture'>
                                                <img
                                                    src={testimonial.image}
                                                    alt=''
                                                    className='h-100 w-100'
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
                            ))}
                        </div>
                        <a
                            className='carousel-control-prev testimonial-control'
                            href='#carouselExampleControls'
                            role='button'
                            data-slide='prev'
                            onClick={handlePrevSlide}
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
                            onClick={handleNextSlide}
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
