import { useEffect, useState } from "react";
import Quote from "./Quote";
import QuoteAuthor from "./QuoteAuthor";
import IconBtn from "./IconBtn";

export default function QuoteBox() {
  const [quote, setQuote] = useState({
    content: "Anticipate the difficult by managing the easy.",
    author: "Laozi",
  });
  const [color, setColor] = useState({ red: 0, green: 200, blue: 100 });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((r) => r.json())
      .then((r) => {
        setQuote(r);
        setLoading(false);
      });
  }, []);
  const iconsBtn = [
    {
      id: "tweet-quote",
      title: "Tweet this quote!",
      url: "https://twitter.com/intent/tweet?text=",
      icon: "twitter",
    },
    {
      id: "tumblr-quote",
      title: "Post this quote on tumblr!",
      url: "https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;content=",
      icon: "tumblr",
    },
  ];
  useEffect(() => {
    document.body.style.background = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  }, [color]);
  const handleClick = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((r) => r.json())
      .then((r) => {
        setQuote(r);
        setLoading(false);
      });
    setColor({
      red: parseInt(Math.random() * 250),
      green: parseInt(Math.random() * 250),
      blue: parseInt(Math.random() * 250),
    });
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div id="quote-box">
      <Quote txt={quote.content} color={color} loading={loading} />
      <QuoteAuthor authorName={quote.author} color={color} loading={loading} />
      <div className="buttons">
        <div className="icons-btn">
          {iconsBtn.map((i) => (
            <IconBtn
              key={i.id}
              {...i}
              url={i.url + quote.content}
              color={color}
            />
          ))}
        </div>
        <div className="normal-btn">
          <button
            className="button"
            id="new-quote"
            style={{
              background: `rgb(${color.red}, ${color.green}, ${color.blue})`,
              color: "white",
            }}
            onClick={handleClick}
          >
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
}
