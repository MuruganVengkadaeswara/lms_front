import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  FormGroup,
  Col,
  InputGroup,
  Spinner,
  Alert,
} from "react-bootstrap";
import statelist from "../LoanApplication/statelist.json";
import emptypelist from "../LoanApplication/emptype.json";
import idtype from "../LoanApplication/idtype.json";
import axios from "axios";
import "../LoanApplication/loanapplication.css";

const LoanApplication = (props) => {
  const [typelist, setTypelist] = useState([]);
  const [appln, setAppln] = useState({ status: {status:"pndg"} });
  const [alert, setAlert] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/lms/user/loantypes").then((res) => {
      console.log(res);
      console.log(res.data.response);
      setTypelist(res.data.response);
    });
  }, []);

  const apply = () => {
    setAlert(<Spinner animation="border" variant="success" />);
    console.log(appln);
    axios.post("http://localhost:8080/lms/user/apply", appln).then((res) => {
      console.log(res);
      console.log(res.data);
      if (res.data.error) {
        setAlert(
          <Alert variant="danger">Unable to apply ! please Try Later</Alert>
        );
        window.scrollTo({ top: 0, behavior: "smooth" });

      } else {
        setAlert(<Alert variant="success">Applied Successfully
        <br></br>
        Your Appication Id is {res.data.response.applicationId}
        <br></br>
        Kindly make note of it for future reference
        </Alert>);
        document.loanapplication.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  return (
    <div className="card card-body  offset-md-2 col-md-8 mt-5  appblock">
      <div>{alert}</div>
      <Form name="loanapplication">
        <h1>Loan Details</h1>
        <hr />
        <Form.Group as={Row}>
          <Col>
            <Form.Label>Loan Type</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, loanTypeId: val };
                });
              }}
            >
              {typelist.map((type) => (
                <option key={type.loanTypeId} value={type.loanTypeId}>
                  {type.loanName} ({type.interestRate})%
                </option>
              ))}
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Loan Amount</Form.Label>
            <Form.Control
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, loanAmount: val };
                });
              }}
            ></Form.Control>
          </Col>
        </Form.Group>
        <br />
        <hr />
        <h1>Personal Details</h1>
        <br />
        <FormGroup>
          <Form.Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  const val = e.target.value;
                  setAppln((prevState) => {
                    return { ...prevState, firstName: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  const val = e.target.value;
                  setAppln((prevState) => {
                    return { ...prevState, middleName: val };
                  });
                }}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  const val = e.target.value;
                  setAppln((prevState) => {
                    return { ...prevState, lastName: val };
                  });
                }}
              ></Form.Control>
            </Col>
          </Form.Row>
        </FormGroup>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, email: val };
              });
            }}
          ></Form.Control>
        </Form.Group>

        <FormGroup>
          <Form.Label>mobile number</Form.Label>
          <Form.Control
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, mobileNo: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Gender</Form.Label>
          <InputGroup>
            <Form.Check
              inline
              label="Male"
              type="radio"
              id="gender"
              name="gndr"
              value="male"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, gender: val };
                });
              }}
            ></Form.Check>
            <Form.Check
              inline
              label="female"
              type="radio"
              id="gender"
              name="gndr"
              value="female"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, gender: val };
                });
              }}
            ></Form.Check>
            <Form.Check
              inline
              label="others"
              type="radio"
              id="gender"
              name="gndr"
              value="others"
              onChange={(e) => {
                const val = e.target.value;
                setAppln((prevState) => {
                  return { ...prevState, gender: val };
                });
              }}
            ></Form.Check>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            inline
            type="date"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, dob: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Address line 1</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, address1: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Address line 2</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, address2: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            defaultValue="choose"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, state: val };
              });
            }}
          >
            <option disabled>choose</option>
            {statelist.map((statename) => (
              <option key={statename.key} value={statename.key}>
                {statename.name}
              </option>
            ))}
          </Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>City</Form.Label>
          <Form.Control
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, city: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>pincode</Form.Label>
          <Form.Control
            type="tel"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, pincode: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Employement type</Form.Label>
          <Form.Control
            as="select"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, emplType: val };
              });
            }}
          >
            {emptypelist.map((emp) => (
              <option value={emp.key} key={emp.key}>
                {emp.name}
              </option>
            ))}
          </Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Job description</Form.Label>
          <Form.Control
            type="text"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, applicantJob: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, compName: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, applicantSalary: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Identity type</Form.Label>
          <Form.Control
            as="select"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, identityType: val };
              });
            }}
          >
            {idtype.map((idt) => (
              <option key={idt.key} value={idt.key}>
                {idt.name}
              </option>
            ))}
          </Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Identity Number</Form.Label>
          <Form.Control
            type="tel"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, identityNo: val };
              });
            }}
          ></Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Pan Number</Form.Label>
          <Form.Control
            type="text"
            className="col-md-5"
            onChange={(e) => {
              const val = e.target.value;
              setAppln((prevState) => {
                return { ...prevState, panNo: val };
              });
            }}
          ></Form.Control>
        </FormGroup>
        <Button variant="success" className="offset-md-5" onClick={apply}>
          Apply
        </Button>
      </Form>
    </div>
  );
};

export default LoanApplication;
