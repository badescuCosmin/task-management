import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { withFooterAndNavigation } from "../hoc/withFooterAndNavigation";
import { CardComponent } from "../components/card";
import { useDashboard } from "./useDashboard";

export const Dashboard = withFooterAndNavigation(() => {
  const { filterCardsByPriority, priorities } = useDashboard();

  return (
    <Container maxWidth="xl">
      <Box>
        <Typography sx={{ padding: 4, textAlign: "center" }}>
          Task management
        </Typography>
        <Grid container gap={0}>
          {priorities.map((p) => {
            const cards = filterCardsByPriority(p);
            return (
              <>
                <Grid
                  lg={3}
                  container
                  direction="column"
                  alignItems="center"
                  rowGap={2}
                >
                  {cards.map((c) => (
                    <CardComponent
                      title={c.title}
                      description={c.description}
                    />
                  ))}
                </Grid>
              </>
            );
          })}
          <Grid lg={3} container direction="column" alignItems="center">
            <>
              Customization
              <Button size="small">Add new Card</Button>
            </>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
});
