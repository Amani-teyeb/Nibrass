import React, {useState, useEffect} from 'react';

import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux";
import { login, videErrors} from "../../Redux/actions/user";
import Errors from "../../Components/Errors/Error";
import "../Signup/Signup.css";
import { Link } from "react-router-dom";


const Login = ({history}) => {
    const [user, setUser] = useState({});
    const errors = useSelector((state) => state.userReducer.errors);
    const dispatch = useDispatch();
    const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
    e.preventDefault();
      dispatch(login(user, history));
    };
    
    useEffect(() => {
        return () => {
          dispatch(videErrors());
        };
      }, []);

    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 border-0 px-4 py-1">
                <img src="data:image/jpeg;base64,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" className="image" />{" "}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5 mt-3 ">
                <div className="row mb-4 px-3">
                  <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                  <div className="facebook text-center mr-3">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <div className="twitter text-center mr-3">
                    <i class="fab fa-twitter"></i>
                  </div>
                  <div className="linkedin text-center mr-3">
                    <i class="fab fa-linkedin"></i>
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" />{" "}
                  <small className="or text-center">Or</small>
                  <div className="line" />
                </div>
  
                <div className="row px-3">
                  {" "}
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label>{" "}
                  <input
                    className="mb-4"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter a valid email address"
                  />{" "}
                </div>
  
                <div className="row px-3">
                  {" "}
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label>{" "}
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter password"
                  />{" "}
                </div>
                <div className="row mb-3 px-3">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-blue text-center"
                    onClick={handleLogin}
                  >
                    SignIn
                  </button>{" "}
                </div>
                <div className="row mb-4 px-3">
                  {" "}
                  <small className="font-weight-bold">
                    Don't have an account?{" "}
                    <a className="text-danger ">
                      <Link to="/signup">Register</Link>{" "}
                    </a>
                  </small>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        //    <Container signup-container>
        //     <Row style={{ marginTop: '50px'}}>
        //         <Col md={{span : 6, offset : 3}}>
        //         {/* {errors.length > 0
        //             ? errors.map((el) => <Errors error={el} />)
        //             : null} */}
        //             <Form>
        //                 <Form.Group controlId="formBasicEmail">
        //                     <Form.Label>Email address</Form.Label>
        //                     <Form.Control type="email" name="email" placeholder="Enter email"  onChange={handleChange}/>
        //                     <Form.Text className="text-muted">
        //                         We'll never share your email with anyone else.
        //                     </Form.Text>
        //                 </Form.Group>

        //                 <Form.Group controlId="formBasicPassword">
        //                     <Form.Label>Password</Form.Label>
        //                     <Form.Control type="password" name="password" placeholder="Password"  onChange={handleChange}/>
        //                 </Form.Group>
        //                 <Form.Group controlId="formBasicCheckbox">
        //                     <Form.Check type="checkbox" label="Check me out" />
        //                 </Form.Group>
        //                 <Button variant="primary" type="submit" onClick={handleLogin}>
        //                     Submit
        //                </Button>
        //             </Form>

        //         </Col>
        //     </Row>

        // </Container>
    )
}

export default Login
