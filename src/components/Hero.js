import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import userImg from '../assets/user.png';

const Hero = () => {
  const { user } = useAuth0();
  console.log(user);
  
  return (
    <div className="hero-section py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="border-0 shadow-lg">
              <CardBody className="p-5 text-center">
                {user && (
                  <div className="mb-4">
                    {user.picture && (
                      <img 
                        src={userImg} 
                        alt="Profile" 
                        className="rounded-circle mb-3"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                    )}
                    {user.name && (
                      <h2 className="text-primary mb-2">{user.name}</h2>
                    )}
                    <p className="text-muted mb-0">
                      Welcome back
                    </p>
                  </div>
                )}
                
                <div className="border-top pt-4">
                  <h1 className="display-4 text-dark mb-3">Federation Login Test</h1>
                  <p className="lead text-muted mb-0">
                  You have successfully logged in!
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
