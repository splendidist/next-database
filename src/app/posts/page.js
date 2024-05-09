import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Posts() {
  const flowers = await sql`
    SELECT * FROM flowers;
  `;

  return (
    <div>
      {flowers.rows.map((flower) => (
        <div key={flower.id}>
          <Link href={`/posts/${flower.id}`} key={flower.id}>
            {flower.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
