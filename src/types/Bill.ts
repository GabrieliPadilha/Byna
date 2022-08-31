export type Bill = {
  customer: string
  date: string
  status: 'Em Aberto' | 'Faturado' | 'Cancelado'
}
