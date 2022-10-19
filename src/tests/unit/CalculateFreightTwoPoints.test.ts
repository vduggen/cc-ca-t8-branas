import Distance from "@domain/entity/Distance";
import DistanceRepositoryMemory from "@infra/repository/memory/DistanceRepositoryMemory";
import CalculateFreightTwoPoints, { InputCalculateFreightTwoPoints } from "../../application/CalculateFreightTwoPoints"

describe('CalculateFreightTwoPoints', function() {
    test('Calcule a distância entre dois CEPs', async function() {
        const distance = new Distance();
        const distanceRepository = new DistanceRepositoryMemory();
        await distanceRepository.save('89041230', -26.9155, -49.0709);
        await distanceRepository.save('20020050', -22.9129, -43.2003);
        const calculateFreightTwoPoints = new CalculateFreightTwoPoints(distance, distanceRepository);
        const input: InputCalculateFreightTwoPoints = {
            zipcode1: '89041230',
            zipcode2: '20020050'
        }
        const result = await calculateFreightTwoPoints.execute(input);
        expect(result).toBe(740.4370932994265);
    })
})