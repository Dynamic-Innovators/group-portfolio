const Header = () => {
    return (
        <div className='container header-content head-page '>
            <div className='row '>
                <div className='col-md-6 centralize'>
                    <div className='left-content '>
                        <h1>
                            <b>DYNAMIC INNOVATORS</b>
                        </h1>
                        <h2>
                            <i>
                                Ignite{' '}
                                <span className='highlight'>Innovation</span>{' '}
                                for Business Success
                            </i>
                        </h2>
                        <p>
                            Join us on a dynamic journey of creativity and
                            excellence. Together, we'll shape the future of your
                            success.
                        </p>
                        <p />
                        <div className='call-to-action'>
                            <button style={{color: 'white'}}>
                                Work With Us{' '}
                                <i className='fas fa-angle-right' />
                            </button>
                            <a href='./project.html'>
                                View Our Portfolio{' '}
                                <i className='fas fa-angle-right' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='right-content'>
                        <img src='/image/home.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
