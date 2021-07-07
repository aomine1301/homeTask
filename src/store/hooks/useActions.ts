import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActionCreators from '../action-creator/auth';

export const useActions = ():any => {
  const dispatch = useDispatch();
  return bindActionCreators(AuthActionCreators, dispatch);
};
