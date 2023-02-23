import {
  GlobalStyle as React95GlobalStyle,
  ThemeProvider,
} from "@react95/core";
import "@react95/icons/icons.css";
import styled, { createGlobalStyle } from "@xstyled/styled-components";

import { TaskBar } from "./components";
import { Documents } from "./features/Documents";
import { ShortcutGrid } from "./utils/styledComponents";

const Desktop = styled(ShortcutGrid)`
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
      <Desktop>
        <Documents />
      </Desktop>
      <TaskBar />
    </ThemeProvider>
  );
};

export default App;
