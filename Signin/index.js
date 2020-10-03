import React from 'react';
import Layout from '../../components/Layout';
import  {Container,Form,Button,Row,Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
/**
/**
*@author
*function Signin
*/


const Signin = (props) => {

	return (
		<Layout>
			<Container>
				<Row style={{ marginTop: '20px'}}>
					<Col md={{ span: 6, offset: 3}}>
						<Form style={{ backgroundColor: ' #e9e4f0',borderRadius:'5px'}}>
						  	<Form.Group controlId="formGroupEmail">
							    <Form.Label>Email address</Form.Label>
							    <Form.Control type="email" placeholder="Enter email" />
						  	</Form.Group>
						  
						  	<Form.Group controlId="formGroupPassword">
						    	<Form.Label>Password</Form.Label>
						    	<Form.Control type="password" placeholder="Password" />
						  	</Form.Group>
						  	<div className="text-center">
						  	<Button variant="primary" type="submit" >
						    	LogIn
						  	</Button>
						  	</div>

						</Form>
					</Col>
				</Row>

			</Container>

		</Layout>
	)
}

export default Signin;