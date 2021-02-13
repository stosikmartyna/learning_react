import { css } from 'emotion';

export const container = css({
    border: '1px solid lightgrey',
    borderRadius: '6px',
    margin: 'auto 1rem 2rem 1rem',
})

export const userList = css({
    alignItems: 'center',
    borderBottom: '1px solid lightgrey',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto 1rem',

    '& p': {
        fontWeight: 'bold',
        marginLeft: '1rem',
    },

    '& button': {
        backgroundColor: '#0375D8',
        border: 'none',
        borderRadius: '4px',
        color: '#fff',
        cursor: 'pointer',
        margin: '1rem 1rem 1rem 0',
        outline: 'none',
        padding: '.5rem 2rem',

        '&:hover': {
            backgroundColor: '#036dc4',
        }
    }
})

export const table = css({
    borderCollapse: 'collapse',
    border: '1px solid lightgrey',
    margin: '0 auto 1rem',
    width: '98%',

    '& th': {
        backgroundColor: '#F5F5F5',
        borderBottom: '1px solid lightgrey',
        fontWeight: 'lighter',
        padding: '1rem',
    },

    '& td': {
        borderBottom: '1px solid lightgrey',
        padding: '.7rem',
        textAlign: 'center',
    }
})

export const editButton = css({
    backgroundColor: '#F0AD4E',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    outline: 'none',
    padding: '.5rem 1.5rem',

    '&:hover': {
        backgroundColor: '#eaa13a',
    }
})

export const deleteButton = css({
    backgroundColor: '#D9534F',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    outline: 'none',
    padding: '.5rem 1rem',

    '&:hover': {
        backgroundColor: '#ce4442',
    }
})