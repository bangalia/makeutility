import data from "./metal.json";

function MetalMeta() {
  var numberOfBands = Object.keys(data).length;
  return (
    <div className="MetalMeta">
      <p>
        Metal Bands:{" "}
        <span role="img" aria-label="metal-hand">
          🤘
        </span>{" "}
      </p>
      <p>There are: {numberOfBands} Bands</p>
    </div>
  );
}

export default MetalMeta;