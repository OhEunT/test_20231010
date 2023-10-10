import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

import Header from './components/Header';
import Section from './components/Section';
import Sns from './components/Sns';

const Wrapper = styled.main`
	position: fixed;
	width: 100%;
	height: 100%;
	min-width: 1024px;
	min-height: 768px;
	background: url(${(props) => props.bg}) no-repeat center/cover;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Wrapper bg={process.env.PUBLIC_URL + '/img/bg.jpg'}>
				<Header />
				<Sns />
				<Section />
			</Wrapper>
		</>
	);
}

export default App;
