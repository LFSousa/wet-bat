import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";
import { Box, BoxProps } from "@mui/material";
import DashboardCard from "../../DashboardCard";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
];

const COLORS = ["#F0CE84", "#F67475", "#5F6CB0", "#32AFA9", "#727272"];

export default function CloseRatioCard({
  ...props
}: Omit<BoxProps, "children">) {
  return (
    <DashboardCard {...props} icon={faHandshakeAngle} title="Close ratio" menu>
      <Box width="100%" height={200}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data.map((d) => ({ ...d, value: Math.random() * 100 }))}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </DashboardCard>
  );
}
