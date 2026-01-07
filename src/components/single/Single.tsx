import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Single = () => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src="" alt="" />
            <h1>John Doe</h1>
            <button>Update</button>
          </div>
          <div className="details">
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">JohnDoe</span>
            </div>
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">JohnDoe</span>
            </div>
            <div className="item">
              <span className="itemTitle">Username:</span>
              <span className="itemValue">JohnDoe</span>
            </div>
          </div>
        </div>
        <div className="chart">
          <LineChart
            style={{
              width: "100%",
              maxWidth: "700px",
              height: "100%",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            // responsive
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis width={100} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            {/* <RechartsDevtools /> */}
          </LineChart>
        </div>
      </div>

      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 day ago</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
