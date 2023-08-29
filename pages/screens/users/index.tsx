import { useSelector } from 'react-redux';
import { homeType } from '@/types/homeTypes';
import { useGetGithubSearchuserQuery } from '@/services';
import GridUserView from '@/pages/components/GridUsersView';

const Users = () => {

  const { HomeData } = useSelector((state: {home: homeType}) => state.home);

  const { data: usersData } = useGetGithubSearchuserQuery({text: HomeData.searchtext})
  
  return (
      <GridUserView items={usersData?.items ?? []}/>
  );
}

export default Users;
