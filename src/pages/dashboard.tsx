import { Container, Grid } from "@mui/material";
import { withFooterAndNavigation } from "../hoc/withFooterAndNavigation";

export const Dashboard = withFooterAndNavigation(() => {
  return (
    <Container maxWidth="xl">
      <Grid container gap={0} sx={{ backgroundColor: "red" }}>
        <Grid lg={3} container justifyContent="center">
          Low
        </Grid>
        <Grid lg={3} container justifyContent="center">
          Medium
        </Grid>
        <Grid lg={3} container justifyContent="center">
          High
        </Grid>
        <Grid lg={3} container justifyContent="center">
          Customization
        </Grid>
      </Grid>
    </Container>
  );
});
