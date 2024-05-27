import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import terrabellaflowers from "../../Assets/Projects/terrabellaflowers-landing.png";
import emotion from "../../Assets/Projects/emotion.png";
import tcheck from "../../Assets/Projects/tcheck-landing.png";
import avalla from "../../Assets/Projects/avalla-landing.png";
import ballardblossom from "../../Assets/Projects/ballardblossom-landing.png";
import antioxi from "../../Assets/Projects/antioxi-landing.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avalla}
              isBlog={false}
              title="Avalla"
              description="Avalla is a beauty and wellness brand that offers a range of skincare and nutritional products. The Shopify store was designed to reflect the brand’s commitment to natural ingredients and a holistic approach to beauty. The site features a clean, modern design with intuitive navigation, allowing customers to easily find and purchase their desired products. Advanced filtering options and a personalized skincare quiz help enhance the shopping experience."
              demoLink="https://www.avalla.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={antioxi}
              isBlog={false}
              title="Antioxi"
              description="Antioxi specializes in antioxidant-rich products, from supplements to skincare. The Shopify site was crafted to highlight the health benefits of antioxidants, with educational content seamlessly integrated into the shopping flow. The store’s vibrant and lively design mirrors the energy and vitality that the brand promotes. A subscription model was implemented to encourage repeat purchases and customer loyalty."
              demoLink="https://antioxi.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tcheck}
              isBlog={false}
              title="TCheck"
              description="TCheck is an innovative company offering a device that measures the potency of cannabis-infused oils. The Shopify platform was utilized to not only sell the product but also to educate consumers on its use and benefits. The website features a sleek, tech-forward design with interactive elements such as video tutorials and a blog with industry-related articles."
              demoLink="https://tcheck.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terrabellaflowers}
              isBlog={false}
              title="Terra Bella Flowers"
              description="Terra Bella Flowers is a florist shop that emphasizes sustainable and locally sourced flowers. The Shopify store was developed to showcase the shop’s unique floral arrangements and commitment to eco-friendly practices. The user interface is designed to provide a seamless and enjoyable experience, with features like same-day delivery options and custom arrangement builders."
              demoLink="https://www.terrabellaflowers.com/`"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ballardblossom}
              isBlog={false}
              title="Ballard Blossom"
              description="Ballard Blossom is one of Seattle’s premier florists, known for its wide variety of fresh flowers and creative arrangements. The Shopify site was revamped to enhance the visual appeal and user experience. High-quality images of the floral arrangements take center stage, supported by detailed descriptions and care instructions. The checkout process was streamlined to ensure a quick and easy purchase."
              demoLink="https://ballardblossom.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
