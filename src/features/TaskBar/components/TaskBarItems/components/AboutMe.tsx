import { List, Tooltip } from "@react95/core";
import { HelpBook } from "@react95/icons";
import { styled } from "@xstyled/styled-components";

import { Window as WindowComponent } from "../../../../../components";
import { BlinkAnimation } from "../../../../../utils/styledComponents";

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
  flex-flow: row wrap;
  align-items: center;
  column-gap: 10px;
`;

const CaptionedImage = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;

  img {
    width: 25vw;
  }

  figcaption {
    font-size: 14px;
  }
`;

const BlinkingText = styled.span`
  animation: ${BlinkAnimation} 1s linear infinite;
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
        <h1>Welcome to my page!</h1>
        <img
          src="./spinningearth.gif"
          alt="90's looking gif of a spinning planet earth"
        />
      </TitleContainer>

      <p>
        My name is Luis de la Vega Lopez, a Software Engineer with over 8 years
        of experience working with web technologies and a passion for
        TypeScript/JavaScript, React and Web Development in general.
      </p>

      <CaptionedImage>
        <Tooltip text="Sadly, this picture was not taken in the 90's.">
          <img src="./super compressed me.jpg" alt="A photo of me." />
        </Tooltip>
        <figcaption>Hey, that&apos;s me!</figcaption>
      </CaptionedImage>

      <p>
        I&apos;m also a Certified Scrum Product Owner that has been working with
        Scrum and other agile methodologies for over 8 years.{" "}
        <a href="https://bcert.me/scgqbvvda" target="_blank" rel="noreferrer">
          Check out my extremely cool badge!
        </a>
      </p>

      <p>
        I&apos;m a 90&apos;s kid and some of my favorite memories are of me and
        my brother sitting in front of my dad&apos;s computer playing games
        (yes, it was mostly RuneScape) and messing around in{" "}
        <BlinkingText>THE INTERNET</BlinkingText>.
      </p>

      <CaptionedImage>
        <Tooltip text="The 90's in Puerto Rico really were something different.">
          <img
            src="./Me_in_the_90s.jpg"
            alt="A photo of me as a kid in the 90's."
          />
        </Tooltip>
        <figcaption>Me (middle) circa 1997ish</figcaption>
      </CaptionedImage>

      <p>
        Feel free to look around my page. You can find ways to contact me in the
        Start Menu.
      </p>

      <p>
        Hopefully this website makes you feel a bit nostalgic,{" "}
        <a
          href="https://www.dictionaryofobscuresorrows.com/post/105778238455/anemoia-n-nostalgia-for-a-time-youve-never"
          target="_blank"
          rel="noreferrer"
        >
          even if you weren&apos;t born in the 90&apos;s
        </a>
        .
      </p>

      <CaptionedImage>
        <Tooltip text="I have no idea when this animation of me was made but here it is.">
          <img
            src="./Me_thumbs_up.gif"
            alt="A gif of an animated version of me giving you a thumbs up."
          />
        </Tooltip>
        <figcaption>You got it dude!</figcaption>
      </CaptionedImage>
    </Content>
  </WindowComponent>
);
//#endregion Window
