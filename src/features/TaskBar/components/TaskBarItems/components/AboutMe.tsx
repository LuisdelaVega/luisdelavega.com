import { List } from "@react95/core";
import { HelpBook } from "@react95/icons";
import { styled } from "@xstyled/styled-components";

import { Window as WindowComponent } from "../../../../../components";

//#region TaskBar Item
interface IListItemProps {
  openModal: () => void;
}

export const ListItem: React.FC<IListItemProps> = ({ openModal }) => (
  <List.Item icon={<HelpBook variant="32x32_4" />} onClick={openModal}>
    About Me
  </List.Item>
);
//#endregion TaskBar Item

//#region Window

//#region Styled Components
const Content = styled.div`
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 16px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const CaptionedImage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
    width: 50%;
    margin: 5px auto;
  }

  figcaption {
    font-size: 14px;
  }
`;
//#endregion Styled Components

interface IWindowProps {
  closeModal: () => void;
}

export const Window: React.FC<IWindowProps> = ({ closeModal }) => (
  <WindowComponent
    closeModal={closeModal}
    icon={HelpBook}
    title="About Me"
    modalProps={{
      defaultPosition: {
        x: 150,
        y: 100,
      },
    }}
  >
    <Content>
      <TitleContainer>
        <h1>Welcome to my page! </h1>
        <img
          src="./spinningearth.gif"
          alt="90's looking gif of a spinning planet earth"
        />
      </TitleContainer>

      <p>
        My name is Luis de la Vega Lopez, a Software Engineer with a passion for
        JavaScript and Web Development.
      </p>

      <CaptionedImage>
        <img src="./super compressed me.jpg" alt="A photo of me" />
        <figcaption>Did I compress this picture enough?</figcaption>
      </CaptionedImage>

      <p>
        I&apos;ve got 8+ years of experience working with web technologies like
        React, GraphQL, Node.js, AWS, etc.
      </p>
    </Content>
  </WindowComponent>
);
//#endregion Window
