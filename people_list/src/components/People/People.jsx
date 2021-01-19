import React, { useState } from 'react';
import { addButtonBig, peopleContainer, peopleHeader } from './People.styles';
import { Category } from '../Category/Category';
import { PopUp } from '../PopUp/PopUp';

export const People = () => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    const openPopUp = () => {
        setIsPopUpOpen(true);
    }

    const closePopUp = () => {
        setIsPopUpOpen(false);
    }

    const addCategory = (value) => {
        const categoryToAdd = {title: value, subcategories: []}

        if (value) {
            setCategories([...categories, categoryToAdd])
            closePopUp();
        }
    }

    const removeCategory = (categoryToRemove) => {
        const filteredCategories = categories.filter(category => category !== categoryToRemove);
        setCategories(filteredCategories);
    }

    const addSubcategory = (indexOfCategory, value) => {
        const updatedState = categories.map((category, i) => {
            if (i === indexOfCategory) {
                return {
                    ...category,
                    subcategories: [...category.subcategories, value]
                }
            } else {
                return category;
            }
        })

        setCategories(updatedState);
    }

    const removeSubcategory = (indexOfCategory, value) => {
        const updatedState = categories.map((category, i) => {
            if (i === indexOfCategory) {
                return {
                    ...category,
                    subcategories: category.subcategories.filter(category => category !== value)
                }
            } else {
                return category;
            }
        })

        setCategories(updatedState);
    }

    return (
        <>
            <div className={peopleContainer}>
                <span className={peopleHeader}>People</span>
                <button className={addButtonBig} onClick={openPopUp}>+</button>
            </div>

            {isPopUpOpen && <PopUp type={'category'} onSubmit={addCategory} closePopUp={closePopUp} />}
            
            {categories.map((category, index) => {
                return (
                    <Category 
                        key={index} 
                        indexOfCategory={index}
                        category={category}
                        addSubcategory={addSubcategory}
                        removeSubcategory={removeSubcategory}
                        removeCategory={() => removeCategory(category)} 
                    />
                )
            })}
        </>
    )
} 