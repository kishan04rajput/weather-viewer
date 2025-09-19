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
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                    label={{
                        value: "°C",
                        angle: -90,
                        position: "left",
                        offset: -25,
                    }}
                />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="tempMax"
                    stroke="#ef4444"
                    name="Max Temp"
                />
                <Line
                    type="monotone"
                    dataKey="tempMean"
                    stroke="#3b82f6"
                    name="Mean Temp"
                />
                <Line
                    type="monotone"
                    dataKey="tempMin"
                    stroke="#10b981"
                    name="Min Temp"
                />
                <Line
                    type="monotone"
                    dataKey="apparentTempMax"
                    stroke="#f59e0b"
                    name="Max Apparent Temp"
                />
                <Line
                    type="monotone"
                    dataKey="apparentTempMean"
                    stroke="#a855f7"
                    name="Mean Apparent Temp"
                />
                <Line
                    type="monotone"
                    dataKey="apparentTempMin"
                    stroke="#8C564B"
                    name="Min Apparent Temp"
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
