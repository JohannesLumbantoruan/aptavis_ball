import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import Layout from "../Layouts/Default";

export default function AddClub() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const nameChangeHandler = (e) => setName(e.target.value);
    const cityChangeHandler = (e) => setCity(e.target.value);

    const { status } = usePage().props.session;

    const submitHandler = async (e) => {
        e.preventDefault();

        Inertia.post('/clubs', {
            name,
            city
        });
    };

    return (
        <>
            <Head>
                <title>Tambah Klub | Aptavis Ball</title>
            </Head>
            <Layout>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 mb-5">
                        <h1 className="text-center">
                            Tambah Klub
                        </h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <form action="" className="col-md-6" onSubmit={submitHandler}>
                        {
                            status && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <p className="text-center m-0 p-0">{status}</p>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            )
                        }
                        <div className="mb-3">
                            <label htmlFor="clubName" className="form-label">Nama</label>
                            <input type="text" id="clubName" className="form-control" value={name} onChange={nameChangeHandler} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="clubCity" className="form-label">Kota</label>
                            <input type="text" id="clubCity" className="form-control" value={city} onChange={cityChangeHandler} required/>
                        </div>
                        
                        <button className="btn btn-outline-light d-block w-100 mt-4">Submit</button>
                    </form>
                </div>
            </Layout>
        </>
    );
}