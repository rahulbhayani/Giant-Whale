import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";

import CompanyLogo from '../assets/img/CompanyLogo.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logindata = { email, password };
  const history = useHistory("");

  const handleLogin = () => {
    if (!email || !password) {
      //return toast.warning("Fill the details");
    } else {
      
      axios.post("http://localhost:5050/login", logindata).then((result) => {
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
          // console.log(result);
          history.push({
            pathname: "/Home",
            state: result.data.email,
          });
          toast.success("Success Login");
        } else {
          toast.error("invalid credential");
        }
      });
    }
  };
  return (

    <main>
      <div class="container">

        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                <div class="d-flex justify-content-center py-4">
                  <a href="#" class="logo d-flex align-items-center w-auto">
                    <img src={CompanyLogo} alt=""/>
                    {/* <span class="d-none d-lg-block">NiceAdmin</span> */}
                  </a>
                </div> {/* <!-- End Logo --> */}

                <div class="card mb-3">

                  <div class="card-body">

                    <div class="pt-2 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p class="text-center small">Enter your username & password to login</p>
                    </div>

                    <form class="row g-3 needs-validation" novalidate>

                      <div class="col-12">
                        <label for="yourUsername" class="form-label">Username</label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" class="form-control" id="yourUsername" 
                                  onChange={(e) => {setEmail(e.target.value); }} required/>
                          <div class="invalid-feedback">Please enter your username.</div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">Password</label>
                        <input type="password" name="passwword" class="form-control" id="yourPassword"
                                onChange={(e) => {setPassword(e.target.value); }} required/>
                        <div class="invalid-feedback">Please enter your password!</div>
                      </div>

                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                          <label class="form-check-label" for="rememberMe">Remember me</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-primary w-100" onClick={() => handleLogin()}>Login</button>
                      </div>
                      <div class="col-12">
                        <p class="small mb-0">Don't have account? <a href="/signup">Create an account</a></p>
                      </div>
                    </form>

                  </div>
                </div>

                <div class="credits">
                  {/* <!-- All the links in the footer should remain intact. -->
                  <!-- You can delete the links only if you purchased the pro version. -->
                  <!-- Licensing information: https://bootstrapmade.com/license/ -->
                  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> */}
                  Designed by Rahul Bhayani
                </div>

              </div>
            </div>
          </div>

        </section>

        </div>
    </main>
    
    
  );
};

export default Login;
