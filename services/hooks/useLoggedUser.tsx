import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reduxStore';


const useLoggedUser = () => {
    const isUserLogged:boolean = useSelector( (state:RootState) => state.userSlice.isUserLogged);
    return isUserLogged
}

export default useLoggedUser;
