import useParkingSpotUtilizationByWeekDay, {
  useDailyRevenue,
  usePlaceData,
  useRevenueContributionByVehicleType,
  useTopParkingLotsByRevenue,
} from "./index.data";
import HighchartsReact, {
  HighchartsReactProps,
} from "highcharts-react-official";
import Highcharts from "highcharts";

export function Overview() {
  const { dailyRevenue } = useDailyRevenue();
  const { topParkingLotsByRevenue } = useTopParkingLotsByRevenue();
  const { revenueContributionByVehicleType } =
    useRevenueContributionByVehicleType();
  const { parkingSpotUtilizationByWeekDay } =
    useParkingSpotUtilizationByWeekDay();
  const { dataByPlace } = usePlaceData();

  // Daily Revenue Chart
  const dailyRevenueOptions: HighchartsReactProps = {
    chart: {
      width: 600, // Set chart width
      height: 400, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: { text: "Daily Revenue" },
    xAxis: {
      categories: dailyRevenue.map((item) => item.day),
    },
    yAxis: {
      title: { text: "Revenue (USD)" },
    },
    series: [
      {
        name: "Revenue",
        data: dailyRevenue.map((item) => item.totalRevenue),
      },
    ],
  };

  // Stacked Revenue Chart
  const stackedRevenueOptions: HighchartsReactProps = {
    chart: {
      type: "column",
      width: 600, // Set chart width
      height: 400, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: {
      text: "Revenue by Vehicle Type (Daily)",
    },
    xAxis: {
      categories: dailyRevenue.map((item) => item.day),
      title: { text: "Day" },
    },
    yAxis: {
      min: 0,
      title: { text: "Revenue (USD)" },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
      },
    },
    legend: {
      align: "right",
      verticalAlign: "top",
      y: 20,
      floating: true,
      backgroundColor: "#FFFFFF",
      borderColor: "#CCC",
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      pointFormat: "<b>${point.y}</b> revenue from {series.name}",
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: ["CAR", "TRUCK", "MOTORCYCLE"].map((type) => ({
      name: type.toLowerCase(),
      data: dailyRevenue.map(
        (item) =>
          item.revenueByVehicleType.find((v) => v.vehicleType === type)
            ?.revenue || 0
      ),
    })),
  };

  // Revenue Contribution by Vehicle Type Chart (Pie)
  const revenueContributionOptions: HighchartsReactProps = {
    chart: {
      type: "pie",
      width: 400, // Set chart width
      height: 400, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: {
      text: "Revenue Contribution by Vehicle Type",
    },
    series: [
      {
        name: "Revenue",
        data: revenueContributionByVehicleType.map((item) => ({
          name: item.vehicleType,
          y: item.revenueInUsd,
        })),
      },
    ],
  };

  // Parking Spot Utilization by Weekday (Bar)
  const parkingSpotUtilizationOptions: HighchartsReactProps = {
    chart: {
      type: "bar",
      width: 800, // Set chart width
      height: 400, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: {
      text: "Parking Spot Utilization by Weekday",
    },
    xAxis: {
      categories: parkingSpotUtilizationByWeekDay.map((item) => item.weekDay),
      title: { text: "Weekday" },
    },
    yAxis: {
      title: { text: "Utilization (%)" },
    },
    series: [
      {
        name: "Utilization",
        data: parkingSpotUtilizationByWeekDay.map((item) => item.utilization),
      },
    ],
  };

  // Place Chart
  const placeChartOptions: HighchartsReactProps = {
    chart: {
      type: "column",
      width: 1216, // Set chart width
      height: 500, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: {
      text: "Revenue and Parking Spots by Place",
    },
    xAxis: {
      categories: dataByPlace.map((place) => place.placeName),
      title: { text: "Places" },
    },
    yAxis: [
      {
        title: { text: "Revenue (USD)" },
        opposite: true,
      },
      {
        title: { text: "Number of Parking Spots" },
      },
    ],
    tooltip: {
      shared: true,
    },
    plotOptions: {
      column: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "Revenue (USD)",
        type: "column",
        data: dataByPlace.map((place) => place.revenueInUsd),
        yAxis: 0,
        tooltip: {
          valuePrefix: "$",
        },
        color: "#7cb5ec", // Revenue color
      },
      {
        name: "Car Spots",
        type: "column",
        data: dataByPlace.map((place) => place.numberOfCarSpots),
        yAxis: 1,
        color: "#90ed7d", // Car spots color
      },
      {
        name: "Motorcycle Spots",
        type: "column",
        data: dataByPlace.map((place) => place.numberOfMotorcycleSpots),
        yAxis: 1,
        color: "#f7a35c", // Motorcycle spots color
      },
      {
        name: "Truck Spots",
        type: "column",
        data: dataByPlace.map((place) => place.numberOfTruckSpots),
        yAxis: 1,
        color: "#8085e9", // Truck spots color
      },
    ],
  };

  return (
    <div
      className="highcharts-light"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "var(--c-white-2)",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "16px",
        marginBottom: "24px",
      }}>
      {/* Daily Revenue */}
      <HighchartsReact highcharts={Highcharts} options={dailyRevenueOptions} />
      <HighchartsReact
        highcharts={Highcharts}
        options={stackedRevenueOptions}
      />
      {/* Revenue Contribution */}
      <HighchartsReact
        highcharts={Highcharts}
        options={revenueContributionOptions}
      />

      {/* Parking Spot Utilization */}
      <HighchartsReact
        highcharts={Highcharts}
        options={parkingSpotUtilizationOptions}
      />

      {/* Place Revenue and Spots Chart */}
      <HighchartsReact highcharts={Highcharts} options={placeChartOptions} />

      {/* Top Parking Lots (Table) */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "16px",
          borderRadius: "8px",
          width: "1216px",
        }}>
        <h3 style={{ marginBottom: "16px" }}>Top Parking Lots by Revenue</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f9f9f9" }}>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}>
                Parking Lot Name
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}>
                Revenue (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            {topParkingLotsByRevenue.map((item, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f7f7f7" : "#fff",
                }}>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  {item.parkingLot.name}
                </td>
                <td
                  style={{
                    textAlign: "right",
                    padding: "8px",
                    border: "1px solid #ddd",
                  }}>
                  ${item.revenueInUsd.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
