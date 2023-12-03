import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ServiceDetails = () => {
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
                                    <span className='highlight'>
                                        Service Details
                                    </span>
                                </h2>
                                <p>Home / Service Details</p>
                            </div>
                        </div>
                        <div className='col-md-6 centralize'>
                            <div className='right-content'>
                                <img src='/image/Group 1387.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='best-solutions'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center w-100 service-heading py-5'>
                            Best Solutions For
                            <span className='highlight'>
                                Your Business
                            </span>{' '}
                        </h2>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <img
                                src='/image/service_details_sample.png'
                                className='img-fluid'
                            />
                            <h4 className='great-websites text-center py-5'>
                                Innovative Solutions for Business Excellence
                            </h4>
                            <p>
                                Explore groundbreaking projects that redefine
                                business success. Our commitment to excellence
                                drives every endeavor, ensuring your business
                                stands out in the competitive landscape. Unleash
                                the power of creativity and technology with our
                                transformative solutions.
                            </p>
                            <p>
                                At the heart of our approach lies a dedication
                                to pushing boundaries and crafting digital
                                experiences that resonate. We believe in the
                                strategic fusion of design and functionality.
                            </p>
                            <ul className='feature'>
                                <li>
                                    Strategically designed for seamless user
                                    experiences on Desktop, Tablet, and Mobile.
                                </li>
                                <li>
                                    Elegantly crafted interfaces that set your
                                    brand apart in the digital landscape.
                                </li>
                                <li>
                                    Drive business success through expert
                                    application development and innovation.
                                </li>
                                <li>
                                    Efficient project management for timely and
                                    successful project deliveries.
                                </li>
                            </ul>
                            <p>
                                Elevate your business with designs that tell a
                                compelling story. Our commitment echoes through
                                every pixel, creating digital narratives that
                                leave a lasting impact. Experience the evolution
                                of design and technology with us.
                            </p>
                            <p>
                                Uncover the potential of your online presence,
                                as we embark on a journey to redefine success in
                                the digital era.
                            </p>
                        </div>
                        <div className='col-md-4'>
                            <h4 className='get-quote'>Get a Free Quote</h4>
                            <div className='mb-3'>
                                <input
                                    type='name'
                                    className='form-control'
                                    id='exampleFormControlInput1'
                                    placeholder='Your Name'
                                />
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleFormControlInput1'
                                    placeholder='Your Email'
                                />
                            </div>
                            <div className='mb-3'>
                                <select
                                    className='form-control'
                                    id='exampleFormControlSelect1'
                                    placeholder='Your Project'
                                >
                                    <option value='UI/UX'>UI/UX</option>
                                    <option value='App Development'>
                                        App Development
                                    </option>
                                    <option value='Project Management'>
                                        Project Management
                                    </option>
                                    <option value='Marketing'>Marketing</option>
                                    <option value='Website Optimization and Development'>
                                        Website Optimization and Development
                                    </option>
                                    <option value='Office Productivity'>
                                        Office Productivity
                                    </option>
                                </select>
                            </div>
                            <div className='mb-3'>
                                <textarea
                                    className='form-control py-5'
                                    id='exampleFormControlTextarea1'
                                    rows={3}
                                    placeholder='Your Message'
                                    defaultValue={''}
                                />
                                <button
                                    type='button'
                                    className='btn btn-primary btn-lg btn-block get-quote-button py-3'
                                >
                                    Submit Project Details{' '}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='work-process section-padding'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center w-100 service-heading py-5'>
                            Our Work
                            <span className='highlight'>Process</span>{' '}
                        </h2>
                    </div>
                </div>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='process-block'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img
                                            src='/image/discussion.svg'
                                            alt='Projec Discussion'
                                        />
                                        <h3>Project Discussion</h3>
                                        <p>
                                            Engage in collaborative discussions
                                            to understand your project's unique
                                            requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='process-block'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img
                                            src='/image/web-design.svg'
                                            alt='Design & Development'
                                        />
                                        <h3>Design &amp; Development</h3>
                                        <p>
                                            Bring your vision to life with our
                                            creative design and development
                                            process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='process-block'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <img
                                            src='/image/web-design2.svg'
                                            alt='Final Delivery'
                                        />
                                        <h3>Final Delivery</h3>
                                        <p>
                                            Deliver exceptional results,
                                            ensuring your project reaches its
                                            full potential.{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default ServiceDetails;
