import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <>
      <Container>
        Made with <Logo src="/netliheart.svg" alt="Netlify Logo" />
      </Container>
    </>
  )
}

const Container = styled.footer`
  width: 100%;
  height: 100px;
  /* --color-secondary: cyan; */
  border-top: 1px solid var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  height: 1em;
  margin: 5px;
`