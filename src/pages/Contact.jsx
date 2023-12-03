import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Contact = () => {
    return (
        <>
            <section className='header contact-header'>
                {/* Header Navigation Start  */}
                <NavBar />
                {/* Header Navigation End  */}
                {/* Header Banner Start  */}
                <div className='container header-content '>
                    <div className='row h-100'>
                        <div className='col-md-6 centralize'>
                            <div className='left-content '>
                                <h2>
                                    Our{' '}
                                    <span className='highlight'>Contacts</span>
                                </h2>
                                <p>Home / Contact Us</p>
                            </div>
                        </div>
                        <div className='col-md-6 centralize'>
                            <div className='right-content'>
                                <img src='/image/contact.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Header End  */}
            {/* Company Offices Start  */}
            <section className='offices section-padding'>
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center w-100 service-heading'>
                            We Provide a Platform To Easily
                            <span className='highlight'>
                                Build your project
                            </span>{' '}
                        </h2>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='office-block'>
                                <h3>Phleo Delly</h3>
                                <p>
                                    Phone: +233593125279
                                    <br />
                                    Email: felixashong4@gmail.com
                                    <br />
                                    Accra-Ghana
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='office-block'>
                                <h3>Daniel Ayessu</h3>
                                <p>
                                    Phone: +233554989558
                                    <br />
                                    Email: ayessu@gmail.com
                                    <br /> Dansoman
                                </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='office-block'>
                                <h3>Flowify Hacks</h3>
                                <p>
                                    Phone: +233505305325
                                    <br />
                                    Email: flowifyhack@gmail.com
                                    <br />
                                    Legon,Accra
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Company Offices End  */}
            {/* Project Contact Start  */}
            <section className='project-contact section-padding'>
                <div className='container'>
                    {/* Toast  */}
                    {/*?= $success; ?*/}
                    <div className='row mt-5'>
                        <h2 className='text-center w-100 service-heading'>
                            Tell Us About Your Project
                        </h2>
                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form action='' method='post' id='project-details'>
                                <div className='form-group'>
                                    <label htmlFor='name' />
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='name'
                                        name='name'
                                        placeholder='Your Name'
                                        required=''
                                    />
                                    {/*placing icon using a span element*/}
                                    <span className='icon fa fa-user fa-lg' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='email' />
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        placeholder='Your E-mail'
                                        required=''
                                    />
                                    <span className='icon fa fa-envelope fa-lg' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='project-type' />
                                    <select
                                        id='project-type'
                                        name='project-type'
                                    >
                                        <option> Select Project Type</option>
                                        <option value='website_optimization'>
                                            Website Optimization
                                        </option>
                                        <option value='social_media_marketing'>
                                            Social Media Marketing
                                        </option>
                                        <option value='ui/ux'>UI/UX</option>
                                        <option value='graphics'>
                                            Graphics
                                        </option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <textarea
                                        rows={5}
                                        cols={30}
                                        id='msg'
                                        name='msg'
                                        placeholder='Message'
                                        style={{width: '100%'}}
                                        defaultValue={''}
                                    />
                                    <span className='icon-textarea fa fa-edit fa-lg ' />
                                </div>
                                <div className=' text-center'>
                                    <input
                                        type='submit'
                                        name='submit'
                                        defaultValue='Submit'
                                        className='btn btn-default'
                                    />
                                    {/* <button type="submit" class="btn btn-default">Submit Project Details <i class="fas fa-angle-right"></i> </button> */}
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6 centralize'>
                            <div className='contact-image'>
                                <img
                                    src='/image/Group 4408.png'
                                    alt=''
                                    className='img-fluid ml-5'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Project Contact End  */}
            {/* Partner Start  */}
            <section className='partners section-padding'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='text-center partner-heading'>
                                Business Partner Trusted
                            </h2>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-3 col-md-6 d-flex justify-content-center'>
                            <div className='partner'>
                                <img
                                    src='/image/A (3).png'
                                    alt=''
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 d-flex justify-content-center'>
                            <div className='partner'>
                                <img
                                    src='/image/A (4).png'
                                    alt=''
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 d-flex justify-content-center'>
                            <div className='partner'>
                                <img
                                    src='/image/A (2).png'
                                    alt=''
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 d-flex justify-content-center'>
                            <div className='partner'>
                                <img
                                    src='/image/A (1).png'
                                    alt=''
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Partner End  */}
            <Footer />
        </>
    );
};

export default Contact;
