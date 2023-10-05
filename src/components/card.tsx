import { CardContent, Typography, CardActions, Button } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";

type CardType = {
  title: string;
  description: string;
  //   priority: "High" | "Medium" | "Low";
};

export const CardComponent = ({ title, description }: CardType) => {
  return (
    <Card variant="outlined">
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
};
