class apiResponse{
    constructor(statusCode,data,message = "sucsess"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400
    }
}