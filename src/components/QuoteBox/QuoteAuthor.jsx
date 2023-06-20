/* eslint-disable react/prop-types */
function QuoteAuthor({ authorName, color = {}, loading }) {
  return (
    <div className="quote-author" style={{ textAlign: "right" }}>
      <span
        id="author"
        className={`quote-text ${loading ? "fade-out" : "fade-in"}`}
        style={{
          color: `rgb(${color.red}, ${color.green}, ${color.blue})`,
        }}
      >
        - {authorName}
      </span>
    </div>
  );
}

export default QuoteAuthor;
