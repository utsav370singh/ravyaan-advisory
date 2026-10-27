import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request:Request){
  try{
    const body=await request.json();
    const email=String(body.email||"").trim();
    if(body.website)return NextResponse.json({ok:true});
    if(!/^\S+@\S+\.\S+$/.test(email))return NextResponse.json({error:"Please enter a valid email address."},{status:400});
    const {SMTP_HOST,SMTP_PORT,SMTP_SECURE,SMTP_USER,SMTP_PASSWORD,SMTP_FROM,SMTP_TO}=process.env;
    if(!SMTP_HOST||!SMTP_USER||!SMTP_PASSWORD||!SMTP_TO)return NextResponse.json({error:"Newsletter delivery is not configured yet."},{status:503});
    const transport=nodemailer.createTransport({host:SMTP_HOST,port:Number(SMTP_PORT||587),secure:SMTP_SECURE==="true",auth:{user:SMTP_USER,pass:SMTP_PASSWORD}});
    await transport.sendMail({from:SMTP_FROM||SMTP_USER,to:SMTP_TO,replyTo:email,subject:"RAVYAAN Insights subscription",text:`Please add ${email} to the RAVYAAN Insights subscriber list.`});
    return NextResponse.json({ok:true});
  }catch{return NextResponse.json({error:"We could not process your subscription. Please try again."},{status:500})}
}
