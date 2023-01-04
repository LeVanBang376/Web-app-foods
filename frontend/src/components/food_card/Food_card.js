import React from 'react'
import './Food_card.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { useNavigate } from 'react-router-dom'
export default function Food_card(props) {
    const navigate = useNavigate()
    const handleClick = (obj) => {
        navigate(('/foods/' + String(props?.id)), obj)
    }

    return (
        <Container className='foodCardContainer' onClick={() => handleClick(props)}>
            <div className='imageContainer'>
                <img src='https://yummyday.vn/uploads/images/cach-lam-thit-heo-kho-tau.jpg' alt="hình ảnh thịt kho tàu" />
            </div>
            <div className='contentContainer'>
                <h4 className='mt-2 titleStyle'>Thịt kho tàu</h4>
                <p className='m-0 contentStyle'>Món thịt kho trứng (thịt kho tàu) là một trong những món ăn cực kỳ nổi tiếng
                    và cũng rất được người Việt Nam ưa chuộng. Ở nhiều vùng miền, món thịt kho trứng này còn xuất hiện hàng ngày
                    trong bữa cơm ngày tết như là một món ăn không thể thiếu. </p>
                <p className='mt-2 dateStyle'>Ngày đăng: 01/01/2023, bởi <span>Bằng đẹp trai</span></p>
            </div>
        </Container>
    )
}
