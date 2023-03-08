import {
  GlobalStyle as React95GlobalStyle,
  ThemeProvider,
} from "@react95/core";
import "@react95/icons/icons.css";
import styled, { createGlobalStyle } from "@xstyled/styled-components";

import { Documents } from "./features/Documents";
import { Resume } from "./features/Resume";
import { TaskBar } from "./features/TaskBar";
import { ShortcutGrid } from "./utils/styledComponents";

/**
 * Provides a Grid Layout for `Sortcut` components
 */
const DesktopGrid = styled(ShortcutGrid)`
  height: calc(100vh - 30px);
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <React95GlobalStyle />
      <GlobalStyle />
      <DesktopGrid>
        <Documents />
        <Resume />
      </DesktopGrid>
      <TaskBar />
    </ThemeProvider>
  );
};

export default App;
