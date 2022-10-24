import Distance from "@domain/entity/Distance";
import DistanceRepository from "@domain/repository/DistanceRepository";

export type InputGetDistanceTwoPoints = {
    fromZipcode: string;
    toZipcode: string
}

export default class GetDistanceTwoPoints {

    constructor(
        private readonly distance: Distance,
        private readonly distanceRepository: DistanceRepository
    ) {}

    async execute(input: InputGetDistanceTwoPoints) {
        const fromZipcodeInfos = await this.distanceRepository.getByZipcode(input.fromZipcode);
        const toZipcodeInfos = await this.distanceRepository.getByZipcode(input.toZipcode);

        return this.distance.getDistanceTwoPoints(fromZipcodeInfos, toZipcodeInfos);
    }
}