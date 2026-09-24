class apiResponse{
    constructor(statusCode,data,message){
        this.statusCode=statusCode,
        this.Success=statusCode<400,
        this.data=data,
        this.message=message
    }
}

export {apiResponse}