import { css } from 'emotion';

export const container = css({
    border: '1px solid lightgrey',
    borderRadius: '6px',
    margin: 'auto 1rem 2rem 1rem',
})

export const containerTitle = css({
    borderBottom: '1px solid lightgrey',
    fontWeight: 'bold',
    margin: '0 auto 2rem',
    padding: '1.5rem 1rem',
})

export const inputsContainer = css({
    alignItems: 'end',
    display: 'flex',
    margin: '0 auto',
    width: '50%'
})
export const labels = css({
    display: 'flex',
    flexDirection: 'column',
    marginRight: '3rem',
    
    '& label': {
        marginBottom: '1rem'
    }
})

export const inputs = css({
    display: 'flex',
    flexDirection: 'column',
})

export const input = (isFormSubmitted) => css({
    border: isFormSubmitted ? '1px solid red' : '1px solid lightgrey',
    borderRadius: '4px',
    marginBottom: isFormSubmitted ? '.3rem' : '1rem',
    outline: 'none',
    width: '25rem'
})

export const error = css({
    color: 'red',
    fontSize: '.7rem',
    margin: '0 0 .3rem',
})

export const buttonContainer = css({
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '0 3rem 1rem 0',
    width: 'content'
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