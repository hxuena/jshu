import styled from 'styled-components';
import LogoIcon from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  border-bottom: 1px solid;
  border-color: #f0f0f0;
`
export const Logo = styled.a`
  float: left;
  width: 100px;
  height: 56px;
  padding: 0;
  background: url(${LogoIcon});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 70px;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  box-sizing: border-box;
  outline: none;
  font-size: 14px;
  color: #777;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
  &.red {
    width: 100px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    &.focused {
      background: #777;
    }
  }
  .slide-enter {
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 200px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }

`