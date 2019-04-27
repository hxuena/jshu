import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchNav, SearchTitle, SearchItem, SearchSwitch} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

const getSearchNav = (show, props) => {
  if(show) {
    return (
      <SearchNav>
        <SearchTitle>
          <span>热门搜索</span>
          <SearchSwitch >换一批</SearchSwitch>
        </SearchTitle>
        {
          props.searchNavList.map((item, index) => (
            <SearchItem key={index}>{item}</SearchItem>
          ))
        }
      </SearchNav>
    ) 
  } else {
    return null
  }
}

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide">
              <NavSearch className={props.focused ? 'focused' : ''}
              onFocus={props.inputFocus}
              onBlur={props.inputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</i>
            { getSearchNav(props.focused, props) }
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
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    searchNavList: state.getIn(['header','searchNavList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus() {
      dispatch(actionCreators.searchFocus())
      dispatch(actionCreators.getSearchNavList())
    },
    inputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
