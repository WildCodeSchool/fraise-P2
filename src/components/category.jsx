import React from 'react'

function Category({regime, colorB}) {
    return (
        <div className={colorB}>{regime}
        </div>
    )
}

export default Category;

