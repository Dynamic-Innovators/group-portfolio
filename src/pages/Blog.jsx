import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Blog = () => {
    return (
        <>
            <section className='header contact-header'>
                <NavBar />
                <div className='container header-content '>
                    <div className='row h-100'>
                        <div className='col-md-6 centralize'>
                            <div className='left-content '>
                                <h2>
                                    Our <span className='highlight'>Blog</span>
                                </h2>
                                <p>Home / Blog</p>
                            </div>
                        </div>
                        <div className='col-md-6 centralize'>
                            <div className='right-content'>
                                <img src='/image/BLOGG.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Header End  */}
            {/* Latest Blog Star  */}
            <section className='latest-blog section-padding'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center w-100 service-heading'>
                            Latest:
                            <span className='highlight'>Blog</span>{' '}
                        </h2>
                    </div>
                </div>
                <div className='container mt-5 blog-container'>
                    <div className='row'>
                        <div className='col-md-4 centralize'>
                            <img
                                src='/image/figma.webp'
                                alt=''
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-md-8 centralize'>
                            <div className='blog-post'>
                                <div className='blog-category'>
                                    <p> UX Collectives </p>
                                </div>
                                <div className='blog-content'>
                                    <a href='/service_details'>
                                        <h2 className='blog-title'>
                                            {' '}
                                            A more holistic design workflow:
                                            gluing Jira, Figma, and Zeplin
                                            together
                                        </h2>
                                    </a>
                                    <p className='blog-exercpt'>
                                        Whether you are making coffee or
                                        painting a picture, the order of actions
                                        can be determined. In my opinion, it is
                                        the presence of a clear process that
                                        distinguishes a professional from a
                                        beginner: a professional knows exactly
                                        what to do (and in what order) to get
                                        the desired result, while a beginner is
                                        still learning and trying to understand
                                        it.{' '}
                                    </p>
                                </div>
                                <div className='blog-meta'>
                                    <h3>Sepeda Rafael</h3>
                                    <p className='date'>22, November 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 centralize'>
                            <img
                                src='/image/maj.webp'
                                alt=''
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-md-8 centralize mt-4'>
                            <div className='blog-post'>
                                <div className='blog-category'>
                                    <p>The bottom line </p>
                                </div>
                                <div className='blog-content'>
                                    <a href='/service_details'>
                                        <h2 className='blog-title'>
                                            {' '}
                                            Designer layoff stories
                                        </h2>
                                    </a>
                                    <p className='blog-exercpt'>
                                        We can’t just design our way out of the
                                        insidious digital environments we
                                        created over the past decade. A modal
                                        asking for cookie permissions or warning
                                        about potential risks is not stopping
                                        users anymore — we are way past this
                                        point. We made our digital products all
                                        too convenient, and the ubiquitous yet
                                        impenetrable legalese of user agreements
                                        has made people numb to risks.{' '}
                                    </p>
                                </div>
                                <div className='blog-meta'>
                                    <h3>Written by Ryan Ht</h3>
                                    <p className='date'>12, November 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 centralize'>
                            <img
                                src='/image/bar.webp'
                                alt=''
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-md-8 centralize mt-4'>
                            <div className='blog-post'>
                                <div className='blog-category'>
                                    <p>
                                        {' '}
                                        Being a high performer doesn’t save you{' '}
                                    </p>
                                </div>
                                <div className='blog-content'>
                                    <a href='/service_details'>
                                        <h2 className='blog-title'>
                                            {' '}
                                            Business contents insuranc is a type
                                            of business.
                                        </h2>
                                    </a>
                                    <p className='blog-exercpt'>
                                        Eva, a designer from Denmark, was a high
                                        performer for years at the company but
                                        still got the boot. She was disappointed
                                        by the lack of responsibility from the
                                        CEO: “The stock of the company where I
                                        worked dropped from around $130 per
                                        share to less than $30 in just five
                                        months. Yet, it’s the CEO of this
                                        company who gets to decide to ax 7% of
                                        its employees. Why doesn’t he carry some
                                        responsibility for the terrible results
                                        of the company? Why is he immune?”{' '}
                                    </p>
                                </div>
                                <div className='blog-meta'>
                                    <h3>Matej Latin</h3>
                                    <p className='date'>28, November 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 centralize'>
                            <img
                                src='/image/web.jpg'
                                alt=''
                                className='img-fluid'
                            />
                        </div>
                        <div className='col-md-8 centralize mt-4'>
                            <div className='blog-post'>
                                <div className='blog-category'>
                                    <p> X-height</p>
                                </div>
                                <div className='blog-content'>
                                    <a href='/service_details'>
                                        <h2 className='blog-title'>
                                            {' '}
                                            BEAUTIFUL WEB TYPOGRAPHY JUST GOT
                                            EASIER
                                        </h2>
                                    </a>
                                    <p className='blog-exercpt'>
                                        Larger x-height is generally considered
                                        to have a positive impact on legibility
                                        for small font sizes. This certainly
                                        applies to fonts for coding so x-height
                                        will be one of the major factors in my
                                        analysis. Fira Code’s x-height is what I
                                        would call “regular” (Fig 3). Not small,
                                        not large, somewhere in between. This is
                                        another property that makes it a good
                                        baseline to compare other fonts.{' '}
                                    </p>
                                </div>
                                <div className='blog-meta'>
                                    <h3>Matej Latin</h3>
                                    <p className='date'>25, November 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5 justify-content-center'>
                        <div className='col-md-6 d-flex justify-content-center'>
                            <div className='pagination'>
                                <ul>
                                    <li className='previous'>
                                        <a href='#'>
                                            <i className='fas fa-angle-left' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/blog-details'>01</a>
                                    </li>
                                    <li>
                                        <a href='/blog-details'>02</a>
                                    </li>
                                    <li className='next'>
                                        <a href='/blog-details'>
                                            {' '}
                                            <i className='fas fa-angle-right' />{' '}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <h2 className='text-center w-100 service-heading'>
                            Are You Ready To
                            <span className='highlight'>Start A Business?</span>
                        </h2>
                        <p className='sub-heading text-center w-100'>
                            We Will Help You To Your Business From A to Z.
                        </p>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 mt-3'>
                            <form action='' method='' id='newsletter-form'>
                                <div className='form-group d-flex justify-content-center'>
                                    <label htmlFor='client-mail' />
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='client-mail'
                                        name='client-mail'
                                        placeholder='Enter Your Email'
                                        required=''
                                    />
                                    <button type='submit'> Get Started </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Blog;
