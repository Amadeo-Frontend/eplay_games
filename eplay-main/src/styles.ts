import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eee',
  black: '#111',
  grey: '#333',
  green: '#10ac84'
}

export const GlobalStyle = createGlobalStyle`
 *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      font-family: 'Roboto', sans-serif;
      list-style: none;
      text-decoration: none;
 }

 body{
      background: ${colors.black};
      color: ${colors.white};
      padding-top: 40px;
 }`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`
