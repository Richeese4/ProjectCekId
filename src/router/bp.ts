import { hitCoda, Result } from '../utils'

export default async function bp(id: number): Promise<Result> {
  const body = `voucherPricePoint.id=205527&voucherPricePoint.price=14000&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=EIGHT_BALL_POOL&shopLang=id_ID&voucherTypeId=198&gvtId=250`
  const data = await hitCoda(body)
  return {
    success: true,
    game: '8 Ball Pool',
    id,
    name: data.confirmationFields.roles[0].role
  }
}