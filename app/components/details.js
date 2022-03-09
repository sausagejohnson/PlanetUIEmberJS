import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class DetailsComponent extends Component {

    @service state;

    //@action 
    get selectedPlanet(){
        return this.state.getSelectedPlanet();
    }
}
