import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewPost() {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");

    const title = formData.get("title");
    const content = formData.get("content");

    await sql`INSERT INTO flowers (title, content) VALUES (${title}, ${content})`;
    console.log("Post saved!");

    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <div>
      <form className="form-container" action={handleSavePost}>
        <label htmlFor="title">Favourite Flower</label>
        <input name="title" id="title" placeholder="Flower" />
        <label htmlFor="content">Fun Fact</label>
        <textarea name="content" id="content" placeholder="Fun Fact" />
        <button type="submit">Add Flower</button>
      </form>
    </div>
  );
}
