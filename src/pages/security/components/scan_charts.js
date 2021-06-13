import React from "react";
import {
    ResponsiveContainer,
    ComposedChart,
    AreaChart,
    LineChart,
    Line,
    Area,
    PieChart,
    Pie,
    Cell,
    YAxis,
    XAxis,
    Legend,
    Tooltip,
    BarChart,
    Bar
  } from "recharts";
const DashboardData = getDashboardData();
const StoreData = getStoreData();
const CLOSEData = getCLOSEData();
const CheckoutData = getCheckoutData();
const CustomerPortalData = getCustomerPortalData();


const SecCharts = props => {
  let { chartState, stats, level, color, data } = props;
  switch (chartState) {
    case "overall":
      return <ResponsiveContainer width="100%" minWidth={500} height={350}>
      <PieChart
        margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
        data={data}
      >
        <Pie data={data} dataKey={stats} nameKey={level} label>
        {
          
          data.map((entry, index) => <Cell key={`cell-${index}`} fill={color[index % color.length]} />)
        }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
      break;
    case "dashboard":
      return <ResponsiveContainer width="100%" minWidth={500} height={350}>
      <PieChart
        margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
        data={DashboardData}
      >
        <Pie data={DashboardData} dataKey={stats} nameKey={level} label>
        {
          
          DashboardData.map((entry, index) => <Cell key={`cell-${index}`} fill={color[index % color.length]} />)
        }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
      break;
    case "store":
        return <ResponsiveContainer width="100%" minWidth={500} height={350}>
        <PieChart
          margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
          data={StoreData}
        >
          <Pie data={StoreData} dataKey={stats} nameKey={level} label>
          {
            
            StoreData.map((entry, index) => <Cell key={`cell-${index}`} fill={color[index % color.length]} />)
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        break;
    case "close":
            return <ResponsiveContainer width="100%" minWidth={500} height={350}>
            <PieChart
              margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
              data={CLOSEData}
            >
              <Pie data={CLOSEData} dataKey={stats} nameKey={level} label>
              {
                
                CLOSEData.map((entry, index) => <Cell key={`cell-${index}`} fill={color[index % color.length]} />)
              }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
            break;
    case "checkout":
      return <ResponsiveContainer width="100%" minWidth={500} height={350}>
      <PieChart
        margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
        data={CheckoutData}
      >
        <Pie data={CheckoutData} dataKey={stats} nameKey={level} label>
        {
          
          CheckoutData.map((entry, index) => <Cell key={`cell-${index}`} fill={color[index % color.length]} />)
        }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
      break;
      case "customerPortal":
        return <ResponsiveContainer width="100%" minWidth={500} height={350}>
        <PieChart
          margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
          data={CustomerPortalData}
        >
          <Pie data={CustomerPortalData} dataKey={stats} nameKey={level} label>
          {
            
            CustomerPortalData.map((entry, index) => <Cell key={`cell-${index}`} fill={color[index % color.length]} />)
          }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        break;
    default:
      return null;
  }
};

export default SecCharts;

function getDashboardData() {
    var resultArray = [];
    var stats = [31.7,15.9,52.4,0];
    let level = ["Informational","Low","Medium","High"]
    for (let i = 0; i < level.length; i++) {
      resultArray.push({
        stats: stats[i],
        level: level[i]
      });
    }
    return resultArray;
  }

  function getCLOSEData() {
    var resultArray = [];
    var stats = [33.9,41.5,24.6,0];
    let level = ["Informational","Low","Medium","High"]
    for (let i = 0; i < level.length; i++) {
      resultArray.push({
        stats: stats[i],
        level: level[i]
      });
    }
    return resultArray;
  }
  
  function getStoreData() {
    var resultArray = [];
    var stats = [42.5,32.5,25.0,0];
    let level = ["Informational","Low","Medium","High"]
    for (let i = 0; i < level.length; i++) {
      resultArray.push({
        stats: stats[i],
        level: level[i]
      });
    }
    return resultArray;
  }
  
  function getCheckoutData() {
    var resultArray = [];
    var stats = [33.8,42.9,23.4,0];
    let level = ["Informational","Low","Medium","High"]
    for (let i = 0; i < level.length; i++) {
      resultArray.push({
        stats: stats[i],
        level: level[i]
      });
    }
    return resultArray;
  }
  
  function getCustomerPortalData() {
    var resultArray = [];
    var stats = [42.0,37.0,21.0,0];
    let level = ["Informational","Low","Medium","High"]
    for (let i = 0; i < level.length; i++) {
      resultArray.push({
        stats: stats[i],
        level: level[i]
      });
    }
    return resultArray;
  }