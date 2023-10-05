/* eslint-disable react-refresh/only-export-components */
import { Box, BoxProps, styled } from "@mui/material";

const NavAndFooterContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  height: 60,
}));

const Root = styled(Box)<BoxProps>(() => ({
  minHeight: "calc(100vh - 120px)",
}));

export const withFooterAndNavigation = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => {
    return (
      <Box>
        <NavAndFooterContainer>Navigation</NavAndFooterContainer>
        <Root>
          <Component {...props} />
        </Root>
        <NavAndFooterContainer>Footer</NavAndFooterContainer>
      </Box>
    );
  };
};
