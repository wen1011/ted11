import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { Menu, Layout } from 'antd'
const { Footer, Content } = Layout
function Navbar() {
    return (
        <div>
            {' '}
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <NavLink to="/">高雄旅遊首頁</NavLink>
                </Menu.Item>
                <Menu.Item key="tourList">
                    <NavLink to="/tour-list">景點列表</NavLink>
                </Menu.Item>
            </Menu>
            <Content>
                <Outlet />
            </Content>
            <Footer>
                <p>2022 © 六角學院 React 讀書會</p>
            </Footer>
        </div>
    )
}

export default Navbar
