import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
// в компоненте пишем const state = useTypedSelector(state => state.auth)
