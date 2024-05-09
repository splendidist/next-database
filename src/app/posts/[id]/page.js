import { sql } from "@vercel/postgres";
import Image from "next/image";

export default async function PostPage({ params }) {
  const flowers = await sql`
  SELECT * FROM flowers WHERE id = ${params.id};
`;
  const [flower] = flowers.rows;

  return (
    <div>
      <h2>Flower {flower.id}</h2>
      <h3>{flower.title}</h3>
      <p>{flower.content}</p>
      <Image
        src={`/${flower.title}.png`}
        alt={flower.title}
        width={300}
        height={450}
      />
    </div>
  );
}
