import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';

export default class StateService extends Service {

  @tracked favourites = [];

  @tracked selectedPlanetID = null; //ID

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

  @tracked test = 10;

//   setTest(){
//   }

  setSelectedPlanet(id){
    this.test = this.test + 5; //TEST: trying to trigger a change in the List component. Works!
    this.selectedPlanetID = id; //TEST: trying to trigger a change in the Details and List components. Only works in Details.
    this.planets[1].name = 'changeme!!!!' + Math.random(); //TEST: trying to trigger a change in the List component. Does not work.
  }

  getSelectedPlanet() {
    const planet = this.planets.find(p => p.id === this.selectedPlanetID);
    return planet;
  }

  getPlanets() {
    return this.planets;
  }
}
