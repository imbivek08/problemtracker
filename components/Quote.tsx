import { useEffect, useState } from "react";

export default function Quote() {
  const staticQuotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe in yourself and all that you are.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    // If you want the quote to be dynamic, replace this logic with an API fetch
    const randomQuote =
      staticQuotes[Math.floor(Math.random() * staticQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className=" p-6 rounded-lg shadow-md text-center mb-6">
      <h2 className="text-xl font-semibold mb-2">💡 Stay Motivated!</h2>
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  );
}
