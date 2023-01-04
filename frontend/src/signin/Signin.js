import React, { useState } from 'react'
import './Signin.css'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import { Link, useNavigate } from 'react-router-dom'

export default function Signin() {
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            navigate("/")
        }
        setValidated(true);
    };

    return (
        <Container className='signinContainer'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h1 className='text-center'>Welcome</h1>
                <h2 className='text-center orangered'>Ăn gì đây?</h2>
                {/* Tên đăng nhập */}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="username">
                        <Form.Label>Tên đăng nhập</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa nhập tên tài khoản
                        </Form.Control.Feedback>
                    </Form.Group>

                </Row>

                {/* Mật khẩu */}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa nhập mật khẩu
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Col >
                        <Link className='decorationNone1'>Quên mật khẩu?</Link>
                    </Col>
                </Row>

                <Row className='ms-1 me-1 mb-2 mt-2 pe-2 ps-2 justify-content-center'>
                    <Button className='mt-3' type="submit">Đăng nhập</Button>
                </Row>

                <p className='text-center mt-5'>Chưa có tài khoản?
                    <Link className='decorationNone2 ms-1' to="/signup">Đăng ký ngay</Link>
                </p>
            </Form>
        </Container >
    )
}
