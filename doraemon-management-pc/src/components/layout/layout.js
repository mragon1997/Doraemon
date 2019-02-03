import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import './layout.css'

import { Layout, Menu, Icon } from 'antd'

import Todo from '../../pages/todo/todo.js'
import Dashboard from '../../pages/dashboard/dashboard.js'

const { Header, Sider, Content } = Layout

class IndexLayout extends Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="user" />
                  <span>主面板</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/todo">
                  <Icon type="ordered-list" />
                  <span>待办事项</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon type="bars" className="trigger" onClick={this.toggle} />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 600
              }}
            >
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/todo" component={Todo} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default IndexLayout
