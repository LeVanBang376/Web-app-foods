import React, { useState } from 'react'
import './Change_password.css'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import { Link, useNavigate } from 'react-router-dom'

export default function ChangePassword() {
    const [validated, setValidated] = useState(false);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [retypePassword, setRetypePassword] = useState();
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
        <Container className='ms-3 pt-3 pb-3 formContainer'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <h4 className='mb-3'>Thay đổi mật khẩu</h4>
                </Row>
                {/* Mật khẩu cũ */}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="oldPassword">
                        <Form.Label>Mật khẩu cũ</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onChange={e => setOldPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa nhập mật khẩu cũ
                        </Form.Control.Feedback>
                    </Form.Group>

                </Row>

                {/* Mật khẩu mới*/}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="newPassword">
                        <Form.Label>Mật khẩu mới</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onChange={e => setNewPassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa nhập mật khẩu mới
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                {/* Mật khẩu mới*/}
                <Row className="ms-1 me-1 mb-2 mt-2">
                    <Form.Group as={Col} controlId="retypePassword">
                        <Form.Label>Nhập lại mật khẩu</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            onChange={e => setRetypePassword(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Bạn chưa xác nhận mật khẩu
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className='ms-1 me-1 mb-2 mt-2 pe-2 ps-2 justify-content-center'>
                    <Button className='mt-3' type="submit">Thay đổi</Button>
                </Row>
            </Form>
        </Container >
    )
}
