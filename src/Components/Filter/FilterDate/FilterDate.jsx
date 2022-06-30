import Select from 'react-select';
// import ".././Fiter.css"


const options = [
    { value: 'Latest', label: 'Latest' },
    { value: 'Earliest', label: 'Earliest' }
]

const FilterDate = ({ selectedDate, onChange }) => {

    return (
        <div className='col-12 col-sm-5 mt-1 d-flex align-items-center justify-content-between mx-sm-2'>
            <Select
                className='w-100'
                options={options}
                value={selectedDate}
                onChange={onChange}
                placeholder='Date' />
        </div>
    );
};

export default FilterDate;