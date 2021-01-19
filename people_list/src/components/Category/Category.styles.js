import { css } from 'emotion';
import { addButton } from '../common.styles';

export const categoryBox = css({
    borderLeft: '7px solid #9876f4',
    borderRadius: '6px',
    boxShadow: '0px 3px 8px 0px rgba(238,237,253,1)',
    margin: '0 auto 1rem auto',
    padding: '1rem 3rem',
    maxWidth: '280px',
})

export const categoryHeader = css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
})

export const categoryHeaderTitle = css({
    color: '#4B597B',
    fontSize: '1.3rem',
    fontWeight: 'bolder',
    paddingRight: '7rem',
})

export const categoryButtons = css({
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '52px',
})

export const addButtonSmall = css({
    ...addButton,
    background: 'linear-gradient(180deg, rgba(133,242,163,1) 28%, rgba(44,232,228,1) 100%)',
    boxShadow: '0px 3px 8px 0px rgba(204,250,245,1)',
    fontSize: '1rem',
    height: '22px',
    width: '22px',
})

export const removeButton = css({
    ...addButton,
    background: 'linear-gradient(180deg, rgba(248,110,148,1) 28%, rgba(242,77,105,1) 100%)',
    boxShadow: '0px 3px 8px 0px rgba(255,213,219,1)',
    fontSize: '1rem',
    height: '22px',
    width: '22px',
})

export const subcategoryBox = css({
    alignItems:'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '2rem',
})

export const subcategoryText = css({
    alignItems: 'center',
    display: 'flex',
})

export const subcategoryBoxPoint = css({
    color: '#B7BDCA',
    marginRight: '1rem',
})

export const subcategoryBoxTitle = css({
    color: '#4B597B',
    fontSize: '1.1rem',
    fontWeight: 'bolder',
    textAlign: 'left',
})