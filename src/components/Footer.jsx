const Footer = () => {
    return (
        <section className='footer section-padding'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-3'>
                        <div className='footer-widget-1 text-center'>
                            <img src='/image/footer.png' alt='' />
                            <p>
                                Welcome to Dynamic Innovators, where creativity
                                meets innovation.
                            </p>
                        </div>
                    </div>

                    <div className='col-md-3 mx-auto'>
                        <div className='footer-widget-4 text-center'>
                            <h3>contact Us</h3>
                            <p>
                                dynamicinnovators32@gmail.com <br /> Accra,Ghana
                            </p>
                            <ul>
                                <li>
                                    <a href='#'>
                                        <i className='fab fa-linkedin' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i className='fab fa-google' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i className='fab fa-whatsapp' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i className='fab fa-github' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className='row'
                    style={{
                        borderTop: '1px solid #ddd',
                        paddingTop: 10,
                        textAlign: 'center',
                    }}
                >
                    <div className='col-md-12'>
                        <div className='copyright-text'>
                            <p>
                                Copyright © 2023 Dynamic Innovators, All Rights
                                Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
