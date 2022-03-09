import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';

export default class StateService extends Service {

  @tracked selectedIndex = 1;

  @tracked selectedPlanet = {
    id: 1,
    name: 'K2-72e',
    environment: 'Mild',
    resources: ['Iron', 'Water', 'Sand'],
  };

  @tracked planets = [
    {
      id: 0,
      name: 'TOI 700 d',
      environment: 'Harsh',
      resources: ['Gold', 'Iron'],
    },
    {
      id: 1,
      name: 'K2-72e',
      environment: 'Mild',
      resources: ['Iron', 'Water', 'Sand'],
    },
  ];

  getSelectedPlanet() {
    console.log('Getting it');
    return this.planets[this.selectedIndex];
  }

  getPlanets() {
    return this.planets;
  }
}
