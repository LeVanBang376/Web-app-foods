import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import { IconContext } from "react-icons";
import { BsSearch, BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <Navbar className='backgroundColor' expand="lg">
            <Container fluid className='changeJustifyContent'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand className='brand' href="/home">Ăn gì đây</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/introduction">Giới thiệu</Nav.Link>
                        <Nav.Link href="/foods">Món ăn</Nav.Link>
                        <Nav.Link href="/contact">Liên hệ</Nav.Link>
                    </Nav>

                    {/* Search food  */}
                    <Row className="align-items-center me-3">
                        <InputGroup>
                            <Form.Control
                                placeholder="Tìm kiếm món ăn..."
                                aria-label="searchFoods"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                <BsSearch className='mb-1' />
                            </Button>
                        </InputGroup>
                    </Row>
                </Navbar.Collapse>

                <Row className=''>
                    <Col>
                        <Link className="linkCss ps-1 pe-1 login-mobile" to="/login">Đăng nhập</Link>
                        <IconContext.Provider value={{ className: "login-icon", size: 35 }}>
                            <>
                                <BsPersonCircle />
                            </>
                        </IconContext.Provider>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}
