import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles.css";

export const img = style([sprinkles({
    square: 'medium',
    borderRadius: 'full',
    position: 'relative'
}), {
    zIndex: 20
}]);

export const backgroundImg = style([
    sprinkles({
        backgroundColor: 'secondary',
        square: 'medium',
        borderRadius: 'full',
        position: 'absolute'
    }),
    {
        top: 0,
        left: 0,
        transform: 'scale(1.1)',
        zIndex: 10
    }
])

export const title = style([
    sprinkles({
        color: 'primary',
        position: 'relative'
    }),
    {
        top: '-3rem',
        zIndex: 30,
    }
])

export const backgroundTitle = style([
    sprinkles({
        color: 'secondary',
        position: 'absolute'
    }),
    {
        top: '-3rem',
        zIndex: 29,
        transform: 'scale(1.1)',
    }
])

export const secondText = style([
    sprinkles({
        color: 'content',
        position: 'relative',
        fontSize: 'small',
        textAlign: 'center'
    }),
    {
        top: '-4rem',
        left: '2.5rem'
    }
])
