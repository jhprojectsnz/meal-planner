import { useEffect, useState, useMemo } from "react";

export default function Filters({setShowFilters, setFilters, previousFilters}){
    
    //add filters to the array below to add them to the filters list
    const filters = useMemo(() =>[
        {'text' : 'Quick Meals (<30 mins)', 
        'URL extension': 'maxReadyTime=20'},
        {'text' : 'Peanut Free', 
        'URL extension' : 'intolerances=Peanut'},
        {'text' : 'Gluten Free', 
        'URL extension' : 'diet=Gluten Free'},
        {'text' : 'Dairy Free', 
        'URL extension' : 'intolerances=Dairy'},
        {'text' : 'Ketogenic', 
        'URL extension' : 'diet=Ketogenic'},
        ]
    , [])

    //An array of equal length to filters which tracks the checked state of each filter
    //Is the inital array needed here? or is this just replaced by the initialCheckedState array?
    const [checkedState, setCheckedState] = useState(
        new Array(filters.length).fill(false)
    )

    //Updates checked state based on previously selected filters
    //An alternative to lifting checkedState and filters list up into newMeal
    useEffect(()=>{
        if(filters.length > 0) {
            const previousFiltersText = previousFilters.reduce((arr, filt) => [...arr, filt.text],[])
            const initialCheckedState = filters.map(filter => {
                return previousFiltersText.includes(filter['text']) ? true : false
            })
            setCheckedState(initialCheckedState) 
        }
    },[filters, previousFilters])
   

    function handleOnChange(position) {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    function handleSubmit(e) {
        const selectedFilters = filters
        .filter((filter, index) => checkedState[index])
        setFilters(selectedFilters)
        setShowFilters(false)
    }

    return (
        <div className="filters-container">
            <h5>Select Filters</h5>
            <ul className="filters-list">
                {filters.map((filter, index) => {
                    return (
                        <li className="filter-option" key={index}>
                            <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={filter.text}
                                value={filter.text}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                            />
                            <label className="filter-labels" htmlFor={`custom-checkbox-${index}`}>{filter.text}</label>
                        </li>
                    );
                })}
            </ul>
            <div className="btn-container">
                <button className="btn" onClick={() => setShowFilters(false)}>Go back</button>
                <button className="bold-btn" onClick={handleSubmit}>Select</button>
            </div>
        </div>
    )
}