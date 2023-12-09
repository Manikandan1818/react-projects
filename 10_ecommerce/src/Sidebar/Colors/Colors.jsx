import Input from "../../components/Input";
import "./Colors";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark all"></span>ALL
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="Red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          handleChange={handleChange}
          value="white"
          title="White"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
