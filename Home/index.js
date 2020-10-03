import React from 'react';
import Layout from '../../components/Layout'
import {Jumbotron,Container,img} from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';


/**
/**
*@author
*function Home
*/


const Home = (props) => {

	return (
		<Layout>
			<Jumbotron style={{margin : '2rem',background : '#0575e6', color : '#fff'}} className="text-center">
			
				<h1>
					welcome to our page

				</h1>
			

			</Jumbotron>
			<Container>
					<AliceCarousel autoPlay autoPlayInterval="3000">
					      <img src='bck1.png' className="sliderimg"/>
					</AliceCarousel>

			</Container>

		</Layout>
	)
}

export default Home;