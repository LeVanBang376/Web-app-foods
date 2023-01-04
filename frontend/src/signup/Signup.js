import React, { useState } from 'react'
import './Signup.css'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
export default function Signup() {
    const [validated, setValidated] = useState(false);

    const [fullname, setFullname] = useState()
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [retypePassword, setRetypePassword] = useState()

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log(validated)
        setValidated(true);
    };

    return (
        <Container className='signupContainer'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h2 className='text-center mb-3'>Đăng ký tài khoản</h2>

                {/* Họ tên */}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="fullname">
                        <Form.Label>Họ và tên (*)</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={e => setFullname(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa nhập họ và tên
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* Email */}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email (*)</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa nhập email
                        </Form.Control.Feedback>
                        <Form.Text id="emailHelpBlock" muted>
                            Email phải có định dạng 'sth@sth.sth'
                        </Form.Text>
                    </Form.Group>
                </Row>

                {/* Tên đăng nhập */}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="username">
                        <Form.Label>Tên đăng nhập (*)</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa nhập tên tài khoản
                        </Form.Control.Feedback>
                        <Form.Text id="usernameHelpBlock" muted>
                            Tên tài khoản phải có ít nhất 8 kí tự
                        </Form.Text>
                    </Form.Group>
                </Row>

                {/* Mật khẩu */}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Mật khẩu (*)</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa nhập mật khẩu
                        </Form.Control.Feedback>
                        <Form.Text id="passwordHelpBlock" muted>
                            Mật khẩu phải có ít nhất 6 kí tự
                        </Form.Text>
                    </Form.Group>
                </Row>

                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="retypePassword">
                        <Form.Label>Nhập lại mật khẩu (*)</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onChange={e => setRetypePassword(e.target.value)}
                            isValid={retypePassword && (retypePassword === password)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Mật khẩu xác nhận phải giống với mật khẩu bên trên
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="ms-3 me-1 mb-2 mt-2">
                    <Form.Check
                        required
                        name="term"
                        label={
                            <span>
                                Tôi đồng ý với các
                                <Link className='ms-1' to="/terms">điều khoản</Link>
                            </span>
                        }
                        type="checkbox"
                        feedback="Bạn phải đồng ý với các điều khoản mới có thể đăng ký"
                        feedbackType='invalid'
                    />
                </Row>

                <Row className='ms-1 me-1 mb-2 mt-2 pe-2 ps-2 justify-content-center'>
                    <Button className='mt-3' type="submit">Đăng ký</Button>
                </Row>

                <p className='text-center mt-5'>Đã có tài khoản?
                    <Link className='decorationNone2 ms-1' to="/signin">Đăng nhập ngay</Link>
                </p>
            </Form>
        </Container >
    )
}
