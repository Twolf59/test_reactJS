import React, {useEffect, useState} from 'react';
import Card from '../Components/card';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect( () => {

        const list = require('../jobs_welovedevs_exerice.json');

        setData(list);

    });

    return (
        <div>
            {data.map((jobs) =>
                <Card jobs={jobs} key={jobs.title} />
            )}
        </div>
    );
};

export default Home;
