import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { setCategory, setSearchText } from '../redux/home/homeSlice';
import { homeType } from '@/types/homeTypes';
import Repositories from './screens/repositories';
import Users from './screens/users';

export default function Home() {
  const { HomeData } = useSelector((state: {home: homeType}) => state.home);
  const dispatch = useDispatch();

  const handleCategoryChange = (event: any) => {
    console.log(event.target.value)
    dispatch(setCategory(event.target.value));
  };

  const handleSearchChange = (event: any) => {
    console.log(event.target.value)
    dispatch(setSearchText(event.target.value));
  };
  
  return (
     <div className={styles.container}>
      <div className={styles.formWrap}>
        <input
          type="text"
          placeholder="Search"
          value={HomeData.searchtext}
          onChange={handleSearchChange}
        />
        <select onChange={handleCategoryChange} value={HomeData.category}>
            <option value="repositories">Repositories</option>
            <option value="users">Users</option>
        </select>
      </div>
      {HomeData.category === 'users' ? <Users/> : <Repositories/>}
    </div>
  );
}