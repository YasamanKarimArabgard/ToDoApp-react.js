import React from 'react';
import Select from 'react-select';
// import ".././Fiter.css"

const options = [
    { value: 'All', label: 'All' },
    { value: 'Notcompleted', label: 'Notcompleted' },
    { value: 'Completed', label: 'Completed' },
];

const FilterTodo = ({ selectedOption, onChange }) => {

    return (
        <div className='col-6 col-sm-12 mt-1 d-flex align-items-center justify-content-between'>
            <p className='filter-label px-1'>todo :</p>
            <Select
                className='col-8 col-sm-11'
                value={selectedOption}
                onChange={onChange}
                options={options} />
        </div>
    );
};

export default FilterTodo;