import "react";
import "../styles/app.css";

const Key = () => {
  const handleKeyDown = (e) => {
    e.preventDefault();
    console.log(e.key);
  };

  return (
    <>
      <form>
        <input type="text" onKeyDown={handleKeyDown} />
      </form>
    </>
  );
};

export default Key;
