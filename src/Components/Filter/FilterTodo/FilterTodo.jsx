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
        <div className='col-12 col-sm-5 mt-1 d-flex align-items-center justify-content-between'>
            <Select
                className='w-100'
                value={selectedOption}
                onChange={onChange}
                options={options}
                placeholder='Todo' />
        </div>
    );
};

export default FilterTodo;