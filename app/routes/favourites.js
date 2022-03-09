import Route from '@ember/routing/route';

export default class FavouritesRoute extends Route {
  async model() {
    return {
      favouritePlanets: [
        {
          id: 0,
          name: 'TOI 700 d',
          environment: 'Harsh',
          resources: ['Gold', 'Iron'],
        },
      ],
    };
  }
}
