import { createTheme } from "@vanilla-extract/css";
import {color} from './vars';

export const [themeClass, vars] = createTheme({
    colors: {
        content: color.content,
        primary: color.primary,
        secondary: color.secondary,
    },
});
