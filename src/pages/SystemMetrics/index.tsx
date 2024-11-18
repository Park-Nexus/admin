import HighchartsReact, {
  HighchartsReactProps,
} from "highcharts-react-official";
import Highcharts from "highcharts";
import {
  useCloudRunApiCpuUtilizations,
  useCloudRunApiMemoryUtilizations,
  useCloudSqlCpuUtilizations,
  useCloudSqlDataIo,
  useCloudSqlStorageUsage,
} from "./index.data";
import dayjs from "dayjs";

export function SystemMetrics() {
  const { cloudRunApiCpuUtilizations } = useCloudRunApiCpuUtilizations();
  const { cloudRunApiMemoryUtilizations } = useCloudRunApiMemoryUtilizations();
  const { cloudSqlCpuUtilizations } = useCloudSqlCpuUtilizations();
  const { cloudSqlDataIo } = useCloudSqlDataIo();
  const { cloudSqlStorageUsage } = useCloudSqlStorageUsage();

  // Cloud Run API CPU Utilization Chart
  const cloudRunCpuOptions = {
    chart: {
      type: "line",
      width: 600, // Set chart width
      height: 420, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: { text: "API CPU Utilization" },
    xAxis: {
      categories: cloudRunApiCpuUtilizations?.data.map((item) =>
        dayjs(item.date).format("HH:mm")
      ),
      title: { text: "Date" },
    },
    yAxis: {
      title: { text: "CPU Utilization (%)" },
    },
    series: [
      {
        name: "Service: " + cloudRunApiCpuUtilizations?.revision_name,
        data: cloudRunApiCpuUtilizations?.data.map((item) => item.percentage),
      },
    ],
  };

  // Cloud Run API Memory Utilization Chart
  const cloudRunMemoryOptions = {
    chart: {
      type: "line",
      width: 600, // Set chart width
      height: 420, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: { text: "API Memory Utilization" },
    xAxis: {
      categories: cloudRunApiMemoryUtilizations?.data.map((item) =>
        dayjs(item.date).format("HH:mm")
      ),
      title: { text: "Date" },
    },
    yAxis: {
      title: { text: "Memory Utilization (%)" },
    },
    series: [
      {
        name: "Service: " + cloudRunApiMemoryUtilizations?.revision_name,
        data: cloudRunApiMemoryUtilizations?.data.map(
          (item) => item.percentage
        ),
      },
    ],
  };

  // Cloud SQL CPU Utilization Chart
  const cloudSqlCpuOptions = {
    chart: {
      type: "line",
      width: 1216, // Set chart width
      height: 450, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: { text: "Database CPU Utilization" },
    xAxis: {
      categories: cloudSqlCpuUtilizations?.data.map((item) =>
        dayjs(item.date).format("HH:mm")
      ),
      title: { text: "Date" },
    },
    yAxis: {
      title: { text: "CPU Utilization (%)" },
    },
    series: [
      {
        name: "Database: " + cloudSqlCpuUtilizations?.database_id,
        data: cloudSqlCpuUtilizations?.data.map((item) => item.percentage),
      },
    ],
  };

  // Cloud SQL Data IO Chart
  const cloudSqlIoOptions = {
    chart: {
      type: "line",
      width: 600, // Set chart width
      height: 450, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: { text: "Database I/O" },
    xAxis: {
      categories: cloudSqlDataIo?.data.map((item) =>
        dayjs(item.date).format("HH:mm")
      ),
      title: { text: "Date" },
    },
    yAxis: {
      title: { text: "Bytes per Second" },
    },
    series: [
      {
        name: "In (Bytes/s)",
        data: cloudSqlDataIo?.data.map((item) => item.bytesPerSecondIn),
      },
      {
        name: "Out (Bytes/s)",
        data: cloudSqlDataIo?.data.map((item) => item.bytesPerSecondOut),
      },
    ],
  };

  // Cloud SQL Storage Usage Chart
  const cloudSqlStorageOptions = {
    chart: {
      type: "line",
      width: 600, // Set chart width
      height: 450, // Set chart height
      style: {
        borderRadius: "var(--br-2)",
      },
    },
    title: { text: "Database Storage Usage" },
    xAxis: {
      categories: cloudSqlStorageUsage?.data.map((item) =>
        dayjs(item.date).format("HH:mm")
      ),
      title: { text: "Date" },
    },
    yAxis: {
      title: { text: "Bytes Used" },
    },
    series: [
      {
        name: "Database: " + cloudSqlStorageUsage?.database_id,
        data: cloudSqlStorageUsage?.data.map((item) => item.bytes),
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
      <h2 style={{ width: "100%" }}>Last 24 Hours System Metrics</h2>

      {/* Cloud Run CPU Utilization */}
      <HighchartsReact highcharts={Highcharts} options={cloudRunCpuOptions} />

      {/* Cloud Run Memory Utilization */}
      <HighchartsReact
        highcharts={Highcharts}
        options={cloudRunMemoryOptions}
      />

      {/* Cloud SQL CPU Utilization */}
      <HighchartsReact highcharts={Highcharts} options={cloudSqlCpuOptions} />

      {/* Cloud SQL Data IO */}
      <HighchartsReact highcharts={Highcharts} options={cloudSqlIoOptions} />

      {/* Cloud SQL Storage Usage */}
      <HighchartsReact
        highcharts={Highcharts}
        options={cloudSqlStorageOptions}
      />
    </div>
  );
}
