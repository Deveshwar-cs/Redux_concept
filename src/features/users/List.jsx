import {useEffect} from "react";
import {fetchUsers} from "./userSlice";
import {useDispatch, useSelector} from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const {users, loading, error} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // Loading
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
