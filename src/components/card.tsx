import { CardContent, Typography, CardActions, Button } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import { useDraggable } from "../pages/useDraggable";

type CardType = {
  title: string;
  description: string;
  id: number;
};

export const CardComponent = ({ title, description, id }: CardType) => {
  const { handleDragStart } = useDraggable();

  return (
    <Card
      variant="outlined"
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
      sx={{ my: 2 }}
    >
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
          <Button onClick={() => alert(1)} size="small">
            Edit
          </Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
};
