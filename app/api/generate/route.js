import clientpromise from "@/lib/mongodb"
import { NextResponse } from "next/server"


export async function POST(request){
    try{

    let data=await request.json()

    const client=await clientpromise
    const db=client.db("NanoLink")
    const collection=db.collection("urls")
    
    let doc=await collection.findOne({shorturl:data.shorturl})
    if(doc){
        return NextResponse.json({success: false, error: true,  message: 'shortURL already exists' })
    }else{
    await collection.insertOne({
        url: data.url,
        shorturl: data.shorturl
    })
    
    return NextResponse.json({success: true, error: false,  message: 'URL Generated Successfully' })
}


    }catch(error){
        console.log("Mongodb error:" ,error)

         return NextResponse.json({success: false, error: true,  message: 'Fail to save url ' }, {status:500})
    }  
}