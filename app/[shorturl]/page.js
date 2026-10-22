import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default function Page({ params }) {
return (
<Suspense fallback={<p>Redirecting...</p>}> <RedirectUser params={params} /> </Suspense>
);
}

async function RedirectUser({ params }) {
const { shorturl } = await params;


const client = await clientPromise;
const db = client.db("NanoLink");
const collection = db.collection("urls");

const doc = await collection.findOne({ shorturl });

if (doc) {
    redirect(doc.url);
}

notFound();


}
