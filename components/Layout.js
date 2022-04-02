 import React from 'react';
 import PropTypes from 'prop-types';
 import styled from 'styled-components';
 
 import Header from './Header';
 import { ThemeContext } from './ThemeContext';
 
 const Layout = ({ children }) => {

   return (
     <>
       <Container>
         <Header title={'Layout Header'} />
 
         <main>{children}</main>
       </Container>
     </>
   );
 };

 const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
  background-color: var(--color-background);
 `
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 };
 
 export default Layout;