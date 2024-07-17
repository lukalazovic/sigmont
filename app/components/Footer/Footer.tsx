import React from 'react'

export function Footer() {
    return (
        <footer className='border-top'>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 ">
                    <div className="col-md-4 mt-5 mt-md-0 ">
                        {/* <img src="images/main-logo.png" alt="image" className="my-3"> */}
                        <p>Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc vitae aliquam vestibulum.</p>
                    </div>

                    <div className="col-md-2 offset-md-1">
                        <h5 className="py-3">Nase usluge</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Roof replacement</a>
                            </li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Damage repairs </a>
                            </li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Roof repair</a>
                            </li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Roof Solar System</a>
                            </li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Roof coating</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 ">
                        <h5 className="py-3">Brzi linkovi</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Our locations </a>
                            </li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> About us </a>
                            </li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Our gallery </a>
                            </li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Privacy Policy</a></li>
                            <li className="nav-item mb-3"><a href="#" className="nav-link fw-normal p-0 "> Contact us </a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 ">
                        <h5 className="py-3">Kontakt</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item d-flex mb-3">
                                <a href="#" className="nav-link p-0 "> 163 Elm Drive, NYC, USA </a>
                            </li>
                            <li className="nav-item d-flex mb-3">
                                <a href="#" className="nav-link p-0 "> (+089) 234-516-6123 </a>
                            </li>
                            <li className="nav-item d-flex mb-3">
                                <a href="#" className="nav-link p-0 "> info@yourdomain.com </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-top" />

            <div className="container">
                <div className="d-flex align-items-center justify-content-center py-2 pt-4">
                    <p>© 2024 Sigmontt - Sva prava zadrzana</p>
                </div>
            </div>
        </footer>
    )
}

