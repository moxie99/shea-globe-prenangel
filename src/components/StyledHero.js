import styled from 'styled-components';
import defaultImage from '../sheaglobalImages/benzcar1.jpg';

const StyledHero = styled.header`

min-height: 80vh;
background: url(${props => (props.img? props.img: defaultImage)}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;

`

export default StyledHero;
