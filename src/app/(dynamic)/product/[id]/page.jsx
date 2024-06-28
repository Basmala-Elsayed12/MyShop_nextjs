import React from "react";
import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getProduct(params.id);

  return {
    title: data.title,
    description: data.description,
    icons: { icon: ["/favicon.ico?v=4"] },
  };
}

export default async function id({ params }) {
  const data = await getProduct(params.id);

  return (
    <div className="flex flex-col items-center py-14 ">
      <div className=" p-14 border rounded-lg shadow-lg border-cyan-300 ">
        <header className=" mb-8">
          <h1 className="text-3xl font-bold mb-4 text-cyan-600">
            {data.title}
          </h1>
          <p className="max-w-3xl text-neutral-500 text-justify">
            {data.description}
          </p>
        </header>
        <div
          className="w-1/2 relative mb-8"
          style={{ height: 0, paddingBottom: "37.5%" }}
        >
          <Image
            src={data.image}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className=" max-w-2xl text-neutral-500 columns-2 text-justify">
          <p>{data.description}</p>
        </div>
      </div>
      ;
    </div>
  );
}
