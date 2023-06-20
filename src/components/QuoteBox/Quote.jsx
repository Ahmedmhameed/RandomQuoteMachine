/* eslint-disable react/prop-types */
function Quote({ txt, color = {}, loading }) {
  return (
    <div
      className={`quote-text ${loading ? "fade-out" : "fade-in"}`}
      style={{
        color: `rgb(${color.red}, ${color.green}, ${color.blue})`,
      }}
    >
      <i className="fa fa-quote-left"></i>
      <span id="text">{txt}</span>
    </div>
  );
}

export default Quote;
