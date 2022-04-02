import styled from 'styled-components';

export default function Header({ title, image, color }) {
  return <Title image={image} color={color}>{title}</Title>
}

const Title = styled.h1`
  background-image: url(${({image}) => image});
  display: flex;
  justify-content: center;
  align-items: center;
  ${({color}) => color && `color: ${color};`}
`;