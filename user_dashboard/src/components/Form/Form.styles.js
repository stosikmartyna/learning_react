import { css } from 'emotion';

export const container = css({
    border: '1px solid lightgrey',
    borderRadius: '6px',
    boxShadow: '0 0 10px lightgrey',
    margin: '0 auto',
    width: '700px'
})

export const containerTitle = css({
    borderBottom: '1px solid lightgrey',
    fontWeight: 'bold',
    margin: '0 auto 2rem',
    padding: '1.5rem 1rem',
})

export const inputsContainer = css({
    display: 'flex',
    padding: '0 3rem',
})

export const labels = css({
    display: 'flex',
    flexDirection: 'column',
    marginRight: '3rem',
    
    '& label': {
        marginBottom: '1.3rem',
        padding: '.5rem 1rem',
    }
})

export const input = (isFormSubmitted) => css({
    border: isFormSubmitted ? '1px solid red' : '1px solid lightgrey',
    borderRadius: '4px',
    marginBottom: isFormSubmitted ? '.3rem' : '1rem',
    outline: 'none',
    padding: '.5rem 1rem',
    width: '440px',
})

export const error = css({
    color: 'red',
    fontSize: '.7rem',
    margin: '0 0 .3rem',
})

export const buttonContainer = css({
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 3.4rem 1rem auto',
})

export const cancelButton = css({
    backgroundColor: '#fff',
    border: '1px solid #D9534F',
    borderRadius: '4px',
    color: '#D9534F',
    cursor: 'pointer',
    marginRight: '1rem',
    outline: 'none',
    padding: '.5rem 1rem',

    '&:hover': {
        border: '1px solid #ce4442',
        color: '#ce4442',
    }
})

export const submitButton = css({
    backgroundColor: '#5CB85C',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    outline: 'none',
    padding: '.5rem 1rem',

    '&:hover': {
        backgroundColor: '#50aa50',
    }
})