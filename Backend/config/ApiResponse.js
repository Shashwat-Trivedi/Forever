class ApiResponse {
  constructor(statusCode, data, message = 'sucess' , token = null) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.token = token;
    this.sucess = statusCode < 400;
  }
}

export { ApiResponse };
