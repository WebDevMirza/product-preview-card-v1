import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import IMGMobile from "../images/mobile.jpg";
import IMGDesktop from "../images/desktop.jpg";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [prePrice, setPrePrice] = useState([]);
  useEffect(() => {
    setPrePrice(["$169.99"]);
  }, []);
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
        <Card className="text-start rounded-4 border-0">
          <Row className="align-items-center">
            <Col md>
              <picture>
                <source media="(min-width:768px)" srcSet={IMGDesktop} />
                <Card.Img className="rounded-4 rounded-my" src={IMGMobile} alt="product image" />
              </picture>
            </Col>
            <Col className="me-md-4">
              <Card.Body>
                <Card.Subtitle className="mb-2">Perfume</Card.Subtitle>
                <Card.Title className="fw-bold display-5 mb-3">Gabrielle Essence Eau De Parfum</Card.Title>
                <Card.Text>
                  A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the
                  House of CHANEL.
                </Card.Text>
                <Row className="align-items-center mb-3 price">
                  <Col xs="auto" className="display-5 present fw-bold">
                    $149.99
                  </Col>
                  <Col xs="auto" className="h6">
                    <span className="sr-only">
                      {prePrice?.map((v) => {
                        return <del key={v}>{v}</del>;
                      })}
                    </span>
                  </Col>
                </Row>
                <div className="d-grid">
                  <Button className="btn-custom d-flex justify-content-center align-items-center gap-2" size="lg">
                    <AiOutlineShoppingCart /> <span>Add to Cart</span>
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default ProductCard;
