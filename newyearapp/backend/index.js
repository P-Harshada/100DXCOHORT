//write basic express boilerplate code,
//with express.json() middleware
const express = require("express");
const { createTodo, updateTodo}= require("./types");
const { todo }= require ()
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

//body{
    //title: string;
    //description: string;
//}

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        returns;
    }
    await todo.create({
        title: createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "Todo created"
    })
    //put it in mongodb
})

app.get("/todos", async function(req, res){
    const todos = await to.find({});
    
    res.json({
        todos
    })

})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(uploadPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        returns;
    }
    await todo.update({
        _id: req.body.id
    } ,{
        completed : true 
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);