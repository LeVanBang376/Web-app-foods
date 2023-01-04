import React from 'react'
import './Food_detail.css'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/Image'
export default function Food_detail() {
    return (
        <Container className='pt-5'>
            <p className='foodTitle'>Thịt kho tàu</p>
            <p className='mt-2 dateStyle'>Ngày đăng: 01/01/2023, bởi <span>Bằng đẹp trai</span></p>
            <Row className='justify-content-center'>
                <Col xl={6} lg={8}>
                    <p>Thịt kho tàu món ăn quen thuộc trong bữa cơm của người Việt. Đặc biệt là dịp Tết, Bài viết dưới đây
                        xin chia sẻ cùng các bạn bí quyết làm món thịt kho tàu ngon, hấp dẫn nhé.</p>
                    <p>Món thịt kho tàu ngon phải đảm bảo tiêu chuẩn có màu vàng bắt mắt, thịt đủ mềm, vị béo ngậy, thơm
                        ngon, đậm đà… ăn cùng cơm trắng rất tuyệt. Để đảm bảo tiêu chuẩn trên hãy làm đủ những thao tác
                        sau bạn nhé!</p>
                    <Image fluid src='https://cdn.tgdd.vn/Files/2019/10/08/1206351/muon-thit-kho-tau-ngon-hoan-hao-dung-bo-qua-5-bi-quyet-nay-202112110843234290.jpg' />
                </Col>
            </Row>
        </Container>
    )
}
