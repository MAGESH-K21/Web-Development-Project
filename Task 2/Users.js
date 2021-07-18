const Users = ({ users, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {users.map((a) => (
        <div className="blog-preview" key={a.id}>
          <div className="user">
            <img src={a.avatar} alt="users" srcset="" />
            <h2>{a.id}. </h2>
            <div className="name">
              <p>First_name: {a.first_name}</p>
              <p>Last_name: {a.last_name}</p>
              <p>Email Id: {a.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
