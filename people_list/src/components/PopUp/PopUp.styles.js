import { css } from 'emotion';

export const popupContainer = css({
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    height: '100%',
    position: 'absolute',
    top: 0,
    width: '100%',
})

export const popupForm = css({
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0px 7px 13px 0px rgba(179,179,179,1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '4rem',
})

export const popupHeader = css({
    color: '#4B597B',
    fontSize: '1.2rem',
    fontWeight: 'bold',
})

export const popupInput = (isCategory) => css({
    border: '1px solid rgb(189, 188, 188)',
    borderLeft: isCategory && '7px solid #9876f4',
    borderRadius: '6px',
    color: 'rgb(56, 56, 56)',
    marginTop: '1rem',
    outline: 'none',
    padding: '.5rem',
})

const popupButton = {
    boxShadow: '0px 3px 8px 0px rgba(238,237,253,1)',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    marginTop: '1rem',
    outline: 'none',
    padding: '.2rem .85rem',
}

export const popupAddButton = css({
    ...popupButton,
    background: 'linear-gradient(0deg, rgba(115,117,246,1) 35%, rgba(158,117,243,1) 100%)',
    marginRight: '1rem',

    '&:hover':{
        background: 'linear-gradient(0deg, rgb(108, 110, 238) 35%, rgb(154, 112, 238) 100%)',
    }
})

export const popupCloseButton = css({
    ...popupButton,
    background: 'linear-gradient(180deg, rgba(153,153,153,1) 25%, rgba(107,107,107,1) 100%)',

    '&:hover': {
        background: 'linear-gradient(180deg, rgb(143, 143, 143) 25%, rgb(95, 95, 95) 100%)',
    }
})