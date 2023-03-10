export const schemaTypes = [
    {
        name:'student',
        title:'Student',
        type:'document',
        fields: [
            {
                name:'name',
                title:'Name',
                type:'string',
            },
            {
                name:'roll',
                title:'Roll',
                type:'string',
            },
            {
                name:'status',
                title:'Status',
                type:'boolean',
            },
            {
                name:'checkin',
                title:'CheckIn',
                type:'string',
            },
            {
                name:'outcheck',
                title:'CheckOut',
                type:'string',
            }
        ]
    }
]
