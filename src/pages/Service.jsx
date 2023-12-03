import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Service = () => {
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
                                    <span className='highlight'>Services</span>
                                </h2>
                                <p>Home / Services</p>
                            </div>
                        </div>
                        <div className='col-md-6 centralize'>
                            <div className='right-content'>
                                <img src='/image/service.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='services section-padding'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center w-100 service-heading py-5'>
                            We Provide a Platform To Easily
                            <br />
                            <span className='highlight'>
                                Build Your Project
                            </span>{' '}
                        </h2>
                    </div>
                </div>
                <div className='container'>
                    <div className='row card-row-gap'>
                        <div className=' col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center'>
                            <div
                                className='card service-block-card'
                                style={{width: '18rem'}}
                            >
                                <img
                                    className='card-img-top'
                                    src='/image/ui-ux.jpeg'
                                    alt='Card image cap'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>UI/UX</h5>
                                    <p className='card-text'>
                                        Crafting delightful user experiences to
                                        elevate your digital presence.
                                    </p>
                                    <a href='./service_details' className=''>
                                        Learn More &gt;
                                        <i className='fas fa-angel-right' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center'>
                            <div
                                className='card service-block-card'
                                style={{width: '18rem'}}
                            >
                                <img
                                    className='card-img-top'
                                    src='/image/webdev.png'
                                    alt='Card image cap'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Website Optimization and Development
                                    </h5>
                                    <p className='card-text'>
                                        Transforming websites into powerful
                                        tools for success with optimization and
                                        development strategies.
                                    </p>
                                    <a href='/service_details' className=''>
                                        Learn More &gt;
                                        <i className='fas fa-angel-right' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center'>
                            <div
                                className='card service-block-card'
                                style={{width: '18rem'}}
                            >
                                <img
                                    className='card-img-top'
                                    src='/image/socialmedia.jpeg'
                                    alt='Card image cap'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Social Media Marketing
                                    </h5>
                                    <p className='card-text'>
                                        Building your brand and engaging
                                        audiences through effective social media
                                        marketing strategies.
                                    </p>
                                    <a href='/service_details' className=''>
                                        Learn More &gt;
                                        <i className='fas fa-angel-right' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center'>
                            <div
                                className='card service-block-card'
                                style={{width: '18rem'}}
                            >
                                <img
                                    className='card-img-top'
                                    src='/image/appdev.png'
                                    alt='Card image cap'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        App Development
                                    </h5>
                                    <p className='card-text'>
                                        Turning innovative ideas into functional
                                        and user-friendly mobile applications.
                                    </p>
                                    <a href='/service_details' className=''>
                                        Learn More &gt;
                                        <i className='fas fa-angel-right' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center'>
                            <div
                                className='card service-block-card'
                                style={{width: '18rem'}}
                            >
                                <img
                                    className='card-img-top'
                                    src='/image/pm.png'
                                    alt='Card image cap'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Project Management
                                    </h5>
                                    <p className='card-text'>
                                        Efficiently plan, execute, and oversee
                                        projects for successful and timely
                                        completion.
                                    </p>
                                    <a href='/service_details' className=''>
                                        Learn More &gt;
                                        <i className='fas fa-angel-right' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center'>
                            <div
                                className='card service-block-card'
                                style={{width: '18rem'}}
                            >
                                <img
                                    className='card-img-top'
                                    src='/image/mso.webp'
                                    alt='Card image cap'
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        Office Productivity
                                    </h5>
                                    <p className='card-text'>
                                        Enhancing workplace efficiency and
                                        productivity with tailored solutions.
                                    </p>
                                    <a href='/service_details' className=''>
                                        Learn More &gt;
                                        <i className='fas fa-angel-right' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='service-type section-padding'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center w-100 service-heading py-5'>
                            Why Choose
                            <span className='highlight'>
                                Dynamic Innovators
                            </span>{' '}
                        </h2>
                    </div>
                </div>
                <div className='container'>
                    <div className='row service-type-gap why-choose'>
                        <div className='col-md-6'>
                            <img
                                src='/image/Group 1460.png'
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-md-6'>
                            <h2>Analysis</h2>
                            <p>
                                Our analysis process goes beyond traditional
                                boundaries, delivering insights that drive
                                strategic decisions. We meticulously examine
                                industry trends, consumer behavior, and market
                                dynamics to provide a comprehensive
                                understanding of your business landscape.
                            </p>
                            <p>
                                In a world of constant change, staying ahead
                                requires a proactive approach. Our team of
                                experts utilizes cutting-edge tools and
                                methodologies to gather, analyze, and interpret
                                data. This enables us to uncover hidden
                                opportunities, identify potential challenges,
                                and devise strategies that propel your business
                                forward.
                            </p>
                            <p>
                                With a focus on data-driven decision-making, we
                                delve into quantitative and qualitative
                                analyses. Whether it's assessing market
                                saturation, customer preferences, or competitive
                                positioning, our thorough approach ensures a
                                holistic view of your business environment.
                            </p>
                        </div>
                    </div>
                    <div className='row service-type-gap why-choose'>
                        <div className='col-md-6'>
                            <h2>UI/UX Design</h2>
                            <p>
                                Elevate your digital presence with our expert
                                UI/UX design services. We understand that user
                                experience is at the core of successful digital
                                products, and our team is dedicated to creating
                                intuitive and visually appealing designs that
                                resonate with your audience. From wireframes to
                                interactive prototypes, we meticulously craft
                                every element to ensure seamless navigation and
                                engaging interactions.
                            </p>
                            <p>
                                Our design philosophy revolves around marrying
                                aesthetics with functionality. We leverage the
                                latest design trends and technologies to deliver
                                solutions that not only look stunning but also
                                enhance the usability of your applications and
                                websites. Through user research and testing, we
                                fine-tune our designs, ensuring they align
                                perfectly with your users' needs and
                                preferences.
                            </p>
                            <p>
                                Whether you're launching a new product or
                                revamping an existing one, our UI/UX design
                                services are tailored to meet your specific
                                goals. We believe in creating digital
                                experiences that leave a lasting impression,
                                fostering user satisfaction and loyalty.
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <img
                                src='/image/Group 1521.png'
                                className='img-fluid'
                            />
                        </div>
                    </div>
                    <div className='row service-type-gap why-choose'>
                        <div className='col-md-6'>
                            <img
                                src='/image/Group 1538.png'
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-md-6'>
                            <h2>Development</h2>
                            <p>
                                Dive into the realm of cutting-edge development
                                with our expert team. We specialize in crafting
                                robust and scalable solutions that bring your
                                ideas to life. From back-end architecture to
                                front-end implementation, our development
                                process is meticulous and tailored to meet the
                                unique requirements of your project.
                            </p>
                            <p>
                                Leveraging the latest technologies and best
                                practices, we ensure that your applications and
                                websites are not just functional but also
                                future-proof. Our developers are skilled in a
                                variety of programming languages and frameworks,
                                allowing us to build custom solutions that align
                                seamlessly with your business objectives.
                            </p>
                            <p>
                                We understand that the digital landscape is
                                dynamic, and staying ahead requires constant
                                innovation. That's why our development approach
                                is agile and adaptive, allowing us to respond to
                                changing requirements and deliver solutions that
                                stand the test of time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='lets-start section-padding'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center w-100 service-heading py-1'>
                            Are You Ready To
                            <span className='highlight'>
                                Start A Business?
                            </span>{' '}
                        </h2>
                        <div
                            className='text-center w-100 service-heading py-1'
                            id='bottombutton'
                        >
                            <h5>
                                We will help you start your business from A to Z
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Service;
