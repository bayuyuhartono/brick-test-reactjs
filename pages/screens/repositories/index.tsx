import { useSelector } from 'react-redux';
import { homeType } from '@/types/homeTypes';
import GridView from '@/pages/components/GridView';
import { useGetGithubSearchQuery } from '@/services';

const Repositories = () => {

  const { HomeData } = useSelector((state: {home: homeType}) => state.home);

  const { data: repositoriesData } = useGetGithubSearchQuery({text: HomeData.searchtext})
  
  return (
      <GridView items={repositoriesData?.items ?? []}/>
  );
}

export default Repositories;
