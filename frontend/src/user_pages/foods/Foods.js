import React from 'react'
import './Foods.css'

import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Food_card from '../../components/food_card/Food_card'
export default function Foods() {
    return (
        <Container className='foodsContainer'>
            <Row>
                <Col lg={4} md={6} >
                    <Food_card id='1' />
                </Col>
                <Col lg={4} md={6} >
                    <Food_card id='2' />
                </Col>
                <Col lg={4} md={6} >
                    <Food_card id='3' />
                </Col>
                <Col lg={4} md={6} >
                    <Food_card id='4' />
                </Col>
            </Row>
        </Container>

    )
}
