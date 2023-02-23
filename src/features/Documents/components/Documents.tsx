import { Tree } from "@react95/core";
import { TreeProps } from "@react95/core/@types/Tree/Tree";
import { Folder } from "@react95/icons";
import { ReactNode, useMemo, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

import { getDevlogContent, getDevlogTitles } from "../../../assets/Devlogs";
import { Shortcut } from "../../../components";
import { TreeFrame } from "../../../components/TreeFrame";

export const Documents: React.FC = () => {
  const [content, setContent] = useState<ReactNode>();

  const treeNodes: TreeProps = useMemo(
    () => ({
      data: [
        {
          id: 0,
          label: "Applications",
          children: [
            {
              id: 1,
              label: "virus.exe",
              icon: <Tree.icons.FILE_EXECUTABLE />,
              onClick: () => setContent("Hello 0"),
            },
          ],
        },
        {
          id: 2,
          label: "Music",
          children: [
            {
              id: 3,
              label: "Indie",
              children: [
                {
                  id: 4,
                  label: "Weezer",
                  icon: <Tree.icons.FILE_MEDIA />,
                  onClick: () => setContent("Hello 1"),
                },
                {
                  id: 5,
                  label: "Supergrass",
                  icon: <Tree.icons.FILE_MEDIA />,
                  onClick: () => setContent("Hello 2"),
                },
              ],
            },
          ],
        },
        {
          id: 3,
          label: "Devlogs",
          children: getDevlogTitles().map((label, id) => ({
            label: label.replace("_", " "),
            id,
            icon: <Tree.icons.FILE_TEXT />,
            onClick: () =>
              setContent(
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {getDevlogContent(label)}
                </ReactMarkdown>
              ),
          })),
        },
        {
          id: 4,
          label: "config.cfg",
          icon: <Tree.icons.FILE_SETTINGS />,
          onClick: () => setContent("Hello 3"),
        },
        {
          id: 5,
          label: "random_file",
          icon: <Tree.icons.FILE_UNKNOWN />,
          onClick: () => setContent("Hello 4"),
        },
      ],
    }),
    []
  );

  return (
    <Shortcut title="Documents" icon={Folder}>
      <TreeFrame treeNodes={treeNodes} content={content} />
    </Shortcut>
  );
};
