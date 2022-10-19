import DistanceItem from "@domain/entity/DistanceItem";
import DistanceRepository from "@domain/repository/DistanceRepository";

export default class DistanceRepositoryMemory implements DistanceRepository {
    distances: DistanceItem[] = [];
    
    constructor() {}

    async getByZipcode(zipcode: string): Promise<DistanceItem> {
        const result = this.distances.filter(distance => distance.zipcode === zipcode);
        return result[0];
    }

    async save(zipcode: string, latitude: number, longitude: number): Promise<void> {
        this.distances.push(new DistanceItem(zipcode, latitude, longitude));
    }
}