import Header from "../../component/header";
import "./style.css";
import Arrows from "../../assets/ArrowsOut.svg";
import Minus from "../../assets/MinusCircle.svg";
import Hand from "../../assets/Hand.svg";
import Plus from "../../assets/PlusCircle.svg";
import Graph from "../../assets/Chart.svg";
import LineChart from "../../component/linechart";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [meanTankA, setMeanTankA] = useState(0);
  const [meanPump1, setMeanPump1] = useState(0);
  const [meanPump2, setMeanPump2] = useState(0);
  const [meanHeater, setMeanHeater] = useState(0);
  const [timestamp, setTimestamp] = useState([]);
  const [setPointT1, setSetPointT1] = useState([]);
  const [holdingT1, setHoldingT1] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost/armfield/public/api/data-plant-all"
      );
      let data = response.data?.data;
      let sumTankA = 0;
      let sumPump1 = 0;
      let sumPump2 = 0;
      let sumHeater = 0;

      let tempTime = [];
      let tempSetPointT1 = [];
      let tempHoldingT1 = [];
      data.forEach((e) => {
        tempSetPointT1.push(e.set_point_t1);
        tempHoldingT1.push(e.holding_t1);

        sumTankA = sumTankA + e.tank_a;
        sumPump1 = sumPump1 + e.pump_n1;
        sumPump2 = sumPump2 + e.pump_n2;
        sumHeater = sumHeater + e.power_heater;

        var dateFormat = new Date(e.created_at);
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
        tempTime.push(date);
      });
      setMeanTankA(sumTankA / data.length);
      setMeanPump1(sumPump1 / data.length);
      setMeanPump2(sumPump2 / data.length);
      setMeanHeater(sumHeater / data.length);
      setTimestamp(tempTime);
      setSetPointT1(tempSetPointT1);
      setHoldingT1(tempHoldingT1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const chartDataTemp1 = {
    labels: timestamp,
    datasets: [
      {
        label: "Set Point",
        data: setPointT1,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "T1",
        data: holdingT1,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Header />
      <div className="dashbox">
        <div className="grid-container">
          <div className="item">
            <h5>Level Tank A (mm)</h5>
            <p>{meanTankA}</p>
          </div>
          <div className="item">
            <h5>Pump N1 (%)</h5>
            <p>{meanPump1}</p>
          </div>
          <div className="item">
            <h5>Pump N2 (%)</h5>
            <p>{meanPump2}</p>
          </div>
          <div className="item">
            <h5>Heater Power (Kwh)</h5>
            <p>{meanHeater}</p>
          </div>
          <div className="item item5">
            <div className="graphttl">
              <h6>Holding Temperatur T1</h6>
              <div className="imgbox">
                <img src={Arrows} />
                <img src={Plus} />
                <img src={Minus} />
                <img src={Hand} />
              </div>
            </div>
            <LineChart data={chartDataTemp1} />
          </div>
          <div className="item item6">
            <div className="graphttl">
              <h6>Heater Temperatur T2</h6>
              <div className="imgbox">
                <img src={Arrows} />
                <img src={Plus} />
                <img src={Minus} />
                <img src={Hand} />
              </div>
            </div>
            <LineChart data={chartDataTemp1} />
          </div>
          <div className="item item7">
            <div className="graphttl">
              <h6>Heated Feed Temperatur T4</h6>
              <div className="imgbox">
                <img src={Arrows} />
                <img src={Plus} />
                <img src={Minus} />
                <img src={Hand} />
              </div>
            </div>
            <LineChart data={chartDataTemp1} />
          </div>
          <div className="item item8">
            <div className="graphttl">
              <h6>Feed Flow F1</h6>
              <div className="imgbox">
                <img src={Arrows} />
                <img src={Plus} />
                <img src={Minus} />
                <img src={Hand} />
              </div>
            </div>
            <LineChart data={chartDataTemp1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
