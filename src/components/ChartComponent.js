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

export const ChartComponent = ({ data }) => {
    const chartData = data.daily.time.map((date, i) => ({
        date,
        tempMax: data.daily.temperature_2m_max[i],
        tempMin: data.daily.temperature_2m_min[i],
        tempMean: data.daily.temperature_2m_mean[i],
        apparentTempMax: data.daily.apparent_temperature_max[i],
        apparentTempMin: data.daily.apparent_temperature_min[i],
        apparentTempMean: data.daily.apparent_temperature_mean[i],
    }));

    return (
        <ResponsiveContainer width="100%" height={400} className="mt-4">
            <LineChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis
                    dataKey="date"
                    textAnchor="end"
                    height={70}
                    tick={{ fill: "#666", fontSize: 12 }}
                    tickLine={{ stroke: "#ccc" }}
                    axisLine={{ stroke: "#ccc" }}
                />
                <YAxis
                    label={{
                        value: "Temperature (°C)",
                        angle: -90,
                        position: "left",
                        offset: -10,
                        style: {
                            textAnchor: "middle",
                            fill: "#666",
                            fontSize: 13,
                        },
                    }}
                    tick={{ fill: "#666", fontSize: 12 }}
                    tickLine={{ stroke: "#ccc" }}
                    axisLine={{ stroke: "#ccc" }}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        padding: "10px",
                    }}
                    labelStyle={{ fontWeight: "bold", marginBottom: "5px" }}
                />
                <Legend
                    align="center"
                    verticalAlign="bottom"
                    wrapperStyle={{ paddingTop: "20px" }}
                    iconType="circle"
                />
                <Line
                    type="monotone"
                    dataKey="tempMax"
                    stroke="#ef4444"
                    name="Max Temperature"
                    dot={false}
                    strokeWidth={2}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Line
                    type="monotone"
                    dataKey="tempMean"
                    stroke="#3b82f6"
                    name="Mean Temperature"
                    dot={false}
                    strokeWidth={2}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Line
                    type="monotone"
                    dataKey="tempMin"
                    stroke="#10b981"
                    name="Min Temperature"
                    dot={false}
                    strokeWidth={2}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Line
                    type="monotone"
                    dataKey="apparentTempMax"
                    stroke="#f59e0b"
                    name="Max Apparent Temperature"
                    strokeDasharray="5 5"
                    dot={false}
                    strokeWidth={1.5}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Line
                    type="monotone"
                    dataKey="apparentTempMean"
                    stroke="#a855f7"
                    name="Mean Apparent Temperature"
                    strokeDasharray="5 5"
                    dot={false}
                    strokeWidth={1.5}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                />
                <Line
                    type="monotone"
                    dataKey="apparentTempMin"
                    stroke="#8C564B"
                    name="Min Apparent Temperature"
                    strokeDasharray="5 5"
                    dot={false}
                    strokeWidth={1.5}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
