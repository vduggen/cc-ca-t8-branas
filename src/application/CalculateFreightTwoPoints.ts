import Distance from "@domain/entity/Distance";
import DistanceRepository from "@domain/repository/DistanceRepository";

export type InputCalculateFreightTwoPoints = {
    zipcode1: string;
    zipcode2: string
}

export default class CalculateFreightTwoPoints {

    constructor(
        readonly distance: Distance,
        readonly distanceRepository: DistanceRepository
    ) {}

    async execute(input: InputCalculateFreightTwoPoints) {
        const zipcode1Infos = await this.distanceRepository.getByZipcode(input.zipcode1);
        const zipcode2Infos = await this.distanceRepository.getByZipcode(input.zipcode2);

        return this.distance.calculateTwoPoints(zipcode1Infos, zipcode2Infos);        
    }
}