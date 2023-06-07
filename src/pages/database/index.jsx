import React, { useState } from "react";

import Header from "../../component/header";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";

const Database = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const[currentData, setCurrentData] = useState([]);
  const [data, setData] = useState([]);

  const getData = async (page) => {
    try {
      const response = await axios.get(
        "http://localhost/armfield/public/api/data-plant?page=" + page,
        {
          params: {
            limit: 10,
          },
        }
      );
      //   console.log(response.data?.data?.data);
      setTotalPages(response.data?.data?.last_page);
      setData(response.data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(1);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getData(page);
  };

  const renderPage = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {" "}
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

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
          <ul className="pagination">
            <li
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<"}
            </li>
            {renderPage()}
            <li
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {">"}
            </li>
          </ul>
        </table>
      </div>
    </>
  );
};

export default Database;
