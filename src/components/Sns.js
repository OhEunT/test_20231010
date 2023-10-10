import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
const icons = [faFacebook, faTwitter, faYoutube, faBehance];

const SnsWrap = styled.ul`
	position: absolute;
	top: 5vh;
	right: 5vw;
	z-index: 10;
	display: flex;
	gap: 30px;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.5);
	cursor: pointer;
`;

function Sns() {
	return (
		<SnsWrap>
			{icons.map((icon, idx) => (
				<li key={idx}>
					<FontAwesomeIcon icon={icon} />
				</li>
			))}
		</SnsWrap>
	);
}

export default Sns;
