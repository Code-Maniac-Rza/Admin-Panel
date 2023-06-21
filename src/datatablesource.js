export const userCols = [
    { field: 'id', headerName: 'ID', width: 170 },
    {field:'user', headerName: 'User', width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }},

    {
        field:"email", headerName:"Email", width:230
    },

    {
        field:"age", headerName:"Age", width:100
    },
    
    {
        field:"status", headerName:"Status", width:160, renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },

];

export const userRows = [

    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "John Smith",
        date: "1 March",
        amount: "785",
        method: "Cash on Delivery",
        status: "Approved",
        age: 40,
        email: "hello@xyz.com",

    },
    {
        id: 1143156,
        product: "PlayStation 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "Michael Doe",
        date: "1 June",
        amount: "900",
        method: "Online payment",
        status: "Pending",
        age:23,
        email: "abc@xyz.com",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "John Smith",
        date: "1 March",
        amount: "785",
        method: "Cash on Delivery",
        status: "Approved",
        age: 40,
        email: "hello@xyz.com",

    },
    {
        id: 1143156,
        product: "PlayStation 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "Michael Doe",
        date: "1 June",
        amount: "900",
        method: "Online payment",
        status: "Pending",
        age:23,
        email: "abc@xyz.com",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "John Smith",
        date: "1 March",
        amount: "785",
        method: "Cash on Delivery",
        status: "Approved",
        age: 40,
        email: "hello@xyz.com",

    },
    {
        id: 1143156,
        product: "PlayStation 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "Michael Doe",
        date: "1 June",
        amount: "900",
        method: "Online payment",
        status: "Pending",
        age:23,
        email: "abc@xyz.com",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "John Smith",
        date: "1 March",
        amount: "785",
        method: "Cash on Delivery",
        status: "Approved",
        age: 40,
        email: "hello@xyz.com",

    },
    {
        id: 1143156,
        product: "PlayStation 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "Michael Doe",
        date: "1 June",
        amount: "900",
        method: "Online payment",
        status: "Pending",
        age:23,
        email: "abc@xyz.com",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "John Smith",
        date: "1 March",
        amount: "785",
        method: "Cash on Delivery",
        status: "Approved",
        age: 40,
        email: "hello@xyz.com",

    },
    {
        id: 1143156,
        product: "PlayStation 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "Michael Doe",
        date: "1 June",
        amount: "900",
        method: "Online payment",
        status: "Pending",
        age:23,
        email: "abc@xyz.com",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "John Smith",
        date: "1 March",
        amount: "785",
        method: "Cash on Delivery",
        status: "Approved",
        age: 40,
        email: "hello@xyz.com",

    },
    {
        id: 1143156,
        product: "PlayStation 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "Michael Doe",
        date: "1 June",
        amount: "900",
        method: "Online payment",
        status: "Pending",
        age:23,
        email: "abc@xyz.com",

    },
    {
        id: 1143155,
        product: "Acer Nitro 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "John Smith",
        date: "1 March",
        amount: "785",
        method: "Cash on Delivery",
        status: "Approved",
        age: 40,
        email: "hello@xyz.com",

    },
    {
        id: 1143156,
        product: "PlayStation 5",
        img: "https://source.unsplash.com/FbN2z3bEaSs",
        customer: "Michael Doe",
        date: "1 June",
        amount: "900",
        method: "Online payment",
        status: "Pending",
        age:23,
        email: "abc@xyz.com",

    },

];