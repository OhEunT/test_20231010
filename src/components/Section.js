import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from './Box';
const path = process.env.PUBLIC_URL;

const SectionWrap = styled.section`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
`;

function Section() {
	const [Items, setItems] = useState([]);

	useEffect(() => {
		axios.get(path + '/DB/data.json').then((json) => {
			setItems(json.data.data);
		});
	}, []);

	useEffect(() => {
		console.log(Items);
	}, [Items]);

	return (
		<SectionWrap>
			{Items.map((data, idx) => {
				return (
					<Box key={idx}>
						<h2>{data.title}</h2>
						<video src={`${path}/img/${data.vid}`} loop autoPlay muted></video>
						<div></div>
						<h3>{data.title}</h3>
						<p>{data.txt}</p>
					</Box>
				);
			})}
		</SectionWrap>
	);
}

export default Section;
