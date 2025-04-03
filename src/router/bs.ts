import { hitCoda, Result } from '../utils'

export default async function bs(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=895131&voucherPricePoint.price=14000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=BLOOD_STRIKE&shopLang=id_IDvoucherTypeId=358&gvtId=508`
  const data = await hitCoda(body)
  return {
    success: true,
    game: 'Blood Strike',
    id,
    name: data.confirmationFields.username
  }
}
