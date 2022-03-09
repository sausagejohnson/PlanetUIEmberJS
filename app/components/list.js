import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ListComponent extends Component {

    @service state;

    get getPlanets(){
        return this.state.getPlanets();
    };

    @action selectedPlanet(index){
        this.state.selectedIndex = index;
    }
}
