import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme";
import { Dashboard } from "./pages/dashboard";
import { TasksContextProvider } from "./context/task.context";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TasksContextProvider>
        <Dashboard />
      </TasksContextProvider>
    </ThemeProvider>
  );
}

export default App;
