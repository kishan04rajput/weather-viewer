const ChartTableBlock = ({ data }) => {
    return (
        <div>
            {data && (
                <div>
                    <h1>Chart</h1>
                    <h1>Table</h1>
                    <p>{JSON.stringify(data)}</p>
                </div>
            )}
        </div>
    );
};

export default ChartTableBlock;
