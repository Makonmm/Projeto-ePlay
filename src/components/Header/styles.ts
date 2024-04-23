import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex; //deixando os links um ao lado do outro
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center; //alinhando os itens do header na vertical
  justify-content: space-between; //colocando o espaçamento todos os elementos do header e deixando o carrinho ao lado direito;

  > div {
    display: flex;
    align-items: center; //centralizando o conteúdo da div na vertical

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    &.is-open {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    &.is-open {
      display: block;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
