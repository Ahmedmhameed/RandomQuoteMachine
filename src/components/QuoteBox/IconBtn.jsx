export default function IconBtn({ id, title, url, icon, color = {} }) {
  return (
    <a
      className="button"
      id={id}
      title={title}
      target="_top"
      href={url}
      style={{
        background: `rgb(${color.red}, ${color.green}, ${color.blue})`,
        color: "white",
      }}
    >
      <i className={`fa fa-${icon}`}></i>
    </a>
  );
}
