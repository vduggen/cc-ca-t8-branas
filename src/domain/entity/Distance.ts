export type Coordinate = {
	latitude: number;
	longitude: number;
};

export default class Distance {

    constructor() {}

    getDistanceTwoPoints(from: Coordinate, to: Coordinate) {
        const latitudeIsEqual = from.latitude == to.latitude;
        const longitudeIsEqual = from.longitude == to.longitude;
        if (latitudeIsEqual && longitudeIsEqual) return 0;
        const radlat1 = (Math.PI * from.latitude) / 180;
        const radlat2 = (Math.PI * to.latitude) / 180;
        const theta = from.longitude - to.longitude;
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