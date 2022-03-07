import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DetailsComponent extends Component {
    @tracked planet = {
        name: 'something',
        resources: [
            {text: 'AAA'},
            {text: 'BBB'},
            {text: 'CCC'}
        ],
        environment: 'Sandy',
        isFavourite: true
    
    };
}
