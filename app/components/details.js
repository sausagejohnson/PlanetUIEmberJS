import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class DetailsComponent extends Component {

    @service state;

    //@action 
    get selectedPlanet(){
        return this.state.getSelectedPlanet();
    }

    @action toggleFavourite(id, e){ //{checked: ?, id: int}
        if (e.currentTarget.checked){ //add a favourite
            this.state.favourites.push(id); 
        } else { //remove a favourite
            this.state.favourites = [ ...this.state.favourites.filter(ids => ids !== id) ]
        }
    }
}
