import { LineChart } from "eazychart-react";
import "eazychart-css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <LineChart
        line={{
          strokeWidth: 2,
          stroke: "#ef476f",
          curve: "curveLinear",
          beta: 1,
        }}
        marker={{
          hidden: false,
          radius: 10,
          color: "#ef476f",
        }}
        xAxis={{
          domainKey: "xValue",
          title: "AXE xAxis",
        }}
        yAxis={{
          domainKey: "yValue",
          title: "AXE Y",
        }}
        data={[
          { label: "Alpha", xValue: 10, yValue: 45 },
          { label: "Beta", xValue: 20, yValue: 30 },
          { label: "Gamma", xValue: 30, yValue: 25 },
        ]}
      />
    </div>
  );
}
