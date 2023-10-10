import styled from 'styled-components';

const HeaderWrap = styled.header`
	position: absolute;
	left: 3vw;
	top: 40%;

	h1 {
		width: 300px;
		text-align: left;

		img {
			width: 200px;
		}
		span {
			font: bold 12px/1 'arial';
			color: #444;
			letter-spacing: 5px;
			display: inline-block;
			transform: translateY(-15px);
		}
	}

	p {
		font: bold 30px/1 'Raleway';
		color: #555;
		margin-top: 30px;

		span {
			color: #999;
		}
	}
`;

function Header() {
	return (
		<HeaderWrap>
			<h1>
				<img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='Cartier' />
				<br />
				<span>Exceptional Creation</span>
			</h1>

			<p>
				French Jewellry & <span>Watch Maker</span>
			</p>
		</HeaderWrap>
	);
}

export default Header;
