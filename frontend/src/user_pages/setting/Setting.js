import React from 'react'
import './Setting.css'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom'
import ChangePassword from '../change_password/Change_password';
import UserInformation from '../user_information/User_information';
export default function Setting() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
            <Row className="settingContainer">
                <Col sm={3}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='mt-3 ms-3 mb-3'>Cài đặt</h4>
                        <Link to="/" className='link'>Về trang chủ</Link>
                    </div>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="information">Thông tin cá nhân</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="password">Thay đổi mật khẩu</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={1}>
                    <div className='line'></div>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="information">
                            <UserInformation />
                        </Tab.Pane>
                        <Tab.Pane eventKey="password">
                            <ChangePassword />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
