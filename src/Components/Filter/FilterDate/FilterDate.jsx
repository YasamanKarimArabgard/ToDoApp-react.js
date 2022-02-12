import React from 'react';
import Select from 'react-select';


const options = [
    { value: 'Default', label: 'Default' },
    { value: 'Latest', label: 'Latest' },
    { value: 'Earliest', label: 'Earliest' }

]

const FilterDate = ({ selectedDateOption , onChange }) => {

    return (
        <div className='col-6 col-sm-12 mt-1 d-flex align-items-center justify-content-between'>
        <p className='filter-label'>Date : </p>
            <Select options={options}
                value={selectedDateOption}
                onChange={onChange} />
        </div>
    );
};

export default FilterDate;