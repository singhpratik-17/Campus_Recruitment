import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../../../constants/routes';

const Edit = ({
  firstName,
  lastName,
  phone,
  skills,
  handleChange,
  handleSubmit,
  isProcessing,
  error,
  dismissAlert,
}) => {
  const navigate = useNavigate();

  return (
    <Container className="col-md-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="text-center">
          Edit Profile
        </Card.Header>
        <Card.Body>
          <Alert
            variant="danger"
            show={error}
            dismissible
            onClose={dismissAlert}
          >
            {error}
          </Alert>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="phone" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Form.Group controlId="skills" className="mb-3">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                required
                type="text"
                name="skills"
                value={skills}
                onChange={handleChange}
                disabled={isProcessing}
              />
            </Form.Group>
            <Button
              className="me-2"
              variant="success"
              type="submit"
              disabled={isProcessing}
            >
              {isProcessing ? 'Updating...' : 'Update'}
            </Button>
            <Button
              variant="light"
              onClick={() => navigate(ROUTES.PROFILE)}
              disabled={isProcessing}
            >
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

Edit.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  error: PropTypes.string,
  dismissAlert: PropTypes.func.isRequired,
};

export default Edit;
