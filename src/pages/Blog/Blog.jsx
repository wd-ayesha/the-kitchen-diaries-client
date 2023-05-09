import React, { useRef } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactToPdf from "react-to-pdf";
import "./Blog.css";

const Blog = () => {
  const componentRef = useRef();

  return (
    <div className="blogBG">
      <div ref={componentRef} className="container py-5">
        <h2 className="text-center pb-3 fw-bold">Questions & Answers</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="bg-secondary text-white">
              <Card.Body>
                <Card.Title className="text-dark">
                  What are the differences between uncontrolled and controlled
                  components?
                </Card.Title>
                <Card.Text>
                  <p>
                    In software engineering, the terms "uncontrolled components"
                    and "controlled components" typically refer to two different
                    types of user interface elements or widgets.
                    <br />
                    <b>An uncontrolled component</b> is a UI element whose state
                    is managed entirely by the DOM (Document Object Model),
                    rather than by React or another state management library.
                    This means that the component's value or state is not
                    tracked by React and cannot be modified or accessed through
                    React's component methods or lifecycle hooks. Instead, the
                    value or state is managed by the browser or other
                    client-side software, and the component's behavior is
                    determined entirely by the browser's default behavior.
                    <br />
                    In contrast, <b>a controlled component</b> is a UI element
                    whose value is managed by React state, and whose behavior is
                    determined by React lifecycle methods and other
                    React-specific features. This means that changes to the
                    component's state trigger React lifecycle hooks, cause the
                    component to re-render, and allow developers to manipulate
                    and interact with the component using React-specific methods
                    and APIs.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary text-white">
              <Card.Body>
                <Card.Title className="text-dark">
                  What is a custom hook, and why will you create a custom hook?
                </Card.Title>
                <Card.Text>
                  <p>
                    A custom hook is a JavaScript function that uses the
                    built-in hooks (such as useState, useEffect, etc.) to
                    encapsulate reusable logic that can be shared across
                    multiple components.
                  </p>
                  <p>
                    There are many reasons why I might want to create a custom
                    hook in my React application: <br />
                    1. Reusability: Custom hooks allow me to encapsulate and
                    reuse logic across multiple components, making it easier to
                    write and maintain code. <br />
                    2. Abstraction: Custom hooks allow you to abstract away
                    complex logic and stateful behavior into a simple API that
                    can be easily used by other developers. <br />
                    3. Composition: Custom hooks allow me to compose different
                    hooks and behaviors together to create more complex and
                    powerful abstractions. <br />
                    4. Testing: Custom hooks make it easier to test and debug my
                    application logic.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary text-white">
              <Card.Body>
                <Card.Title className="text-dark">
                  What are the difference between nodejs and express js?
                </Card.Title>
                <Card.Text>
                  <p>
                    Node.js and Express.js serve different purposes and have
                    different roles in the web development stack.
                    <br />
                    <u>
                      Here are some key differences between Node.js and
                      Express.js:
                    </u>
                    <br />
                    1. Node.js is a runtime environment, while Express.js is a
                    web framework built on top of Node.js. <br />
                    2. Node.js provides low-level APIs for interacting with the
                    file system, network, and other system resources, while
                    Express.js provides higher-level APIs for building web
                    applications and APIs.
                    <br />
                    3. Node.js can be used to build a wide range of server-side
                    applications, including web applications, command-line
                    tools, and desktop applications, while Express.js is
                    specifically designed for building web applications and
                    APIs.
                    <br />
                    4. Node.js is more suitable for building low-level system
                    components and services, while Express.js is more suitable
                    for building high-level web applications and APIs.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-secondary text-white">
              <Card.Body>
                <Card.Title className="text-dark">
                  How to validate React props using PropTypes?
                </Card.Title>
                <Card.Text>
                  <p>
                    React provides a built-in library called PropTypes that can
                    be used to validate the types of props passed to a
                    component. PropTypes allows developers to specify the type
                    and shape of the props that a component expects, and to
                    provide error messages when the props do not match the
                    specified types.
                  </p>
                  <p>
                    Here are some common PropTypes validators that you can use:
                    <br />
                    <strong>PropTypes.string:</strong> Validates that the prop
                    is a string. <br />
                    <strong>PropTypes.number:</strong> Validates that the prop
                    is a number. <br />
                    <strong>PropTypes.bool:</strong> Validates that the prop is
                    a boolean value. <br />
                    <strong>PropTypes.array:</strong> Validates that the prop is
                    an array. <br />
                    <strong>PropTypes.object:</strong> Validates that the prop
                    is an object. <br />
                    <strong>PropTypes.func:</strong> Validates that the prop is
                    a function.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <ReactToPdf
            targetRef={componentRef}
            filename="answer.pdf"
            options={{
              orientation: "landscape",
            }}
          >
            {({ toPdf }) => (
              <button className="btn btn-outline-dark fw-bold" onClick={toPdf}>
                Download pdf file
              </button>
            )}
          </ReactToPdf>
        </div>
      </div>
    </div>
  );
};

export default Blog;
