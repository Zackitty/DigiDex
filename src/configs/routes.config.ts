import { InjectionToken } from '@angular/core';

export const ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  digimon: 'digimon',
  auth: 'auth',
};

const routeNames = {
    home: 'home',
    error404: '404',
    digimon: {
        digimon: 'digimon',
        detail: ':id'
    },
    auth: {
        signUp: 'sign-up',
        logIn: 'log-in'
    }

}

export const getDigimonDetail = (id: string) => `/${basePaths.digimon}/${id}`;

export const RoutesConfig: any = {
    basePaths,
    routeNames,
    routes: {
      home: `${routeNames.home}`,
      error404: `/${routeNames.error404}`,
      digimon: {
        digimon: `/${basePaths.digimon}/${routeNames.digimon.digimon}`,
        detail: getDigimonDetail,
      },
      auth: {
        signUp: `/${basePaths.auth}/${routeNames.auth.signUp}`,
        logIn: `/${basePaths.auth}/${routeNames.auth.logIn}`,
      },
    },
  };