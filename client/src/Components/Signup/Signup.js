import React, {useState, useEffect} from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector} from "react-redux";
import { register, videErrors } from "../../Redux/actions/user";
import Errors from "../Errors/Error"


const Signup = ({ history }) => {
        const [user, setUser] = useState({});
        const errors = useSelector((state) => state.userReducer.errors);
        const dispatch = useDispatch();
      
        const handleRegister = (e) => {
          e.preventDefault();
          dispatch(register(user, history));
        };
      
        const handleChange = (e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        };

        useEffect(() => {
            return () => {
              dispatch(videErrors());
            };
          }, []);

    return (
        
             <Container className="cont">
        <Row style={{ marginTop: '50px'}}>
            <Col md={{span : 6, offset : 3}}>
            {errors!= undefined && errors.length > 0
                    ? errors.map((el) => <Errors error={el} />)
                    : null} 
                <Form>
                    <Row>
                        <Col md={6}>     
                         <Form.Group controlId="formBasicPassword">
                           <Form.Label>First Name</Form.Label>
                           <Form.Control type="text" name="Firstname" placeholder="Enter your first name" onChange={handleChange} />
                        </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group controlId="formBasicPassword">
                           <Form.Label>Last Name</Form.Label>
                           <Form.Control type="text" name="Lastname" placeholder="Enter your Last name" onChange={handleChange} />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit"  onClick={handleRegister}>
                        Submit
                   </Button>
                </Form>

            </Col>
        </Row>

    </Container>

       
    )
}

export default Signup
