import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => {
              return (
                <div className="item" key={item[0]}>
                  <span className="itemTitle">{item[0]}</span>
                  <span className="itemValue">{item[1]}</span>
                </div>
              );
            })}
          </div>
        </div>

        <hr />

        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  height: "100%",
                  maxHeight: "70vh",
                  aspectRatio: 1.618,
                }}
                // responsive
                data={props.chart.data}
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
                {props.chart.dataKeys.map((dataKey) => {
                  return (
                    <Line
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  );
                })}

                {/* <RechartsDevtools /> */}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          {props.activities &&
            props.activities.map((activity) => {
              return (
                <li key={activity.text}>
                  <div>
                    <p>{activity.text}</p>
                    <time>{activity.time}</time>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Single;
