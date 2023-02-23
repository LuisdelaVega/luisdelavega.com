import { Frame, Tree } from "@react95/core";
import { TreeProps } from "@react95/core/@types/Tree/Tree";
import { styled } from "@xstyled/styled-components";
import { ReactNode } from "react";

import { COMMON_FRAME_PROPS } from "../../utils/constants";

const GridWrapper = styled.div`
  height: 100%;
  display: grid;
  column-gap: 5px;
  grid-template: 1fr / minmax(115px, 25%) 1fr;
  > div:first-child > ul {
    margin-top: 0px;
  }
`;

interface ITreeFrame {
  treeNodes: TreeProps;
  content: ReactNode;
}

export const TreeFrame: React.FC<ITreeFrame> = ({ treeNodes, content }) => {
  return (
    <GridWrapper>
      <Frame {...COMMON_FRAME_PROPS}>
        <Tree {...treeNodes} />
      </Frame>
      <Frame {...COMMON_FRAME_PROPS}>{content}</Frame>
    </GridWrapper>
  );
};
