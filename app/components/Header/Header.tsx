import React from 'react'

export function Header() {
    return (
        <header className="navbar navbar-expand-lg bg-white navbar-light container-fluid py-3 TESTposition-fixed ">
            <div className="container">
                <a className="navbar-brand" href="index.html">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav align-items-center justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link text-uppercase active px-3" aria-current="page"
                                    href="index.html">Početna</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase px-3" href="#services">Usluge</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase px-3" href="#about">O nama</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase px-3" href="#projects">Projekti</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase px-3" href="#cta">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}




{/* dodati uslov za prikaz broja telefona showPhone in header nav */}
{/* <div className="d-flex mt-5 mt-lg-0 ps-lg-3 align-items-center justify-content-center ">
<ul className="navbar-nav justify-content-end align-items-center">
    <li className="nav-item">
        <a className="nav-link px-3 phone-no" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none">
                <path
                    d="M18.3274 22.5001C17.4124 22.5001 16.1271 22.1691 14.2024 21.0938C11.862 19.7813 10.0516 18.5696 7.72383 16.2479C5.47946 14.0049 4.38727 12.5527 2.85868 9.77115C1.1318 6.63052 1.42618 4.98427 1.75524 4.28068C2.14712 3.43974 2.72555 2.93677 3.47321 2.43755C3.89787 2.15932 4.34727 1.92081 4.81571 1.72505C4.86258 1.7049 4.90618 1.68568 4.94508 1.66833C5.17712 1.5638 5.52868 1.40583 5.97399 1.57458C6.27118 1.68615 6.53649 1.91443 6.9518 2.32458C7.80352 3.16458 8.96743 5.03537 9.3968 5.95412C9.68508 6.57333 9.87587 6.98208 9.87633 7.44052C9.87633 7.97724 9.60633 8.39115 9.27868 8.83787C9.21727 8.92177 9.15633 9.00193 9.09727 9.07974C8.74055 9.54849 8.66227 9.68396 8.71383 9.92583C8.81837 10.4119 9.5979 11.859 10.879 13.1372C12.1601 14.4155 13.5654 15.1458 14.0534 15.2499C14.3056 15.3038 14.4438 15.2222 14.9276 14.8529C14.997 14.7999 15.0682 14.7451 15.1427 14.6902C15.6424 14.3185 16.0371 14.0555 16.5612 14.0555H16.564C17.0201 14.0555 17.4106 14.2533 18.0574 14.5796C18.9012 15.0052 20.8282 16.1541 21.6734 17.0068C22.0845 17.4211 22.3137 17.6855 22.4257 17.9822C22.5945 18.429 22.4356 18.7791 22.332 19.0135C22.3146 19.0524 22.2954 19.0951 22.2752 19.1424C22.0779 19.61 21.838 20.0585 21.5585 20.4821C21.0602 21.2274 20.5554 21.8044 19.7126 22.1968C19.2798 22.4015 18.8062 22.5052 18.3274 22.5001Z"
                    fill="#313131" />
            </svg>
            (+487) 384 9452
        </a>
    </li>
</ul> */}
{/* Dodati uslov ovde da vuce iz settingsa boolean: Show getInTouch in header nav */}
{/* <button type="button" className="btn btn-primary ms-md-3"> Get in touch </button>
</div> */}