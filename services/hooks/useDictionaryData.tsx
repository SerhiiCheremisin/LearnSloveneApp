import { useSelector } from "react-redux";
import { RootState } from "../../redux/reduxStore";


const useDictionaryData = () => {
    const activeCategory = useSelector( (state:RootState ) => state.dictionarySlice.activeCategory);
    return activeCategory;
}

export default useDictionaryData;