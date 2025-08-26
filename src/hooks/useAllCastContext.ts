import { useContext } from 'react';
import { AllCastContext } from '../contexts/AllCastContext';

export function useAllCastContext() {
  return useContext(AllCastContext);
}
