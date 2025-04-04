import { hitCoda, Result } from '../utils'

export default async function sd(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=20524&voucherPricePoint.price=10000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=SPEEDDRIFTERS&shopLang=id_ID`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Speed Drifters',
    id,
    name: data.confirmationFields.roles[0].role
  }
}
