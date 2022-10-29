export interface JobApplication{
    detalis:{
        id:number,
        jobId:number,
        jobSeekerId:number,
        statusId:number,
        createdTime:Date,
        UpdatedTime:Date
    },
    statusHistories:{
        id:number,
        statusId:number,
        userId:number,
        createdTime:Date

    }
}