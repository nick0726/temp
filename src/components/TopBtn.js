import moveUp from "../images/moveUp.jpg";
import "./TopBtn.css";

function TopBtn(topBtnColor, setTopBtnColor) {
  return (
    <>
      <div
        className='moveTop'
        style={{
          backgroundColor: `${topBtnColor ? "#024abd" : "white"}`,
        }}
      >
        <img
          src={moveUp}
          alt={moveUp}
          style={{
            backgroundColor: `${topBtnColor ? "#024abd" : "null"}`,
          }}
        />
      </div>
    </>
  );
}

export default TopBtn;
