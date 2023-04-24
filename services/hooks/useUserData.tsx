import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reduxStore';


const useUserData = () => {
    const userName = useSelector( (state:RootState) => state.userSlice.userName);
    const userDictionary = useSelector( (state:RootState) => state.userSlice.userDictionary);

    const userData = {
        name: userName,
        dictionary: userDictionary
    }

    return userData
}

export default useUserData;