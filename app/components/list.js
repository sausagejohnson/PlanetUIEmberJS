import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ListComponent extends Component {

    @service state;

    get getPlanets(){
        let planets = this.state.planets;
        // planets.forEach(p => {
        //     if (p.id === this.state.selectedPlanetID) {
        //         p.active = true;
        //         p.name = 'blah' + Math.random();
        //     } else {
        //         p.active = false;
        //         p.name = 'blahB' + Math.random();
        //     }
        // });
        return planets;
    };

    get getTest(){
        return this.state.test;
    }

    @action selectPlanet(id){
        //set active for list display
        // let planets = this.state.planets;
        // planets.forEach(p => {
        //     if (p.id === id) {
        //         //p.active = true;
        //         p.name = 'blah' + Math.random();
        //     } else {
        //         //p.active = false;
        //         p.name = 'blahB' + Math.random();
        //     }
        // });

        //this.state.setTest();

        //save active for next use
        this.state.setSelectedPlanet(id);
    }
}
