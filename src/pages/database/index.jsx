import React, { useState } from "react";

import Header from "../../component/header";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";

const Database = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/armfield/public/api/data-plant?page=" + currentPage,
        {
          params: {
            limit: 10,
          },
        }
      );
      //   console.log(response.data?.data?.data);
      return setData(response.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <h1>Data Plant</h1>
      <div className="tabel">
        <table>
          <tr>
            <th>
              Tank A<br />
              Level L1 <br />
              (mm)
            </th>
            <th>
              Feed Flow
              <br />
              F1 (ml/mm)
            </th>
            <th>
              Holding
              <br />
              Temperature T1
            </th>
            <th>
              Heater
              <br />
              Temperature T2
            </th>
            <th>
              Heated Feed
              <br />
              Temperature T4
            </th>
            <th>
              Power
              <br />
              Heater
            </th>
            <th>Pump N1 (%)</th>
            <th>Pump N2 (%)</th>
            <th>Set Point T1</th>
            <th>Set Point T2</th>
            <th>Set Point T3</th>
            <th>
              Valve
              <br />
              Tank A
            </th>
            <th>Timestamp</th>
          </tr>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.tank_a}</td>
                <td>{row.feed_flow_f1}</td>
                <td>{row.holding_t1}</td>
                <td>{row.heater_t2}</td>
                <td>{row.heated_feed_t4}</td>
                <td>{row.power_heater}</td>
                <td>{row.pump_n1}</td>
                <td>{row.pump_n2}</td>
                <td>{row.set_point_t1}</td>
                <td>{row.set_point_t2}</td>
                <td>{row.set_point_t3}</td>
                <td>{row.valve_tank_a}</td>
                <td>{row.created_at}</td>
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
  );
};

export default Database;
