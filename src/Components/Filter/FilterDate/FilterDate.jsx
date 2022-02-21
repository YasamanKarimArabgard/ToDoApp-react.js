import React from 'react';
import Select from 'react-select';
// import ".././Fiter.css"


const options = [
    { value: 'Default', label: 'Default' },
    { value: 'Latest', label: 'Latest' },
    { value: 'Earliest', label: 'Earliest' }

]

const FilterDate = ({ selectedDate, onChange }) => {

    return (
        <div className='col-6 col-sm-12 mt-1 d-flex align-items-center justify-content-between'>
            <p className='col-2 col-sm-1 filter-label px-1'>Date:</p>
            <Select
                className='col-9 col-sm-11'
                options={options}
                value={selectedDate}
                onChange={onChange} />
        </div>
    );
};

export default FilterDate;