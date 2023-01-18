import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles.css";
import {vars} from "@/styles/theme.css";

export const question = style([
    sprinkles({
        marginTop: 'small',
        borderRadius: 'medium',
        height: 'small',
        paddingX: 'small',
        fontSize: 'normal'
    }),
    style({
        border: '1px solid #eee',
        ':focus': {
            border: '1px',
            borderColor: vars.colors.secondary,
            outlineColor: vars.colors.secondary,
        }
    })
])

export const submit = style([
    sprinkles({
        borderRadius: 'medium',
        backgroundColor: 'primary',
        marginTop: 'small',
    }),
    style({
        padding: '0.75rem 4px',
        border: 0,
        cursor: 'pointer',
        transition: '.3s ease all',
        ':hover': {
            transition: '.3s ease all',
            background: vars.colors.secondary,
        },
        ':active': {
            fontWeight: 'bold',
        }
    })
])

export const answer = sprinkles({
    marginTop: 'medium'
})