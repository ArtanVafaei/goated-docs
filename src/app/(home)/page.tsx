"use client";

import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./template-gallery";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Home = () => {
  const documents = useQuery(api.documents.get);

  if (documents === undefined) {
    return (
      <p>Loading...</p>
    )
  }

  return ( 
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        {documents?.map((document) => (
          <span key={document._id}>{document.title}</span>
        ))}
      </div>
      <div className="mt-16">
        Click&nbsp;<Link href="/documents/123">
        <span className="text-blue-500 underline">here</span>
        </Link>&nbsp;to go to document id 123
      </div>
    </div>
   );
}

export default Home;
