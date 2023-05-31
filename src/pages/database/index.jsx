import React, {useState} from 'react';

import Header from "../../component/header"
import './style.css'

const Database = () => {

    const [data, setData] = useState([
        {
            id: 1,
            f1: 'Anom',
            f2: 'Anom',
            f3: 'Anom',
            f4: 'Anom',
            f5: 'Anom',
            f6: 'Anom',
            f7: 'Anom',
            f8: 'Anom',
            f9: 'Anom',
            f10: 'Anom',
            f11: 'Anom',
            f12: 'Anom',
        },{
            id: 2,
            f1: 'Totok',
            f2: 'Totok',
            f3: 'Totok',
            f4: 'Totok',
            f5: 'Totok',
            f6: 'Totok',
            f7: 'Totok',
            f8: 'Totok',
            f9: 'Totok',
            f10: 'Totok',
            f11: 'Totok',
            f12: 'Totok',
        },{
            id: 3,
            f1: 'yono',
            f2: 'yono',
            f3: 'yono',
            f4: 'yono',
            f5: 'yono',
            f6: 'yono',
            f7: 'yono',
            f8: 'yono',
            f9: 'yono',
            f10: 'yono',
            f11: 'yono',
            f12: 'yono',
        }
    ])
    return (
        <>
            <Header/>
            <h1>Data Plant</h1>
            <div className="tabel">
                <table>
                    <tr>
                        <th>Tank A<br/>Level L1 <br/>(mm)</th>
                        <th>Feed Flow<br/>F1 (ml/mm)</th>
                        <th>Holding<br/>Temperature T1</th>
                        <th>Heater<br/>Temperature T2</th>
                        <th>Heated Feed<br/>Temperature T4</th>
                        <th>Power<br/>Heater</th>
                        <th>Pump N1 (%)</th>
                        <th>Pump N2 (%)</th>
                        <th>Set Point T1</th>
                        <th>Set Point T2</th>
                        <th>Valve<br/>Tank A</th>
                        <th>Timestamp</th>
                    </tr>
                    <tbody>
                        {data.map((row) => (
                            <tr key = {row.id}>
                                <td>{row.f1}</td>
                                <td>{row.f2}</td>
                                <td>{row.f3}</td>
                                <td>{row.f4}</td>
                                <td>{row.f5}</td>
                                <td>{row.f6}</td>
                                <td>{row.f7}</td>
                                <td>{row.f8}</td>
                                <td>{row.f9}</td>
                                <td>{row.f10}</td>
                                <td>{row.f11}</td>
                                <td>{row.f12}</td>
                            </tr>
                        ))}
                    </tbody>
                    {/* <tr>
                        <td>Anom</td>
                        <td>19</td>
                        <td>Male</td>
                        <td>Anom</td>
                        <td>19</td>
                        <td>Male</td>
                        <td>Anom</td>
                        <td>19</td>
                        <td>Male</td>
                        <td>Anom</td>
                        <td>19</td>
                        <td>Male</td>
                    </tr>
                    <tr>
                        <td>Megha</td>
                        <td>19</td>
                        <td>Female</td>
                        <td>Megha</td>
                        <td>19</td>
                        <td>Female</td>
                        <td>Megha</td>
                        <td>19</td>
                        <td>Female</td>
                        <td>Megha</td>
                        <td>19</td>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <td>Subham</td>
                        <td>25</td>
                        <td>Male</td>
                        <td>Subham</td>
                        <td>25</td>
                        <td>Male</td>
                        <td>Subham</td>
                        <td>25</td>
                        <td>Male</td>
                        <td>Subham</td>
                        <td>25</td>
                        <td>Male</td>
                    </tr> */}
                </table>
            </div>
        </>
    )
}

export default Database;