import React from "react";

const Filter = ({handleFilter}) => {
    return(
        <div>
            search name in the phonebook: <input onChange={handleFilter} />
        </div>
    )
}

export default Filter