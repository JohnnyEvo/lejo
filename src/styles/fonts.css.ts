import { style, globalFontFace } from "@vanilla-extract/css";

const contentFont = 'Outfit';
const titleFont = 'Bakbak One';

globalFontFace(contentFont, {
    src: "url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format('woff2')",
    fontWeight: 100,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
});
globalFontFace(contentFont, {
    src: "url(https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2) format('woff2')",
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
});
globalFontFace(titleFont, {
    src: "url(https://fonts.gstatic.com/s/bakbakone/v6/zOL54pXAl6RI-p_ardnu-cJkvspEgOrYfQ.woff2) format('woff2')",
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    unicodeRange: "U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB"
});
globalFontFace(titleFont, {
    src: "url(https://fonts.gstatic.com/s/bakbakone/v6/zOL54pXAl6RI-p_ardnu-c1kvspEgOrYfQ.woff2) format('woff2')",
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF"
});
globalFontFace(titleFont, {
    src: "url(https://fonts.gstatic.com/s/bakbakone/v6/zOL54pXAl6RI-p_ardnu-cNkvspEgOo.woff2) format('woff2')",
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
});

export const fontText = style({
    fontFamily: contentFont,
});

export const fontTitle = style({
    fontFamily: titleFont,
});