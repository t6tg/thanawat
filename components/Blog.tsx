import React from "react";
import Card from "./Card";

function Blog({ data }) {
  return (
    <div className="grid mt-6 md:grid-cols-2 lg:grid-cols-4 w-5/6 gap-4 mx-auto">
      {data.map((r) => (
        <div key={r.id}>
          <Card data={r} />
        </div>
      ))}
    </div>
  );
}

export default Blog;
