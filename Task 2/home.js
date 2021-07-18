import useFetch from "./useFetch";
import Users from "./Users";
const Home = () => {
  const {
    data: users,
    ispending,
    error,
  } = useFetch("https://reqres.in/api/users?page=1");

  return (
    <div className="home">
        
      {error && <div>{error}</div>}
    
      {ispending && <div className="loader"></div>}

      {users && <Users users={users} title="All Users!" />}
    </div>
  );
};

export default Home;