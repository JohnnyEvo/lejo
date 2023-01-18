import {globalStyle} from "@vanilla-extract/css";
import {style} from '@vanilla-extract/css';
import {sprinkles} from '@/styles/sprinkles.css';
import {color} from "@/styles/vars";

export const container = style([sprinkles({
    display: 'grid',
    marginX: {
        mobile: 'none',
        tablet: 'medium',
        desktop: 'large'
    },
    padding: {
        mobile: 'xs',
        tablet: 'medium',
        desktop: 'large'
    }
}), {
    background: 'white',
    height: "100vh",
}]);

globalStyle('body', {
    height: "100vh",
    background: color.secondary,
});