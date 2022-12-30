import React from 'react'
import './Signin.css'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
export default function Signin() {
    return (
        <Container className='formContainer'>
            <Form>
                {/* Tên đăng nhập */}
                <Row className="ms-1 me-1 mb-2">
                    <Form.Group as={Col} controlId="username">
                        <Form.Label>Tên đăng nhập</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Tên đăng nhập"
                        />
                    </Form.Group>
                </Row>

                {/* Mật khẩu */}
                <Row className="ms-1 me-1 mb-2">
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Group>
                </Row>
                <Button className='mt-3 ms-3 me-1' type="submit">Đăng nhập</Button>
            </Form>
        </Container>


    )
}
