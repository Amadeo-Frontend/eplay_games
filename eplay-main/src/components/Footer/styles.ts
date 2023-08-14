import { colors } from './../../styles'
import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${colors.grey};
  padding: 32px 0;
`
export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`
export const Link = styled.a`
  color: #a3a3a3;
  margin-right: 8px;
  cursor: pointer;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
export const Copyright = styled.p`
  font-size: 14px;
`
