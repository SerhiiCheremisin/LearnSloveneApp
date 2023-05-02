import { useSelector } from "react-redux";
import { RootState } from "../../redux/reduxStore";


const useActiveGrammar = () => {
    const activeCategory = useSelector( (state:RootState ) => state.grammarSlice.activeGrammarBlock);
    return activeCategory;
}

export default useActiveGrammar;