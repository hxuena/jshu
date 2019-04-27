import React, {Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.inputFocus = this.inputFocus.bind(this)
    this.inputBlur = this.inputBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide">
              <Fragment>
                <NavSearch className={this.state.focused ? 'focused' : ''}
                onFocus={this.inputFocus}
                onBlur={this.inputBlur}
              ></NavSearch>
              <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
              </Fragment>
              
            </CSSTransition>
          </SearchWrapper>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="red"><i className="iconfont">&#xe615;</i>写文章</Button>
          <Button>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  inputFocus() {
    this.setState({
      focused: true
    }) 
  }
  inputBlur() {
    this.setState({
      focused: false
    }) 
  }
}
export default Header;
