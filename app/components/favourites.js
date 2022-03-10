import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';


export default class FavouritesComponent extends Component {
    @service state;

    get selectedFavourites() {
        let favourites = this.state.favourites;
        let planets = this.state.planets;
        let favouritePlanets = planets.filter(p => favourites.includes(p.id))
    
        return favouritePlanets;
    }

}
