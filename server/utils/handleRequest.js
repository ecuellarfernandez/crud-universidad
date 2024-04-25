export async function handleRequest(func, args, res){
    try{
        const result = await func(...args);
        if(result.rowCount === 0) return res.status(404).json({message: `404 - Not found ${func.name}`});
        res.status(200).json(result.rows);
    }catch{
        res.status(500).json({message: `500 - Error trying ${func.name}`});
    }
}