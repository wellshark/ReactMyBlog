import React from 'react';

export function ErrorMessage(props) {
    let formErrors = [];
    Object.keys(props.formData).map((field) => {
        formErrors.push(props.formData[field].errorMessage);
        return null;
    });
    return (
        <div className='error-messages'>
            {formErrors.map((fieldName, i) => {
                if (fieldName.length > 0) {
                    return (
                            <p key={i} className='error-messages__item'>{fieldName}</p>

                    )
                } else {
                    return '';
                }
            })}
        </div>

    );
}
