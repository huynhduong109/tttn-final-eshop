import Chart from "chart.js/auto";
import { useEffect } from "react";
import "chartjs-plugin-datalabels";

function ChartComponentShop({ arrData, name }) {
  console.log("arrDataChart", arrData);
  // biểu đồ
  const groupedDay = arrData?.reduce((result, order) => {
    const day = order?.day;
    const totalData = order?.total;
    result[day] = (result[day] || 0) + totalData;
    return result;
  }, {});
  const sumData = Object.keys(groupedDay).map((day) => ({
    day: day,
    totalData: groupedDay[day],
  }));
  console.log("sumData", sumData);
  useEffect(() => {
    new Chart(document.getElementById("acquisitions"), {
      type: "bar",
      data: {
        labels: sumData?.map((row) => row.day),
        datasets: [
          {
            label: name,
            data: sumData?.map((row) => row.totalData),
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            display: true,
            color: "white",
            font: {
              weight: "bold",
            },
          },
        },
      },
    });
  }, [arrData]);
  return (
    <>
      <h1>Biểu đồ thống kê {name}</h1>
      <div style={{ width: "800px" }}>
        <canvas id="acquisitions"></canvas>
      </div>
    </>
  );
}

export default ChartComponentShop;