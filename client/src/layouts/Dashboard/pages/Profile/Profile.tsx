import { useAppSelector } from '../../../../hooks/hooks';
import { selectUser } from '../../../../slices/userSlice';

const Profile = () => {
  const user = useAppSelector(selectUser);
  console.log(user);
  return <h1>profile</h1>;
};

export default Profile;
