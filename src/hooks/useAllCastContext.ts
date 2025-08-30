import { useContext } from 'react';
import { AllCastContext } from '../contexts/AllCastContext';

export function useAllCastContext() {
  const context = useContext(AllCastContext);

  if (!context) {
    throw new Error("useAllCastContext deve ser usado dentro de um AllCastProvider");
  }

  return context;
}
