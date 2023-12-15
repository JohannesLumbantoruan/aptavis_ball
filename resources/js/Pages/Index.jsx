import React, { useEffect, useState } from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import Layout from "../Layouts/Default";

export default function Index() {
        // const { props } = usePage();
        const [data, setData] = useState(usePage().props.clubs);

        useEffect(() => {
            console.log(data);
        });

        return (
        <>
            <Head>
                <title>Home | Aptavis Ball</title>
            </Head>
            <Layout>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 mb-5">
                        <h1 className="text-center">KLASEMEN</h1>
                    </div>
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Klub</th>
                                    <th scope="col">Ma</th>
                                    <th scope="col">Me</th>
                                    <th scope="col">S</th>
                                    <th scope="col">K</th>
                                    <th scope="col">GM</th>
                                    <th scope="col">GK</th>
                                    <th scope="col">Point</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((klub, i) => (
                                        <tr>
                                            <td scope="row">{i + 1}</td>
                                            <td>{ klub.name ?? 0 }</td>
                                            <td>{ klub.mp ?? 0 }</td>
                                            <td>{ klub.w ?? 0 }</td>
                                            <td>{ klub.d ?? 0 }</td>
                                            <td>{ klub.l ?? 0 }</td>
                                            <td>{ klub.gf ?? 0 }</td>
                                            <td>{ klub.ga ?? 0 }</td>
                                            <td>{ klub.point ?? 0 }</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    );
};