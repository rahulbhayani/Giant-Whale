import React, { Fragment } from 'react'
import CompanyLogo from '../assets/img/CompanyLogo.png'
import UserPhoto from '../assets/img/blank_profilepicture.png'

function HeaderBar(props) {
    function signOut() {
        localStorage.removeItem('token');
        props.handleLogin(false);
    }
    
    let isLoggedIn = true; //localStorage.getItem('token') ? true : false;

    return(
        <Fragment>
            {isLoggedIn ? 
            (<>
                {/* <!-- ======= Header ======= --> */}
                <header id="header" class="header fixed-top d-flex align-items-center">

                    <div class="d-flex align-items-center justify-content-between">
                    <a href="/home" class="logo d-flex align-items-center">
                        <img src={CompanyLogo} alt="" />
                    </a>
                    <i class="bi bi-list toggle-sidebar-btn"></i>
                    </div> {/* <!-- End Logo --> */}

                    <nav class="header-nav ms-auto">
                    <ul class="d-flex align-items-center">

                        <li class="nav-item dropdown pe-3">

                        <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <img src={UserPhoto} alt="Profile" class="rounded-circle"/>
                            <span class="d-none d-md-block dropdown-toggle ps-2">Rahul Bhayani</span>
                        </a>{/* <!-- End Profile Iamge Icon --> */}

                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li class="dropdown-header">
                            <h6>Rahul Bhayani</h6>
                            <span>Web Developer</span>
                            </li>
                            <li>
                            <hr class="dropdown-divider"/>
                            </li>

                            <li>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <i class="bi bi-person"></i>
                                <span>My Profile</span>
                            </a>
                            </li>
                            <li>
                            <hr class="dropdown-divider"/>
                            </li>

                            <li>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <i class="bi bi-gear"></i>
                                <span>Account Settings</span>
                            </a>
                            </li>
                            <li>
                            <hr class="dropdown-divider"/>
                            </li>

                            <li>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <i class="bi bi-question-circle"></i>
                                <span>Need Help?</span>
                            </a>
                            </li>
                            <li>
                            <hr class="dropdown-divider"/>
                            </li>

                            <li>
                            <a class="dropdown-item d-flex align-items-center" href="/home">
                                <i class="bi bi-box-arrow-right"></i>
                                <span onClick={signOut}>Sign Out</span>
                            </a>
                            </li>

                        </ul>{/* <!-- End Profile Dropdown Items --> */}
                        </li>{/* <!-- End Profile Nav --> */}

                    </ul>
                    </nav>{/* <!-- End Icons Navigation --> */}

                </header>{/* <!-- End Header --> */}
            </>):
            (<></>)
            }
        </Fragment>

  )
}

export default HeaderBar