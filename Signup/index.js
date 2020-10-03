import React from 'react';
import Layout from '../../components/Layout';
import  {Container,Form,Button,Col,Row} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
/**
*@author
*function Signup
*/


const Signup = (props) => {

	return (
		<Layout>
			<Container>
			<Row style={{ marginTop: '20px'}}>
				<Col md={{ span: 6, offset: 3}}>
					<Form>
							<Form.Row>
								<Form.Group as={Col}>
		  							<Form.Label>Your Name:</Form.Label>
		  							<Form.Control type="text" placeholder="Normal text" />
		  						</Form.Group>


							</Form.Row>
							  <Form.Row>
							    <Form.Group as={Col} controlId="formGridEmail">
							      
							      <Form.Label>Email</Form.Label>
							      
							      <Form.Control type="email" placeholder="Enter email" />
							    
							    </Form.Group>

							    <Form.Group as={Col} controlId="formGridPassword">
							      <Form.Label>Password</Form.Label>
							      <Form.Control type="password" placeholder="Password" />
							    </Form.Group>
							  </Form.Row>

									  <Form.Group controlId="formGridAddress1">
									    <Form.Label>Address</Form.Label>
									    <Form.Control placeholder="1234 Main St" />
									  </Form.Group>

									  <Form.Group controlId="formGridAddress2">
									    <Form.Label>Address 2</Form.Label>
									    <Form.Control placeholder="Apartment, studio, or floor" />
									  </Form.Group>

							  <Form.Row>
							    <Form.Group as={Col} controlId="formGridCity">
							      <Form.Label>City</Form.Label>
							      <Form.Control />
							    </Form.Group>

							    <Form.Group as={Col} controlId="formGridState">
							      <Form.Label>State</Form.Label>
							      <Form.Control as="select" defaultValue="Choose...">
							        <option>Choose...</option>
							        <option>...</option>
							      </Form.Control>
							    </Form.Group>

							    <Form.Group as={Col} controlId="formGridZip">
							      <Form.Label>Pin-Code</Form.Label>
							      <Form.Control />
							    </Form.Group>
							  </Form.Row>

						  <Form.Group id="formGridCheckbox">
						    <Form.Check type="checkbox" label="Check me out" />
						  </Form.Group>

						  <Button variant="primary" type="submit">
						    Submit
						  </Button>
				</Form>

				</Col>
			</Row>
				


			</Container>
		</Layout>
	)
}

export default Signup;