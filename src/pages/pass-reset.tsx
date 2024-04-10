"use client";
import Link from "next/link";

const Home = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = { email: form.get("email"), message: form.get("message") };
    console.log(data);
    try {
      const response = await fetch("http://localhost:4000/api/reset-pass", {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",

        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative flex place-items-center p-5 bg-white text-black">
        <Link href="/">Home</Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col w-500">
          <label htmlFor="form-email"> Email:</label>
          <input
            id="form-email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            // type="email"
            className="text-black"
          />
        </div>
        <label htmlFor="form-message"> Message: </label>
        <textarea
          id="form-message"
          required
          name="message"
          rows={5}
          className="text-black"
        />
        <button className=" rounded bg-sky-400" type="submit">
          Send
        </button>
      </form>
    </main>
  );
};

export default Home;
