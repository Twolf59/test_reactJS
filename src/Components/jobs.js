import React, {useState, useEffect} from 'react';

const Jobs = () => {
    const [data, setData] = useState([]);

        useEffect( () => {

            const list = require('../jobs_welovedevs_exerice.json');

            setData(list);

        });


        return (
            <div className="card">
                {data}
            </div>
        );
};

export default Jobs;
