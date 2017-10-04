import React from 'react';
import { FilterTypes } from '../../constants.js';
import Link from './link.js';

const Filters = () => {
    return (
        <p className="filters">
            <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
            <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
            <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
        </p>
    );
}

export default Filters;