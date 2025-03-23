import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!token) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Token: {token}</p>
      <button
        onClick={() => {
          dispatch(logout());
          navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
