import {
    defineProperties,
    createSprinkles
} from '@vanilla-extract/sprinkles';

import * as vars from './vars';
import {vars as theming} from './theme.css';

const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: { '@media': 'screen and (min-width: 768px)' },
        desktop: { '@media': 'screen and (min-width: 1024px)' }
    },
    defaultCondition: 'mobile',
    properties: {
        display: ['none', 'flex', 'block', 'inline', 'grid'],
        flexDirection: ['row', 'column'],
        justifyContent: [
            'stretch',
            'flex-start',
            'center',
            'flex-end',
            'space-around',
            'space-between'
        ],
        alignItems: [
            'stretch',
            'flex-start',
            'center',
            'flex-end'
        ],
        paddingTop: vars.space,
        paddingBottom: vars.space,
        paddingLeft: vars.space,
        paddingRight: vars.space,
        marginTop: vars.space,
        marginBottom: vars.space,
        marginLeft: vars.space,
        marginRight: vars.space,
        fontSize: vars.fontSize,
        width: vars.blockSize,
        height: vars.blockSize,
        borderRadius: vars.radius,
        backgroundColor: theming.colors,
        color: theming.colors,
        position: ['relative', 'absolute'],
        textAlign: ['center', 'right', 'left']
    },
    shorthands: {
        padding: [
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight'
        ],
        margin: [
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight'
        ],
        paddingX: ['paddingLeft', 'paddingRight'],
        paddingY: ['paddingTop', 'paddingBottom'],
        marginX: ['marginLeft', 'marginRight'],
        marginY: ['marginTop', 'marginBottom'],
        placeItems: ['justifyContent', 'alignItems'],
        square: ['height', 'width'],
    }
});

export const sprinkles = createSprinkles(
    responsiveProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
