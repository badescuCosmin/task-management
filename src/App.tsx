import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
