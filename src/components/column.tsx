import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useDraggable } from "../pages/useDraggable";
import { PriorityType } from "../pages/data";
import { CardComponent } from "./card";

type ColumnType = {
  type: PriorityType;
};

export const Column = ({ type }: ColumnType) => {
  const {
    handleDragOver,
    handleDrop,
    filterCardsByPriority,
    isDragging,
    handleDragEnd,
  } = useDraggable();
  const theme = useTheme();

  const data = filterCardsByPriority(type);

  return (
    <Grid
      lg={3}
      md={3.6}
      sm={5.5}
      item
      container
      direction="column"
      alignItems="center"
      rowGap={2}
    >
      <Typography sx={{ color: theme.palette.secondary.dark }}>
        {type}
      </Typography>
      <Box
        sx={
          isDragging
            ? { border: `1px dashed ${theme.palette.primary.dark}` }
            : {}
        }
        px={6}
        onDrop={(e) => handleDrop(e, type)}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        pb={16}
      >
        {data.map((c) => (
          <CardComponent
            id={c.id}
            key={c.id}
            title={c.title}
            description={c.description}
          />
        ))}
      </Box>
    </Grid>
  );
};
