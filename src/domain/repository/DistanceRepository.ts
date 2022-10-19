import DistanceItem from "@domain/entity/DistanceItem";

export default interface DistanceRepository {
    getByZipcode(zipcode: string): Promise<DistanceItem>;
    save(zipcode: string, latitude: number, longitude: number): Promise<void>;
}