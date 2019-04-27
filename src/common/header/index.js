import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchNav, SearchTitle, SearchItem, SearchSwitch} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

const getSearchNav = (show, props, mouseIn) => {
  const {searchNavList, page, totalPage, mouseEnter, mouseLeave, changePage} = props
  let list = searchNavList.toJS()
  let pageList = []
  if(list.length) {
    for( let i= (page-1)*10; i<page * 10; i++) {
      if(list[i]) {
        pageList.push(<SearchItem key={list[i]}>{list[i]}</SearchItem>) 
      }
    }
  }
  
  if(show || mouseIn) {
    let spinIcon
    return (
      <SearchNav onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <SearchTitle>
          <span>热门搜索</span>
          <SearchSwitch onClick={() => changePage(page, totalPage, spinIcon)}>
            <i ref={(icon) => {spinIcon = icon}} className="iconfont spin">&#xe606;</i>
          换一批</SearchSwitch>
        </SearchTitle>
        { pageList }
      </SearchNav>
    ) 
  } else {
    return null
  }
}

const Header = (props) => {
  const {focused, mouseIn, searchNavList, inputFocus, inputBlur} = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide">
              <NavSearch className={focused ? 'focused' : ''}
              onFocus={() => {inputFocus(searchNavList)}}
              onBlur={inputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe637;</i>
            { getSearchNav(focused, props, mouseIn) }
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
    mouseIn: state.getIn(['header','mouseIn']),
    searchNavList: state.getIn(['header','searchNavList']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inputFocus(searchNavList) {
      //searchNavList 是immutable类型的数组
      if(!searchNavList.size) {
        dispatch(actionCreators.getSearchNavList())
      }
      dispatch(actionCreators.searchFocus())
    },
    inputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    mouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    mouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    changePage(page, totalPage, spin) {
      let originDeg = spin.style.transform.replace(/[^0-9]/ig, '')
      if(originDeg){
        originDeg = parseInt(originDeg, 10)
      } else {
        originDeg = 0
      }
      spin.style.transform = `rotate(${originDeg + 360}deg)`
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
