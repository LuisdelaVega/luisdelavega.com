import { css, styled } from "@xstyled/styled-components";
import { FC } from "react";

//#region Styled Components
const ExperienceItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 5px;
  margin-bottom: 20px;
`;

interface IExperienceItemDescriptionProps {
  boldSubtitles?: boolean;
}
const ExperienceItemDescription = styled.div<IExperienceItemDescriptionProps>`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  h3 {
    font-size: 20px;
    margin-top: 2px;
    margin-bottom: 0px;
  }

  sub {
    font-size: 16px;

    ${({ boldSubtitles }) =>
      boldSubtitles
        ? css`
            font-weight: bold;
          `
        : ""}
  }

  p:first-of-type {
    margin-top: 5px;
  }

  p {
    margin-bottom: 0px;
  }
`;
//#endregion Styled Components

interface ExperienceItemProps {
  boldSubtitles?: boolean;
  descriptions?: string[];
  logoAlt: string;
  logoPath: string;
  subTitles?: string[];
  title: string;
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
  boldSubtitles,
  descriptions,
  logoAlt,
  logoPath,
  subTitles,
  title,
}) => (
  <ExperienceItemContainer>
    <img src={logoPath} alt={logoAlt} height={25} />
    <ExperienceItemDescription boldSubtitles={boldSubtitles}>
      <h3>{title}</h3>
      {subTitles?.map((value, index) => (
        <sub key={index}>{value}</sub>
      ))}
      {descriptions?.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </ExperienceItemDescription>
  </ExperienceItemContainer>
);
