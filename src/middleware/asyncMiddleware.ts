// middleware/asyncMiddleware.ts
import Notiflix from "notiflix";

const asyncMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type.endsWith("/pending")) {
    Notiflix.Loading.standard("Loading...");
  } else if (action.type.endsWith("/fulfilled")) {
    Notiflix.Loading.remove();
  } else if (action.type.endsWith("/rejected")) {
    Notiflix.Loading.remove();
  }

  return next(action);
};

export default asyncMiddleware;
