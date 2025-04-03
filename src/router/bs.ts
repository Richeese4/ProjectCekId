import { hitCoda, Result } from '../utils'

export default async function ff(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=895131&voucherPricePoint.price=14000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=BLOOD_STRIKE&shopLang=id_ID`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Blood Strike',
    id,
    name: data.confirmationFields.roles[0].role
  }
}
