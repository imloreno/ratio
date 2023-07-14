import { ResponsiveRadar } from "@nivo/radar";
const data = [
  {
    attribute: "Responsabilidad",
    rate: 93,
  },
  {
    attribute: "Conocimiento",
    rate: 95,
  },
  {
    attribute: "Motivación",
    rate: 90,
  },
  {
    attribute: "Comunicación",
    rate: 94,
  },
  {
    attribute: "Actualización",
    rate: 98,
  },
  {
    attribute: "Preparación",
    rate: 93,
  },
  {
    attribute: "Creatividad",
    rate: 99,
  },
  {
    attribute: "Aprendizaje",
    rate: 97,
  },
];
const MyResponsiveRadar = () => (
  <ResponsiveRadar
    data={data}
    keys={["rate"]}
    indexBy="attribute"
    maxValue={100}
    margin={{ top: 0, right: 70, bottom: 0, left: 70 }}
    curve="linearClosed"
    borderWidth={2}
    colors="#5a3dcc"
    borderColor="#5a3dcc"
    dotBorderColor="#5a3dcc"
    gridLevels={10}
    gridShape="circular"
    gridLabelOffset={10}
    enableDots={true}
    dotSize={7}
    dotColor={{ theme: "background" }}
    dotBorderWidth={2}
    enableDotLabel={true}
    dotLabel={(value) => `${value.value}%`}
    dotLabelYOffset={20}
    fillOpacity={0.2}
    blendMode="normal"
    animate={true}
    motionConfig="wobbly"
    isInteractive={true}
  />
);
const RadarChart = () => {
  return (
    <div style={{ width: "100%", height: "16rem" }}>
      <MyResponsiveRadar />
    </div>
  );
};

export default RadarChart;
