import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/inertia-react";

import Layout from "../Layouts/Default";
import { Inertia } from "@inertiajs/inertia";

export default function AddScore() {
    const { clubs: data } = usePage().props;

    const [clubs, setClubs] = useState(data);
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [homeTeamScore, setHomeTeamScore] = useState(0);
    const [awayTeamScore, setAwayTeamScore] = useState(0);

    const homeTeamChangeHandler = (e) => setHomeTeam(e.target.value);
    const awayTeamChangeHandler = (e) => setAwayTeam(e.target.value);
    const homeTeamScoreChangeHandler = (e) => setHomeTeamScore(Number(e.target.value));
    const awayTeamScoreChangeHandler = (e) => setAwayTeamScore(Number(e.target.value));

    const submitHandler = (e) => {
        e.preventDefault();

        const payload = {
            homeTeam,
            awayTeam,
            homeTeamScore,
            awayTeamScore
        };

        console.log(payload);

        Inertia.post('/clubs/scores', payload);
    };

    useEffect(() => {
        // console.log(clubs);
    });

    return (
        <>
            <Head>
                <title>Tambah Skor | Aptavis Ball</title>
            </Head>
            <Layout>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 mb-5">
                        <h1 className="text-center">Tambah Skor</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <form action="" className="col-md-6" onSubmit={submitHandler}>
                        <div className="row mb-3">
                            <div className="col-4">
                                <label htmlFor="homeTeam" className="form-label d-flex justify-content-center">Kandang</label>
                                <select name="" id="homeTeam" className="form-control" onChange={homeTeamChangeHandler} required>
                                    <option value="">---Pilih klub---</option>
                                    {
                                        clubs.map((club) => (
                                            <option key={club.id} value={ club.id }>{ club.name }</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-4">
                                <label htmlFor="score" className="form-label d-flex justify-content-center">Score</label>
                                <div className="input-group" id="score">
                                    <input type="number" id="homeTeamScore" className="form-control" min="0" value={homeTeamScore} onChange={homeTeamScoreChangeHandler} required/>
                                    <input type="number" id="awayTeamScore" className="form-control" min="0" value={awayTeamScore} onChange={awayTeamScoreChangeHandler} required/>
                                </div>
                            </div>
                            <div className="col-4">
                                <label htmlFor="awayTeam" className="form-label d-flex justify-content-center">Tandang</label>
                                <select name="" id="awayTeam" className="form-control" onChange={awayTeamChangeHandler} required>
                                    <option value="">---Pilih klub---</option>
                                    {
                                        clubs.map((club) => (
                                            <option key={club.id} value={ club.id }>{ club.name }</option>
                                        ))
                                    }
                                </select>
                            </div>                            
                            <div className="col-12">
                                    <button className="btn btn-outline-light d-block w-100 mt-4">Tambah</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};