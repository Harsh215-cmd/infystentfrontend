import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2019", withoutSoftware: 20, withSoftware: 25 },
  { year: "2020", withoutSoftware: 25, withSoftware: 40 },
  { year: "2021", withoutSoftware: 30, withSoftware: 60 },
  { year: "2022", withoutSoftware: 35, withSoftware: 80 },
  { year: "2023", withoutSoftware: 40, withSoftware: 100 },
];

const BusinessSection = () => {
  return (
    <>
     
    <section className="business">
 <center><h1>Upgrade Your Business</h1></center>  <br /> <br />
      {/* Top Boxes */}
      <div className="business-top">
        <div className="biz-box box1">🚀 Fast Growth</div>
        <div className="biz-box box2">💻 Smart Solutions</div>
        <div className="biz-box box3">🔒 Secure Systems</div>
        <div className="biz-box box4">⚡ High Performance</div>
        <div className="biz-box box5">📈 Scalable Tech</div>
      </div>

      {/* Bottom Section */}
      <div className="business-bottom">

        {/* Left Chart */}
        <div className="biz-left">
          <h3>Business Growth Comparison</h3>
          <p className="chart-sub">
            Growth with software vs without software
          </p>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="withoutSoftware" fill="#ef4444" radius={[6, 6, 0, 0]} />
              <Bar dataKey="withSoftware" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right Content */}
        <div className="biz-right">
          <h2>Upgrade Your Business
            With Our Digital Solutions</h2>

          <p>
            Transform your business with modern digital solutions. <br />
            Improve efficiency, automate processes, and scale faster. <br />
            Achieve consistent growth with our IT expertise.
          </p>

          <button className="biz-btn">Get Started</button>
        </div>

      </div>

    </section>
    </>
  );
};

export default BusinessSection;