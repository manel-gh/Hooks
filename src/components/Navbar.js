import {Nav,NavDropdown,Navbar,Container,Form,FormControl,Button} from 'react-bootstrap';
function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Movie Title">Home</Nav.Link>
      <NavDropdown title="Rating" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">1 Star</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">2 Star</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">3 Star</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">4 Star</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">5 Star</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Menu;