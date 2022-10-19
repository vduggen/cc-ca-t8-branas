export type Coordinate = {
	latitude: number;
	longitude: number;
};

export default class Distance {

    constructor() {}

    calculateTwoPoints(coordinate1: Coordinate, coordinate2: Coordinate) {
        const latitudeIsEqual = coordinate1.latitude == coordinate2.latitude;
        const longitudeIsEqual = coordinate1.longitude == coordinate2.longitude;
        if (latitudeIsEqual && longitudeIsEqual) return 0;
        const radlat1 = (Math.PI * coordinate1.latitude) / 180;
        const radlat2 = (Math.PI * coordinate2.latitude) / 180;
        const theta = coordinate1.longitude - coordinate2.longitude;
        const radtheta = (Math.PI * theta) / 180;
        let distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (distance > 1) distance = 1;
        distance = Math.acos(distance);
        distance = (distance * 180) / Math.PI;
        distance = distance * 60 * 1.1515;
        distance = distance * 1.609344; //convert miles to km
        return distance;
    }
}