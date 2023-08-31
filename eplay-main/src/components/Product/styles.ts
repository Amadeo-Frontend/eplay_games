import styled from 'styled-components'

import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${colors.grey};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};
  display: block;

  img {
    width: 100%;
    display: block;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-top: 8px;
  margin-bottom: 8px;
  display: block;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
