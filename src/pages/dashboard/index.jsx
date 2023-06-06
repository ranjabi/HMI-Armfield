import Header from '../../component/header'
import './style.css'
import Arrows from '../../assets/ArrowsOut.svg'
import Minus from '../../assets/MinusCircle.svg'
import Hand from '../../assets/Hand.svg'
import Plus from '../../assets/PlusCircle.svg'
import Graph from '../../assets/Chart.svg'
import LineChart from '../../component/linechart'

const Dashboard = () => {
    const chartData = {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [
          {
            label: 'Data Set 1',
            data: [8, 8, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Data Set 2',
            data: [7, 2, 5, 8, 3, 7],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
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
                        <p>190</p>
                    </div>
                    <div className="item">
                        <h5>Pump N1 (%)</h5>
                        <p>60</p>
                    </div>
                    <div className="item">
                        <h5>Pump N2 (%)</h5>
                        <p>80</p>
                    </div>
                    <div className="item">
                        <h5>Heater Power (Kwh)</h5>
                        <p>0.37</p>
                    </div>
                    <div className='item item5'>
                        <div className="graphttl">
                            <h6>Holding Temperatur T1</h6>
                            <div className="imgbox">
                                <img src={Arrows}/>
                                <img src={Plus}/>
                                <img src={Minus}/>
                                <img src={Hand}/>
                            </div>
                        </div>   
                        <LineChart data={chartData}/> 
                    </div>
                    <div className="item item6">
                        <div className="graphttl">
                            <h6>Heater Temperatur T2</h6>
                            <div className="imgbox">
                                <img src={Arrows}/>
                                <img src={Plus}/>
                                <img src={Minus}/>
                                <img src={Hand}/>
                            </div>
                        </div>   
                        <LineChart data={chartData}/>
                    </div>
                    <div className="item item7">
                        <div className="graphttl">
                            <h6>Heated Feed Temperatur T4</h6>
                            <div className="imgbox">
                                <img src={Arrows}/>
                                <img src={Plus}/>
                                <img src={Minus}/>
                                <img src={Hand}/>
                            </div>
                        </div>   
                        <LineChart data={chartData}/>
                    </div>
                    <div className="item item8">
                        <div className="graphttl">
                            <h6>Feed Flow F1</h6>
                            <div className="imgbox">
                                <img src={Arrows}/>
                                <img src={Plus}/>
                                <img src={Minus}/>
                                <img src={Hand}/>
                            </div>
                        </div>   
                        <LineChart data={chartData}/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;