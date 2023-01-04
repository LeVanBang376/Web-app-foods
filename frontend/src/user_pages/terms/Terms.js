import React from 'react'
import './Terms.css'

import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
export default function Terms() {
    return (
        <Container className='termsContainer'>
            <h2 className='text-center mb-3'>Điều khoản</h2>
            <ol>
                <strong>
                    <li>Bản quyền</li>
                </strong>
                <p>Trang web này thuộc quyền sở hữu của Lê Văn Bằng, không ăn cắp dưới mọi hình thức</p>
                <strong>
                    <li>Cookie</li>
                </strong>
                <p>Cookie chỉ lưu trữ thông tin như các lần đăng nhập để chúng tôi có thể phát triển web tốt hơn,
                    ngoài ra còn lưu trữ thông tin đăng nhập để lần đăng nhập sau nhanh hơn
                </p>
            </ol>
            <hr className='ms-3 mt-5' />
            <p className='text-center ms-2'>Đã đọc và đồng ý với các điều khoản?
                <Link className='decorationNone2 ms-1 me-1' to="/signup">Đăng ký</Link>
                tiếp thôi!
            </p>
        </Container >
    )
}
