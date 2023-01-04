import React from 'react'
import './User_information.css'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'

export default function User_Information() {
    const [fullname, setFullname] = React.useState()
    const [email, setEmail] = React.useState()
    const [birthday, setBirthday] = React.useState()
    const [gender, setGender] = React.useState()
    const [address, setAddress] = React.useState()
    const [phone, setPhone] = React.useState()
    const [change, setChange] = React.useState(false)
    return (
        <Container className='ms-3 pt-3 pb-3 inforContainer'>
            <div className={change ? 'd-none' : 'd-block'}>
                <Row className='ms-1 me-1 mb-2 mt-2'>
                    <Col className='d-flex justify-content-between'>
                        <h4 className='mb-3'>Thông tin cá nhân</h4>
                        <p className='back' onClick={() => setChange(true)}>Thay đổi</p>
                    </Col>

                </Row>
                <Row className='ms-1 me-1 mb-2 mt-2'>
                    <p>Họ tên: <span>Lê Văn Bằng</span></p>
                    <p>Email: <span>levanbang376@gmail.com</span></p>
                    <p>Ngày sinh: <span>25/11/2002</span></p>
                    <p>Giới tính: <span>Nam</span></p>
                    <p>Địa chỉ: <span>69 Lý Nam Đế, tổ dân phố 1, thị trấn Ea Knốp, huyện Ea Kar, tỉnh Đăk Lăk</span></p>
                    <p>Số điện thoại: <span>0368514720</span></p>
                </Row>
            </div>
            <div className={change ? 'd-block' : 'd-none'}>
                <Form>
                    <Row className='ms-1 me-1 mb-2 mt-2'>
                        <Col className='d-flex justify-content-between'>
                            <h4 className='mb-3'>Thay đổi thông tin cá nhân</h4>
                            <p className='back' onClick={() => setChange(false)}>Quay lại</p>
                        </Col>
                    </Row>
                    <Row className="ms-1 me-1 mb-2 mt-2">
                        <Form.Group as={Col} controlId="fullname">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={e => setFullname(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    {/* Mật khẩu mới*/}
                    <Row className="ms-1 me-1 mb-2 mt-2">
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    {/* Mật khẩu mới*/}
                    <Row className="ms-1 me-1 mb-2 mt-2">
                        <Form.Group as={Col} controlId="birthday">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                onChange={e => setBirthday(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="ms-1 me-1 mb-2 mt-2">
                        <label>Giới tính</label>
                        <Col>
                            <Form.Check
                                inline
                                label="Nam"
                                name="group1"
                                type="radio"
                            />
                            <Form.Check
                                inline
                                label="Nữ"
                                name="group1"
                                type="radio"
                            />
                        </Col>

                    </Row>

                    <Row className="ms-1 me-1 mb-2 mt-2">
                        <Form.Group as={Col} controlId="address">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={e => setAddress(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="ms-1 me-1 mb-2 mt-2">
                        <Form.Group as={Col} controlId="phone">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={e => setPhone(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='ms-1 me-1 mb-2 mt-2 pe-2 ps-2 justify-content-center'>
                        <Button className='mt-3' type="submit">Thay đổi</Button>
                    </Row>
                </Form>
            </div>
        </Container >
    )
}
