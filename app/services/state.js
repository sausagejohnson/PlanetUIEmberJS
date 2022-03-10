import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';

export default class StateService extends Service {

  @tracked favourites = [];

  @tracked selectedPlanet = null; //ID

  @tracked planets = [
    {
      id: 4,
      name: 'TOI 700 d',
      environment: 'Harsh',
      resources: ['Gold', 'Iron'],
    },
    {
      id: 5,
      name: 'K2-72e',
      environment: 'Mild',
      resources: ['Iron', 'Water', 'Sand'],
    },
  ];

  getSelectedPlanet() {
    const planet = this.planets.find(p => p.id === this.selectedPlanet);
    return planet;
  }

  getPlanets() {
    return this.planets;
  }
}
