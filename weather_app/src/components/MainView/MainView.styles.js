import { css } from 'emotion';

export const main = css({
    background: 'url("img/background.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    height: '100vh',
    minWidth: '350px',
    width: '100%',
});

export const container = css({
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '12px',
    boxShadow: '0 0 7px grey',
    margin: 'auto',
    minWidth: '350px',
    padding: '4rem 0',
    textAlign: 'center',
    width: '40%',

    '& h1': {
        color: '#63798e',
        fontSize: '2rem',
        fontWeight: 'lighter',
        margin: '.5rem 0',
    }
})

export const input = css({
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid #63798e',
    borderRadius: '6px',
    color: '#113a63',
    fontSize: '1rem',
    margin: '1rem auto',
    outline: 'none',
    padding: '.5rem 1rem',
})

export const date = css({
    color: '#63798e'
})

export const location = css({
    color: '#113a63',
})

export const temperatureBox = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '1.5rem 0',
})

export const temperatureMain = css({
    color: '#113a63',
    fontWeight: 'bold',
    fontSize: '4rem',
    margin: '0 3rem'
})

export const temperatureMinMax = css({
    color: '#113a63',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
    paddingTop: '.5rem',
})

export const iconContainer = css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',

    '& p': {
        color: '#63798e',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '0 1rem',
    },

    '& img': {
        width: '70px',
    }
})