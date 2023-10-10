import styled from 'styled-components';
const path = process.env.PUBLIC_URL;

const BoxWrap = styled.article`
	position: relative;
	width: 12%;
	height: 100%;
	float: right;
	overflow: hidden;
	background: url(${(props) => props.bg}) no-repeat left center;
	transition: width 1s;

	h2 {
		position: absolute;
		top: 300px;
		left: 20px;
		padding-left: 15px;
		border-left: 3px solid #555;
		font: bold 20px/1 'Raleway';
		color: #666;
		z-index: 3;
		transition: 0.5s;
	}
	div {
		position: absolute;
		left: 0;
		top: 300px;
		width: 100%;
		height: 0;
		background: #000;
		opacity: 0.5;
		z-index: 2;
		transition: 0.5s;
	}
	video {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		z-index: 1;
		transition: opacity 1s;
	}
	h3 {
		position: absolute;
		bottom: 210px;
		right: -310px;
		font: 40px/1 'Ralewap';
		color: #fff;
		text-align: right;
		opacity: 0;
		z-index: 3;
		transition: 0.5s 0.5s;
	}
	p {
		position: absolute;
		bottom: 50px;
		right: -310px;
		width: 300px;
		height: 150px;
		font: 1 2px/1.2 'arial';
		color: #fff;
		text-align: right;
		opacity: 0;
		z-index: 5;
		transition: 1s 0.5s;
	}

	&:hover {
		width: 35%;
		h2 {
			color: #ccc;
			border-left: 3px solid #ccc;
		}
		div {
			top: 270px;
			height: 70px;
		}
		video {
			opacity: 0.8;
		}
		h3,
		p {
			right: 20px;
			opacity: 1;
		}
	}
`;

function Box({ children }) {
	return <BoxWrap bg={path + '/img/divider.png'}>{children}</BoxWrap>;
}

export default Box;
