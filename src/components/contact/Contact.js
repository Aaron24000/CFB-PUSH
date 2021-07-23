const Contact = () => {
    return (
        <section id="contact" className="text-center p-5 bg-dark text-white">
            <div className="container">
            <h1 className="mb-4">Check Me Out On Social Media!</h1>
                <div className="row">
                    <div className="col-md-4">
                    <a style={{ color: 'inherit'}} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aaronlnobles/"><i class="fab fa-linkedin fa-3x mb-2"></i></a>
                    </div>
                    <div className="col-md-4">
                    <a style={{ color: 'inherit'}} target="_blank" rel="noreferrer" href="https://github.com/Aaron24000"><i class="fab fa-github fa-3x mb-2"></i></a>
                    </div>
                    <div className="col-md-4">
                    <a style={{ color: 'inherit'}} target="_blank" rel="noreferrer" href="http://www.aaronnobles.com/"><i class="fas fa-globe fa-3x mb-2"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;