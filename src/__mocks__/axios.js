const mockData={
    data:{
        results:[
            {
                name:"sruthi voleti"
            }
        ]
    }
}

export default{
    get: jest.fn().mockResolvedValue(mockData)
}