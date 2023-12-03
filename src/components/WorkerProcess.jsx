const WorkerProcess = () => {
    return (
        <section
            className='work-process section-padding'
            style={{background: '#fff'}}
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='process-block'>
                            <img
                                src='/image/discussion.svg'
                                alt='Projec Discussion'
                            />
                            <h3>Project Discussion</h3>
                            <p>
                                Engage in collaborative discussions to
                                understand your project's unique requirements.
                            </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='process-block'>
                            <img
                                src='/image/web-design.svg'
                                alt='Design & Development'
                            />
                            <h3>Design &amp; Development</h3>
                            <p>
                                Bring your vision to life with our creative
                                design and development process.
                            </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='process-block'>
                            <img
                                src='/image/web-design2.svg'
                                alt='Final Delivery'
                            />
                            <h3>Final Delivery</h3>
                            <p>
                                Deliver exceptional results, ensuring your
                                project reaches its full potential.{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-5'>
                        <img
                            src='/image/meeting.jpg'
                            alt='Client discussion'
                            className='img img-fluid'
                        />
                    </div>
                    <div className='col-md-7 centralize'>
                        <div className='project-discussion '>
                            <h2>
                                Let’s Talk About{' '}
                                <span className='highlight'>
                                    <b>
                                        <i>Your Project</i>
                                    </b>
                                </span>{' '}
                            </h2>
                            <p>
                                Embark on a conversation about your project's
                                aspirations. We delve into your vision, crafting
                                solutions that resonate with excellence. Our
                                collaborative approach ensures every detail
                                aligns with your objectives, bringing your ideas
                                to life.
                            </p>
                            <p>
                                Discuss your goals, and let's transform ideas
                                into a successful reality.
                            </p>
                            <p>
                                Our experienced team is here to guide you
                                through the process, offering insights and
                                expertise. We thrive on turning challenges into
                                opportunities, ensuring your project reaches new
                                heights. Let's shape the future together!
                            </p>
                            <p />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkerProcess;
