import { keyframes, styled } from "@xstyled/styled-components";

export const ShortcutGrid = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
  row-gap: 30px;
  column-gap: 5px;
  padding: 10px;
`;

export const BlinkAnimation = keyframes`
50% {
  opacity: 0;
}
`;
