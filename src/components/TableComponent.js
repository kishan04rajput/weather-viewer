import { useState } from "react";
export const TableComponent = ({ data }) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState("15");

    const decreasePage = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1);
    };

    const increasePage = () => {
        if (page >= data.daily.time.length / perPage) {
            return;
        }
        setPage(page + 1);
    };

    const handleJumpToPage = (value) => {
        if (value > data.daily.time.length / perPage) {
            value = Math.ceil(data.daily.time.length / perPage);
        }
        if (value < 0) {
            value = 1;
        }
        setPage(value);
    };

    return (
        <div className="flex flex-col items-center p-[1%]">
            <div>
                <table className="table-auto border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th
                                className="border border-gray-400 text-center px-[2vw] py-[1vh]"
                                rowSpan={2}
                            >
                                Date
                            </th>
                            <th
                                className="border border-gray-400 text-center px-[2vw] py-[1vh]"
                                colSpan={3}
                            >
                                {`Temperature ${data.daily_units.temperature_2m_max}`}{" "}
                            </th>
                            <th
                                className="border border-gray-400 text-center px-[2vw] py-[1vh]"
                                colSpan={3}
                            >
                                {`Apparent Temperature ${data.daily_units.apparent_temperature_max}`}
                            </th>
                        </tr>
                        <tr>
                            <td className="border border-gray-400 text-center px-[2vw] py-[1vh]">
                                Max
                            </td>
                            <td className="border border-gray-400 text-center px-[2vw] py-[1vh]">
                                Mean
                            </td>
                            <td className="border border-gray-400 text-center px-[2vw] py-[1vh]">
                                Min
                            </td>
                            <td className="border border-gray-400 text-center px-[2vw] py-[1vh]">
                                Max
                            </td>
                            <td className="border border-gray-400 text-center px-[2vw] py-[1vh]">
                                Mean
                            </td>
                            <td className="border border-gray-400 text-center px-[2vw] py-[1vh]">
                                Min
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.daily.time.map(
                            (time, index) =>
                                index < page * perPage &&
                                index >= (page - 1) * perPage && (
                                    <tr
                                        key={index}
                                        className={` ${
                                            index % 2 === 0
                                                ? "bg-gray-100"
                                                : "bg-white"
                                        }`}
                                    >
                                        <td className="border border-gray-400 px-[2vw] py-[1vh] text-center">
                                            {time}
                                        </td>
                                        <td className="border border-gray-400 px-[2vw] py-[1vh] text-center">
                                            {
                                                data.daily.temperature_2m_max[
                                                    index
                                                ]
                                            }
                                        </td>
                                        <td className="border border-gray-400 px-[2vw] py-[1vh] text-center">
                                            {
                                                data.daily.temperature_2m_mean[
                                                    index
                                                ]
                                            }
                                        </td>
                                        <td className="border border-gray-400 px-[2vw] py-[1vh] text-center">
                                            {
                                                data.daily.temperature_2m_min[
                                                    index
                                                ]
                                            }
                                        </td>
                                        <td className="border border-gray-400 px-[2vw] py-[1vh] text-center">
                                            {
                                                data.daily
                                                    .apparent_temperature_max[
                                                    index
                                                ]
                                            }
                                        </td>
                                        <td className="border border-gray-400 px-[2vw] py-[1vh] text-center">
                                            {
                                                data.daily
                                                    .apparent_temperature_mean[
                                                    index
                                                ]
                                            }
                                        </td>
                                        <td className="border border-gray-400 px-[2vw] py-[1vh] text-center">
                                            {
                                                data.daily
                                                    .apparent_temperature_min[
                                                    index
                                                ]
                                            }
                                        </td>
                                    </tr>
                                )
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td
                                colSpan={7}
                                className="border border-gray-400 px-[2vw] py-[1vh] text-center"
                            >
                                <button
                                    className="border border-gray-400 px-[1vw]"
                                    onClick={() => decreasePage()}
                                >{`<`}</button>
                                {` `}
                                <input
                                    type="text"
                                    className="border border-gray-400 w-[3vw] text-center"
                                    value={page}
                                    onChange={(e) =>
                                        handleJumpToPage(e.target.value)
                                    }
                                />
                                {`/${Math.ceil(
                                    data.daily.time.length / perPage
                                )}`}
                                {` `}
                                <button
                                    className="border border-gray-400 px-[1vw]"
                                    onClick={() => increasePage()}
                                >{`>`}</button>
                            </td>
                        </tr>
                        <tr>
                            <td
                                className="border border-gray-400 px-[2vw] py-[1vh] border border-gray-400 text-center"
                                colSpan={7}
                            >
                                <div>
                                    Per page:
                                    <select
                                        className="border border-gray-400"
                                        value={perPage}
                                        onChange={(e) =>
                                            setPerPage(e.target.value)
                                        }
                                    >
                                        <option value="15">15</option>
                                        {data.daily.time.length > 15 && (
                                            <option value="30">30</option>
                                        )}
                                        {data.daily.time.length > 30 && (
                                            <option value="45">45</option>
                                        )}
                                        {data.daily.time.length > 45 && (
                                            <option value="60">60</option>
                                        )}
                                        {data.daily.time.length > 60 && (
                                            <option value="all">All</option>
                                        )}
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};
