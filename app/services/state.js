import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';
import { A } from '@ember/array';
import { action } from '@ember/object';

export default class StateService extends Service {

  @tracked favourites = [];

  @tracked selectedPlanetID = null; //ID

  @tracked planets = A([]);

  @action setSelectedPlanet(id){
    this.selectedPlanetID = id; 

    // This will trigger but is not the way to go.
    // this.planets = [
    //   ...this.planets,
    //   this.planets.slice()
    // ];

    //This works, in fact the only function of
    //EmberArray that triggers a change at this level.
    //this.planets.setEach('environment', 'dummy');

  }

  getSelectedPlanet() {
    const planet = this.planets.find(p => p.id === this.selectedPlanetID);
    return planet;
  }

  getPlanets() {
    return this.planets;
  }
}
