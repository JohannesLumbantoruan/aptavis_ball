import React, { useEffect, useRef, useState } from "react";
import { Head, usePage } from "@inertiajs/inertia-react";

import Layout from "../Layouts/Default";
import { Inertia } from "@inertiajs/inertia";

import AddScoreInput from "../Components/AddScoreInput";

export default function AddScore() {
    const { clubs: data } = usePage().props;

    const [clubs, setClubs] = useState(data);
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [homeTeamScore, setHomeTeamScore] = useState(0);
    const [awayTeamScore, setAwayTeamScore] = useState(0);
    const [matches, setMatches] = useState([
        {
            homeTeam: '',
            awayTeam: '',
            homeTeamScore: 0,
            awayTeamScore: 0
        }
    ]);
    const [index, setIndex] = useState(0);
    const [homeClubs, setHomeClubs] = useState(data);
    const [awayClubs, setAwayClubs] = useState([]);

    const { status } = usePage().props.session;

    // const homeTeamChangeHandler = (e) => setHomeTeam(e.target.value);
    // const awayTeamChangeHandler = (e) => setAwayTeam(e.target.value);
    // const homeTeamScoreChangeHandler = (e) => setHomeTeamScore(Number(e.target.value));
    // const awayTeamScoreChangeHandler = (e) => setAwayTeamScore(Number(e.target.value));

    const homeTeamChangeHandler = (e) => {
        const idx = Number(e.target.getAttribute('index'));
        const homeTeam = Number(e.target.value);

        setMatches((prev) => prev.map((match, i) => {
            // const idx = Number(e.target.getAttribute('index'));
    
            if (i === idx) {
                match['homeTeam'] = e.target.value;
                return match;
            }
    
            return match;
        }));

        setAwayClubs(homeClubs.filter((club) => club.id !== homeTeam));
    };
    const awayTeamChangeHandler = (e) => setMatches((prev) => prev.map((match, i) => {
        const idx = Number(e.target.getAttribute('index'));

        if (i === idx) {
            match['awayTeam'] = e.target.value;
            return match;
        }

        return match;
    }));
    const homeTeamScoreChangeHandler = (e) => setMatches((prev) => prev.map((match, i) => {
        const idx = Number(e.target.getAttribute('index'));

        if (i === idx) {
            match['homeTeamScore'] = e.target.value;
            return match;
        }

        return match;
    }));
    const awayTeamScoreChangeHandler = (e) => setMatches((prev) => prev.map((match, i) => {
        const idx = Number(e.target.getAttribute('index'));

        if (i === idx) {
            match['awayTeamScore'] = e.target.value;
            return match;
        }

        return match;
    }));

    const submitHandler = (e) => {
        e.preventDefault();

        // const payload = {
        //     homeTeam,
        //     awayTeam,
        //     homeTeamScore,
        //     awayTeamScore
        // };

        console.log(matches);

        Inertia.post('/clubs/scores', { matches });
    };

    const clickHandler = () => {
        setIndex((prev) => prev + 1);

        setMatches((prev) => ([
            ...prev,
            {
                homeTeam: '',
                awayTeam: '',
                homeTeamScore: 0,
                awayTeamScore: 0
            }
        ]));
    };

    useEffect(() => {
        console.log(matches);
    });

    return (
        <>
            <Head>
                <title>Tambah Skor | Aptavis Ball</title>
            </Head>
            <Layout>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <h1 className="text-center">Tambah Skor</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <form action="" className="col-md-6" onSubmit={submitHandler}>
                        {
                            status && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <p className="text-center m-0 p-0">{status}</p>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )
                        }
                        <div className="col-12">
                            <button className="btn btn-outline-success my-3" onClick={clickHandler} type="button">Tambah form</button>
                        </div>
                        {/* <div className="row mb-3">
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
                        </div> */}
                        {/* <div className="row mb-3">
                            <div className="col-4">
                                <label htmlFor="homeTeam" className="form-label d-flex justify-content-center">Kandang</label>
                                <select name="" id="homeTeam" className="form-control" onChange={homeTeamChangeHandler} index={0} required>
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
                                    <input type="number" id="homeTeamScore" className="form-control" min="0" value={matches[0].homeTeamScore} onChange={homeTeamScoreChangeHandler} index={index} required/>
                                    <input type="number" id="awayTeamScore" className="form-control" min="0" value={matches[0].awayTeamScore} onChange={awayTeamScoreChangeHandler} index={index} required/>
                                </div>
                            </div>
                            <div className="col-4">
                                <label htmlFor="awayTeam" className="form-label d-flex justify-content-center">Tandang</label>
                                <select name="" id="awayTeam" className="form-control" onChange={awayTeamChangeHandler} index={0} required>
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
                        </div> */}
                        {
                            matches.map((match, i) => (
                                <AddScoreInput
                                    index={i}
                                    homeTeamChangeHandler={homeTeamChangeHandler}
                                    homeClubs={homeClubs}
                                    awayClubs={awayClubs}
                                    matches={matches}
                                    awayTeamChangeHandler={awayTeamChangeHandler}
                                    homeTeamScoreChangeHandler={homeTeamScoreChangeHandler}
                                    awayTeamScoreChangeHandler={awayTeamScoreChangeHandler}
                                />
                            ))
                        }
                        <div className="col-12">
                            <button className="btn btn-outline-light d-block w-100 mt-4">Tambah</button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
};