import React from 'react'
import './Footer.css'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { IconContext } from "react-icons";
import { BsTelephone, BsFillEnvelopeFill } from 'react-icons/bs'
export default function Footer() {
    return (
        <Container fluid className='footerContainer p-4'>
            <Row>
                <Col xl={3} lg={4} sm={6} className="mb-3">
                    <h4>Chức năng của trang Web</h4>
                    <p className='mt-1 mb-1'>Cung cấp các món ăn ngon</p>
                    <p className='mt-1 mb-1'>Cung cấp công thức nấu ăn</p>
                    <p className='mt-1 mb-1'>Bình luận các món ăn</p>
                </Col>
                <Col xl={3} lg={4} sm={6} className="mb-3">
                    <h4>Cơ cấu tổ chức</h4>
                    <p className='mt-1 mb-1'>Người chịu trách nhiệm: <b>Lê Văn Bằng - chủ trang Web</b></p>
                    <p className='mt-1 mb-1'>Hỗ trợ kỹ thuật: <b>0368514720</b></p>
                </Col>
                <Col xl={3} lg={4} sm={6} className="mb-3">
                    <h4>Về Ăn gì đây</h4>
                    <p>Ăn gì đây được thành lập với mục đích thực hành 1 dự án đầu tay của mình - Lê Văn Bằng. Mỗi bữa ăn ngon
                        sẽ đem lại niềm vui cho chúng ta, đó là lí do mà mình thực hiện dự án về chủ đề món ăn.
                    </p>
                </Col>
                <Col xl={3} lg={4} sm={6} className="mb-3">
                    <h4>Liên hệ</h4>
                    <div className='d-flex align-items-center mb-3'>
                        <IconContext.Provider value={{ size: 35 }}>
                            <>
                                <BsTelephone />
                            </>
                        </IconContext.Provider>
                        <div className='ms-3'>
                            <p className='m-0 small'>Thứ 2 - Chủ nhật 9:00 AM - 11:00 PM</p>
                            <p className='m-0'>0368514720</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <IconContext.Provider value={{ size: 35 }}>
                            <>
                                <BsFillEnvelopeFill />
                            </>
                        </IconContext.Provider>
                        <div className='ms-3'>
                            <p className='m-0'>levanbang376@gmail.com</p>
                            <p className='m-0'>bang.lentmd@hcmut.edu.vn</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <p className='m-0'>Copyright 2023-2023</p>
            </Row>
        </Container>
    )
}
