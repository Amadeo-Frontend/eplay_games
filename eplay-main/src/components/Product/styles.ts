import styled from 'styled-components'

import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.grey};
  padding: 8px;
  border-radius: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
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
