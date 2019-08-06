import baseStyled, { css, ThemedStyledInterface } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

// Iterate through the sizes and create a media template
const media = {
  desktop: (args) => "",
  tablet: (args) => "",
  phone: (args) => "",
}

Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(args)}
    }
  `
  return acc
}, media);

const color = {
  blue: "#3498db",
  grey: "#7f8c8d",
  lightGrey: "#EAE8E8",
  violet: "#9775FA",
}

export const theme = {
  color,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;