import React, {useState, useEffect} from 'react';

import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { useDispatch,  useSelector} from "react-redux";
import { login,  videErrors} from "../../Redux/actions/teacher";
import Errors from "../../Components/Errors/Error";
import "./Login.css";



const Logint = ({history}) => {
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
        
           <Container>
            <Row style={{ marginTop: '50px'}}>
                <Col md={{span : 6, offset : 3}}>
                {errors.length > 0
                    ? errors.map((el) => <Errors error={el} />)
                    : null}
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email"  onChange={handleChange}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password"  onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleLogin}>
                            Submit
                       </Button>
                    </Form>

                </Col>
            </Row>

        </Container>
    )
}

export default Logint

