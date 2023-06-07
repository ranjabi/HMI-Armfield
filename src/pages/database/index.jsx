import React, { useState, useEffect } from "react";
import Header from "../../component/header";
import "./style.css";
import axios from "axios";
import { Url } from "../../api/url";

const Database = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(8);
  const [data, setData] = useState([]);

  const getData = async (page) => {
    try {
      const response = await axios.get(
        Url("data-plant?page=" + page),
        {
          params: {
            limit: 15,
          },
        }
      );
      //   console.log();
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

  const pushPage = (pageNumbers, i) => {
    pageNumbers.push(
      <li
        key={i}
        className={currentPage === i ? "active" : ""}
        onClick={() => handlePageChange(i)}
      >
      {i}
      </li>
    );
  }

  const renderPage = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages < 5) {
        pushPage(pageNumbers,i);
      } else {
        if(currentPage < totalPages - 3){
          if ((i < currentPage + 3 && i >= currentPage-1)|| i == totalPages) {
            pushPage(pageNumbers,i);
          } else if (i == currentPage + 3) {
            pageNumbers.push(<li>...</li>);
          }
        }else{
          if(i >= totalPages - 3 || i <= totalPages - currentPage + 1 ){
            pushPage(pageNumbers,i);
          }else if(i == totalPages - 4){
            pageNumbers.push(<li>...</li>);
          }
        }
      }
    }
    return pageNumbers;
  };

  return (
    <>
      <Header />
      <div className="database">
        <h1>Data Plant</h1>
        <div className="tabel">
          <table>
            <tr>
              <th>
                Tank A <br />
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
              {data.map((row) => {
                var dateFormat = new Date(row.created_at);
                var date =
                  dateFormat.getDate() +
                  "/" +
                  (dateFormat.getMonth() + 1) +
                  "/" +
                  dateFormat.getFullYear() +
                  " " +
                  dateFormat.getHours() +
                  ":" +
                  dateFormat.getMinutes() +
                  ":" +
                  dateFormat.getSeconds();
                return (
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
                    <td>{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ul className="pagination">
            <li
              className={currentPage > 1 ? " " : "hidden"}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {"<"}
            </li>
            {renderPage()}
            <li
              className={currentPage < totalPages ? " " : "hidden"}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {">"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Database;
