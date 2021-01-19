import React, { useState } from 'react';
import { PopUp } from '../PopUp/PopUp';
import { addButtonSmall, categoryBox, categoryHeader, categoryHeaderTitle, categoryButtons, subcategoryBox, subcategoryText, subcategoryBoxPoint, subcategoryBoxTitle, removeButton } from './Category.styles';

export const Category = ({indexOfCategory, category, removeCategory, addSubcategory, removeSubcategory}) => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const {title, subcategories} = category;

    const openPopUp = () => {
        setIsPopUpOpen(true);
    }

    const closePopUp = () => {
        setIsPopUpOpen(false);
    }

    const handleSubmit = (value) => {
        if (value) {
            addSubcategory(indexOfCategory, value)
            setIsPopUpOpen(false);
        }
    }

    return (
        <>
            <div className={categoryBox}>
                <div className={categoryHeader}>
                    <span className={categoryHeaderTitle}>{title}</span>
                    <div className={categoryButtons}>
                        <button className={addButtonSmall} onClick={openPopUp}>+</button>
                        <button className={removeButton} onClick={removeCategory}>-</button>
                    </div>
                </div>
                {subcategories.map((subcategory, index) => {
                    return (
                        <div key={index} className={subcategoryBox}>
                            <div className={subcategoryText}>
                                <p className={subcategoryBoxPoint}>Or</p>
                                <p className={subcategoryBoxTitle}>{subcategory}</p>
                            </div>    
                            <button className={removeButton} onClick={() => removeSubcategory(indexOfCategory, subcategory)}>-</button>
                        </div>
                    )
                })}
            </div>

            {isPopUpOpen && (
                <PopUp type={'subcategory'} closePopUp={closePopUp} onSubmit={handleSubmit} />
            )}
        </>
    )
}