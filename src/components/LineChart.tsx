import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    deposit: 25,
    withdrawal: 4,
  },
  {
    name: "Tuesday",
    deposit: 18,
    withdrawal: 1,
  },
  {
    name: "Wednesday",
    deposit: 14,
    withdrawal: 6,
  },
  {
    name: "Thursday",
    deposit: 16,
    withdrawal: 13,
  },
  {
    name: "Friday",
    deposit: 10,
    withdrawal: 6,
  },
];

export default class SimpleLineChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="75%">
        <LineChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            right: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="k" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#F4EBFF",
              borderRadius: "24px",
              width: "150px",
            }}
          />
          <Legend
            align="center"
            iconSize={10}
            iconType="circle"
          />
          <Line
            type="monotone"
            dataKey="deposit"
            stroke="#6941C6"
            fill="#6941C6"
            activeDot={{ r: 8 }}
            unit="$"
          />
          <Line
            type="monotone"
            dataKey="withdrawal"
            stroke="#101828"
            fill="#101828"
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
