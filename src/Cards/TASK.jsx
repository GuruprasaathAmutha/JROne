import 'react';
import PropTypes from 'prop-types';


export const TASK = ({ items }) => {


    return (
        <ul>
            <li>{items}</li>
            {items.map((item, index) => (
                <li className='bg-amber-300' key={index}>{item}</li>
            ))}
        </ul>
    )

}


TASK.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
