const Home = () => {
  const handlerGetUSers = () => {
    console.log("get button working");
  };
  return (
    <div>
      this is all users window
      <button onClick={handlerGetUSers}>get users</button>
    </div>
  );
};

export default Home;
