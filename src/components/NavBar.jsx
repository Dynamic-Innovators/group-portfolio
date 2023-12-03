const NavBar = () => {
    return (
        <section className='header '>
            <div className='container header-nav'>
                <div className='row'>
                    <div className='col-md-12'>
                        <nav className='navbar navbar-expand-lg navbar-light bg-light main-menu fixed-top '>
                            <div className='container'>
                                <a href='/' className='navbar-brand'>
                                    <img
                                        src='/image/Logo.png'
                                        alt='Dynamic Innovators'
                                    />
                                </a>
                                <button
                                    className='navbar-toggler'
                                    data-toggle='collapse'
                                    data-target='#beeToggler'
                                >
                                    <span className='navbar-toggler-icon'>
                                        <i className='fa fa-bars' />
                                    </span>
                                </button>
                                <div
                                    className='collapse navbar-collapse'
                                    id='beeToggler'
                                >
                                    <ul className='navbar-nav ml-auto'>
                                        <li className='nav-item'>
                                            <a href='/' className='nav-link'>
                                                Home
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a
                                                href='/projects'
                                                className='nav-link'
                                            >
                                                Projects
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a
                                                href='/service'
                                                className='nav-link'
                                            >
                                                Service
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a
                                                href='/team'
                                                className='nav-link'
                                            >
                                                Team
                                            </a>
                                        </li>
                                        <li className='nav-item'>
                                            <a
                                                href='/blog'
                                                className='nav-link'
                                            >
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                    &nbsp;
                                    <li />
                                    <a href='/contact-us'>
                                        <button
                                            className='nav-button'
                                            style={{color: 'white'}}
                                        >
                                            Contact Us{' '}
                                            <i className='fas fa-angle-right' />{' '}
                                        </button>
                                    </a>
                                    &nbsp;
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;
