function Project(props) {
  const { img, title, author } = props;
  return (
    <article className="project">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
}
export default Project;
