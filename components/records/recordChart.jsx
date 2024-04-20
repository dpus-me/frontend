"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,

  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  stacked: false,
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
    x: {
      display: false,
    },
  },
};

const data = {
  datasets: [
    {
      label: "내 점수",
      data: {
        "1학년 1학기 중간고사": 43,
        "1학년 1학기 기말고사": 47,
        "1학년 2학기 중간고사": 63,
        "1학년 2학기 기말고사": 68,
        "2학년 1학기 중간고사": 72,
        "2학년 1학기 기말고사": 85,
        "2학년 2학기 중간고사": 76,
        "2학년 2학기 기말고사": 89,
        "3학년 1학기 중간고사": 92,
        "3학년 1학기 기말고사": 89,
        "3학년 2학기 중간고사": 97,
        "3학년 2학기 기말고사": 95,
      },
      borderColor: "rgb(95, 67, 255)",
      yAxisID: "y",
    },
    {
      label: "전체 평균",
      data: {
        "1학년 1학기 중간고사": 51,
        "1학년 1학기 기말고사": 65,
        "1학년 2학기 중간고사": 42,
        "1학년 2학기 기말고사": 64,
        "2학년 1학기 중간고사": 42,
        "2학년 1학기 기말고사": 76,
        "2학년 2학기 중간고사": 45,
        "2학년 2학기 기말고사": 75,
        "3학년 1학기 중간고사": 32,
        "3학년 1학기 기말고사": 55,
        "3학년 2학기 중간고사": 53,
        "3학년 2학기 기말고사": 74,
      },
      borderColor: "rgba(95, 67, 255, 0.164)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

export default function RecordChart() {
  return (
    <div className="record-chart">
      <Line options={{ ...options }} data={{ ...data }} />
    </div>
  );
}
