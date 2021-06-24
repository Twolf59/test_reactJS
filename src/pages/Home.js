import React, {useEffect, useState} from 'react';
import Card from '../Components/card';
import NavBar from '../Components/NavBar';
import {useForm} from "react-hook-form";

const Home = () => {

    const [data, setData] = useState([]);
    let listJobs = require('../jobs_welovedevs_exerice.json');
    useEffect( () => {

        setData(listJobs);

    }, [listJobs]);


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register, handleSubmit, formState: { errors }, formState  } = useForm({
        mode: 'onChange'
    });

    const {isSubmitting, isValid} = formState;


    const onSubmit = (data, e) => {

        const genererId = () => {
            let uuid = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            for ( var i = 0; i < 20; i++ ) {
                uuid += characters.charAt(Math.floor(Math.random() * 36));
            }
            return uuid;
        }

        console.log(data);

        let donnees = {
            "title": data.titre,
            "descriptionPreview": data.description,
            "id": genererId()
        };
        e.target.reset();

        listJobs.push(donnees);
    }

    return (

        <div>
            <NavBar />

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-form">
                        <div >
                            <p>Ajouter un job</p>
                        </div>
                        <div className="row-3">
                            <input type="text" placeholder="Titre" id="titre" {...register("titre", {
                                required: 'Entrez un titre'
                            })}/>
                        </div>
                        <div className="row-2">
                            <textarea placeholder="description" id="desc" {...register("description", {
                                required: 'Entrez une description'
                            })}/>
                        </div>
                        <div>
                            <input type="submit" value="Confirmer" id="form" />
                        </div>
                    </div>
                </form>
            </div>

            {data.map((jobs) =>
                <Card jobs={jobs} key={jobs.id} />
            )}


        </div>

    );
};

export default Home;
