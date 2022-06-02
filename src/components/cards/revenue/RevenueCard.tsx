import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { Box, BoxProps } from "@mui/material";
import DashboardCard from "../../DashboardCard";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "JAN",
    a: 4000,
    b: 2400,
  },
  {
    month: "FEB",
    a: 3000,
    b: 1398,
  },
  {
    month: "MAR",
    a: 2000,
    b: 9800,
  },
  {
    month: "APR",
    a: 2780,
    b: 3908,
  },
  {
    month: "MAY",
    a: 1890,
    b: 4800,
  },
  {
    month: "JUN",
    a: 2390,
    b: 3800,
  },
  {
    month: "JUL",
    a: 3490,
    b: 4300,
  },
  {
    month: "AGO",
    a: 4000,
    b: 2400,
  },
  {
    month: "SEP",
    a: 3000,
    b: 1398,
  },
];

export default function RevenueCard({ ...props }: Omit<BoxProps, "children">) {
  return (
    <DashboardCard {...props} icon={faSignal} title="Revenue" menu>
      <Box width="100%" height={200}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis dataKey="month" stroke="#5f6cb0" axisLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="a" stroke="#32AFA9" fill="#32AFA9" />
            <Line type="monotone" dataKey="b" stroke="#5F6CB0" fill="#5F6CB0" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </DashboardCard>
  );
}
