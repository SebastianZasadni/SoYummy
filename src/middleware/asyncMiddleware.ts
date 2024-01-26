// middleware/asyncMiddleware.ts
import Notiflix from 'notiflix';

const asyncMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type.endsWith('/pending')) {
    // Obsługa akcji pending (rozpoczęcie żądania)
    Notiflix.Loading.standard("Loading...");
  } else if (action.type.endsWith('/fulfilled')) {
    // Obsługa akcji fulfilled (pomyślne zakończenie żądania)
    Notiflix.Loading.remove();
  } else if (action.type.endsWith('/rejected')) {
    // Obsługa akcji rejected (błąd w trakcie żądania)
    Notiflix.Loading.remove();
    // Dodaj kod obsługi błędu tutaj, jeśli to konieczne
  }

  return next(action);
};

export default asyncMiddleware;
