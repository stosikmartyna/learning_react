import { css } from 'emotion';
import { addButton } from '../common.styles';

export const peopleContainer = css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0',
})

export const peopleHeader = css({
    background: 'linear-gradient(0deg, rgba(115,117,246,1) 35%, rgba(158,117,243,1) 100%)',
    borderRadius: '3px',
    boxShadow: '0px 3px 8px 0px rgba(238,237,253,1)',
    color: 'white',
    fontWeight: 'bold',
    marginRight: '1rem',
    padding: '.8rem 5rem',
})

export const addButtonBig = css({
    ...addButton,
    background: 'linear-gradient(180deg, rgba(133,242,163,1) 28%, rgba(44,232,228,1) 100%)',
    boxShadow: '0px 3px 8px 0px rgba(204,250,245,1)',
    fontSize: '2rem',
    height: '40px',
    width: '40px',
})