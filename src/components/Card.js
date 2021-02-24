import React from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

function ProjectCard(props) {
  return (
    <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
      <CardTitle
        style={{
          color: `${props.color}`,
          height: "176px",
          background: `url(${props.image}) center / cover`,
        }}
      >
        {props.title}
      </CardTitle>
      <CardText>
        {props.description}
      </CardText>
      <CardActions border>
        <Button
          colored
          href={props.repo}
          target="_blank"
        >
          GitHub Repo
        </Button>
        <Button
          colored
          href={props.demo}
          target="_blank"
        >
          App Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;