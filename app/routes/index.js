import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    
    async model(){
        return {
        selectedPlanet: {
            id:	1,
            name: "K2-72e",
            environment: "Mild",
            resources: [
                "Iron",
                "Water",
                "Sand"
            ]
        },
        planets: [
                {
                    id:	0,
                    name: "TOI 700 d",
                    environment: "Harsh",
                    resources: [
                        "Gold",
                        "Iron"
                    ]
                },
                {
                    id:	1,
                    name: "K2-72e",
                    environment: "Mild",
                    resources: [
                        "Iron",
                        "Water",
                        "Sand"
                    ]
                }       
            ]
        };
    }
}