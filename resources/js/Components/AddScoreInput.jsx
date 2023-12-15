import React from "react";

export default function AddScoreInput({
    index,
    homeTeamChangeHandler,
    clubs,
    matches,
    awayTeamChangeHandler,
    homeTeamScoreChangeHandler,
    awayTeamScoreChangeHandler
}) {
    return (
        <div className="row mb-3">
            <div className="col-4">
                <label htmlFor="homeTeam" className="form-label d-flex justify-content-center">Kandang</label>
                <select name="" id="homeTeam" className="form-control" onChange={homeTeamChangeHandler} index={index} required>
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
                    <input type="number" id="homeTeamScore" className="form-control" min="0" value={matches[index].homeTeamScore} onChange={homeTeamScoreChangeHandler} index={index} required/>
                    <input type="number" id="awayTeamScore" className="form-control" min="0" value={matches[index].awayTeamScore} onChange={awayTeamScoreChangeHandler} index={index} required/>
                </div>
            </div>
            <div className="col-4">
                <label htmlFor="awayTeam" className="form-label d-flex justify-content-center">Tandang</label>
                <select name="" id="awayTeam" className="form-control" onChange={awayTeamChangeHandler} index={index} required>
                    <option value="">---Pilih klub---</option>
                    {
                        clubs.map((club) => (
                            <option key={club.id} value={ club.id }>{ club.name }</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};