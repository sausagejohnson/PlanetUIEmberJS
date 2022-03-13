import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
    @service state;

    async model(){
        let response = await fetch('https://waynejohnson.net/planets');
        let json = await response.json();
        this.state.planets = json;
    }

}
