import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { withFooterAndNavigation } from "../hoc/withFooterAndNavigation";
import { Column } from "../components/column";

export const Dashboard = withFooterAndNavigation(() => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography sx={{ padding: 4, textAlign: "center" }}>
          Task management
        </Typography>

        <Grid container gap={4}>
          <Column type="Low" />
          <Column type="Medium" />
          <Column type="High" />
          <Grid
            item
            lg={2}
            md={12}
            sm={12}
            container
            direction="column"
            alignItems="center"
          >
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
