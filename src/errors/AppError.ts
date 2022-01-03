export class AppError {
  status: number
  message: string
  constructor(status = 400, message: string){
    this.status = status
    this.message = message
  }
}