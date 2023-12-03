const Portfolio = () => {
    return (
        <section className='partners section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='text-center partner-heading'>
                            Business Partner Trustees
                            <span className='highlight'>
                                {' '}
                                We have as clients.
                            </span>
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
    );
};

export default Portfolio;
