import Song from "./songs";

const MainDiv = () => {
  return (
    <div id="main-div" className="p-10">
      <h1 className="text-white text-3xl font-semibold">Mi música</h1>
      <div className="mt-10 w-full ">
        <Song />
        <Song />
      </div>
    </div>
  );
};

export default MainDiv;
