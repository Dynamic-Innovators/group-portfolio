import React, {useState} from 'react';

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        const newIndex = (activeIndex - 1 + 6) % 6;
        setActiveIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % 6;
        setActiveIndex(newIndex);
    };

    const services = [
        {
            title: 'UI/UX',
            description:
                'Crafting delightful user experiences to elevate your digital presence.',
            image: '/image/ui-ux.jpeg',
        },
        {
            title: 'Website Optimization and Development',
            description:
                'Transforming websites into powerful tools for success with optimization and development strategies.',
            image: '/image/webdev.png',
        },
        {
            title: 'Social Media Marketing',
            description:
                'Building your brand and engaging audiences through effective social media marketing strategies.',
            image: '/image/socialmedia.jpeg',
        },
        {
            title: 'App Development',
            description:
                'Turning innovative ideas into functional and user-friendly mobile applications.',
            image: '/image/appdev.png',
        },
        {
            title: 'Project Management',
            description:
                'Efficiently plan, execute, and oversee projects for successful and timely completion.',
            image: '/image/pm.png',
        },
        {
            title: 'Office Productivity',
            description:
                'Enhancing workplace efficiency and productivity with tailored solutions.',
            image: '/image/mso.webp',
        },
    ];

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
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${
                                        index === activeIndex ? 'active' : ''
                                    }`}
                                >
                                    <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
                                        <div
                                            className='card service-card'
                                            style={{width: '18rem'}}
                                        >
                                            <img
                                                className='card-img-top'
                                                src={service.image}
                                                alt='Card image cap'
                                            />
                                            <div className='card-body bg-white'>
                                                <h5 className='card-title'>
                                                    {service.title}
                                                </h5>
                                                <p className='card-text'>
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
