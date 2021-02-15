import { css } from 'emotion';

export const container = css ({
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '12px',
    boxShadow: '0 0 7px grey',
    height: '70%',
    padding: '1rem 0',
    textAlign: 'center',
    width: '40%',

    '& h1': {
        color: '#63798e',
        fontSize: '2rem',
        fontWeight: 'lighter',
        margin: '1rem 0 .5rem',
    }
})

export const input = css ({
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid #113a63',
    color: '#113a63',
    fontSize: '1rem',
    margin: '1rem auto',
    outline: 'none',
    padding: '.5rem 1rem',
})

export const date = css({
    color: '#63798e'
})

export const temperature = css({
    color: '#113a63',
    fontWeight: 'bold',
    fontSize: '4rem',
    margin: '0'
})

export const temperatureMinMax = css({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    paddingTop: '1rem',
    width: '20%',

        '& p': {
            color: '#113a63',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            margin: 0,
            paddingTop: '.5rem',
        }
})

export const iconContainer = css({
    marginTop: '1.5rem',

    '& p': {
        color: '#63798e',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: 0,
    },

    '& img': {
        width: '70px',
    }
})