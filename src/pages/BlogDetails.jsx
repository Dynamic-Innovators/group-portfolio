import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const BlogDetails = () => {
    return (
        <>
            <section className='header '>
                <NavBar />
                <div className='container header-content '>
                    <div className='row '>
                        <div className='col-md-6 centralize'>
                            <div className='left-content '>
                                <h2>
                                    Blog{' '}
                                    <span className='highlight'>Details</span>
                                </h2>
                                Home / Blog Details
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='right-content'>
                                <img
                                    src='./asset/image/BLOGG.png'
                                    alt=''
                                    className='py-5'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='best-solutions'>
                <div
                    className='container'
                    style={{padding: '50px 0px 50px 0px'}}
                >
                    <div className='row'>
                        <div className='col-md-8 col-xs-12'>
                            <img
                                src='/image/DYNAMIC.png'
                                className='sample-image-service img-fluid'
                            />
                            <div className='blog-post'>
                                <div className='blog-category'>
                                    <p> UI/UX DESIGNER </p>
                                </div>
                                <h2 className='blog-title'>
                                    Innovative Design Solutions{' '}
                                </h2>
                                <p>
                                    Explore a world of innovative design
                                    solutions tailored to elevate your digital
                                    presence. From intuitive user interfaces to
                                    engaging user experiences, I am dedicated to
                                    pushing the boundaries of design. Each
                                    project is approached with meticulous
                                    attention to detail, ensuring a unique and
                                    visually stunning result that resonates with
                                    your target audience.
                                </p>
                                <h2 className='blog-title'>
                                    Crafting Memorable Experiences
                                </h2>
                                <p>
                                    Immerse yourself in the art of crafting
                                    memorable experiences that leave a lasting
                                    impact. My design philosophy centers on
                                    creating not just functional interfaces but
                                    emotional connections. By seamlessly
                                    integrating aesthetics and usability, I aim
                                    to transform your digital space into a
                                    captivating journey for users.
                                </p>
                                <p>
                                    Collaboration is at the heart of my process.
                                    I work closely with clients to understand
                                    their vision, goals, and brand identity.
                                    This collaborative approach ensures that
                                    each design element aligns perfectly with
                                    your objectives, fostering a cohesive and
                                    compelling user experience.
                                </p>
                                <p
                                    style={{background: '#bffff5'}}
                                    className='lead'
                                >
                                    {' '}
                                    Seamless Buisness Management Elevate your
                                    business operations with our comprehensive
                                    management solutions. From streamlined
                                    processes to efficient workflows, we are
                                    dedicated to providing a seamless experience
                                    that empowers your business to thrive in the
                                    digital era.
                                </p>
                                <p>
                                    In the ever-evolving landscape of technology
                                    and innovation, staying informed is key. Our
                                    blog is your gateway to the latest insights,
                                    trends, and strategies shaping the digital
                                    realm. Explore a diverse range of topics,
                                    from cutting-edge technologies to actionable
                                    business tips.
                                </p>
                                <p>
                                    We delve into the intricacies of UI/UX
                                    design, development methodologies, and the
                                    latest industry news. Whether you're a
                                    seasoned professional or just embarking on
                                    your digital journey, our blog offers
                                    valuable insights to keep you ahead of the
                                    curve. Join us as we navigate the dynamic
                                    world of technology, sharing knowledge and
                                    expertise to empower your success.
                                </p>
                                <h2>Comments(02)</h2>
                                <hr />
                                <div className='row centralize'>
                                    <div className='col-md-3'>
                                        <img
                                            src='/image/log.png'
                                            className='img-fluid'
                                            alt=''
                                        />
                                    </div>
                                    <div className='col-md-9 justify-content-center'>
                                        <h3>Phleo Delly</h3>
                                        <p>
                                            Great article! The insights shared
                                            here have been incredibly valuable
                                            for my work. Looking forward to more
                                            content like this.
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-2' />
                                    <div className='col-md-3'>
                                        <img
                                            src='/image/log1.png'
                                            className='img-fluid'
                                            alt=''
                                        />
                                    </div>
                                    <div className='col-md-7 justify-content-center'>
                                        <h3>Travis</h3>
                                        <p>
                                            This blog never disappoints! The
                                            content is not only informative but
                                            also presented in a way that's easy
                                            to understand. Keep up the great
                                            work!
                                        </p>
                                    </div>
                                </div>
                                <h2>Give a Reply</h2>
                                <div className='row' style={{marginTop: 20}}>
                                    <div className='col-md-6'>
                                        <div className='mb-3'>
                                            <input
                                                style={{background: '#bffffa'}}
                                                type='name'
                                                className='form-control'
                                                id='exampleFormControlInput1'
                                                placeholder='Your Name'
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <input
                                                style={{background: '#bffdff'}}
                                                type='email'
                                                className='form-control'
                                                id='exampleFormControlInput1'
                                                placeholder='Your Email'
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='mb-3'>
                                            <textarea
                                                style={{background: '#bffff9'}}
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
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-xs-12'>
                            <h2>Most Popular</h2>
                            <hr />
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img
                                            src='/image/bar.webp'
                                            className='img-thumbnail'
                                            alt=''
                                        />
                                    </div>
                                    <div className='col-md-9'>
                                        <p>
                                            Discover the latest trends in bar
                                            design and how it influences
                                            customer experiences. From modern
                                            aesthetics to functional layouts, we
                                            explore the key elements that make a
                                            bar stand out.
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img
                                            src='/image/Blog.png'
                                            className='img-thumbnail'
                                            alt=''
                                        />
                                    </div>
                                    <div className='col-md-9'>
                                        <p>
                                            Explore our featured blog post on
                                            industry insights and best
                                            practices. Stay informed about the
                                            ever-changing landscape of
                                            technology, design, and business
                                            strategies.
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img
                                            src='/image/service_details_sample.png'
                                            className='img-thumbnail'
                                            alt=''
                                        />
                                    </div>
                                    <div className='col-md-9'>
                                        <p>
                                            Dive into our service details to
                                            learn more about how we tailor
                                            solutions to meet your business
                                            needs. From design concepts to
                                            project delivery, discover the
                                            excellence that defines our
                                            services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container' style={{paddingTop: 30}}>
                            <h2>Catagories</h2>
                            <hr />
                            <div className='row'>
                                <div className='col-md-6'>
                                    <p>UI/UX DESIGN</p>
                                </div>
                                <div className='col-md-6'>07 ARTICLES</div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    Buisness Analytics
                                </div>
                                <div className='col-md-6'>07 ARTICLES</div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>WEB DESIGNER</div>
                                <div className='col-md-6'>07 ARTICLES</div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>E-commerce</div>
                                <div className='col-md-6'>07 ARTICLES</div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>App Development</div>
                                <div className='col-md-6'>08 ARTICLES</div>
                            </div>
                        </div>
                        <div className='container'>
                            <h2>Popular Tags</h2>
                            <hr />
                            <div className='row' style={{marginTop: 20}}>
                                <div className='col-md-6'>
                                    <button className='btn btn-outline-secondary mt-md-4'>
                                        UI/UX DESIGN
                                    </button>
                                </div>
                                <div className='col-md-6'>
                                    <button className='btn btn-outline-secondary'>
                                        WEB DEVELOPMENT
                                    </button>
                                </div>
                            </div>
                            <div className='row' style={{marginTop: 20}}>
                                <div className='col-md-7'>
                                    {' '}
                                    <button className='btn btn-outline-secondary '>
                                        CONTENT WRITER{' '}
                                    </button>
                                </div>
                                <div className='col-md-5'>
                                    {' '}
                                    <button className='btn btn-outline-secondary'>
                                        E-commerce
                                    </button>
                                </div>
                            </div>
                            <div className='row' style={{marginTop: 20}}>
                                <div className='col-md-6'>
                                    <button className='btn btn-outline-secondary'>
                                        Buisness
                                    </button>
                                </div>
                                <div className='col-md-6'>
                                    <button className='btn btn-outline-secondary'>
                                        APP DEVELOPMENT
                                    </button>
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

export default BlogDetails;
