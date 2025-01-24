"use client";

import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplateGallery } from "./template-gallery";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./documents-table";

const Home = () => {
  const {
    results,
    status,
    loadMore
  } = usePaginatedQuery(api.documents.get, {}, { initialNumItems: 5 });

  return ( 
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
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
