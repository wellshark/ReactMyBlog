import React from 'react';

export function ErrorMessage(props) {
    let formErrors = [];
    Object.keys(props.formData).map((field) => {
        formErrors.push(props.formData[field].errorMessage);
        return null;
    });
    return (

            formErrors.map((fieldName, i) => {
                if (fieldName.length > 0) {
                    return (
                        <div key={i} className='error-messages'>

                            <p >{fieldName}</p>
                        </div>

                    )
                } else {
                    return <div key={i}></div>;
                }
            })

    );
}
