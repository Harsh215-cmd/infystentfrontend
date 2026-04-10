const logos = [
  "react.png", "node.png", "mongodb.png", "express.png",
  "html.png", "css.png", "js.png", "next.png",
  "redux.png", "tailwind.png", "bootstrap.png", "firebase.png",
  "aws.png", "docker.png", "git.png", "github.png",
  "figma.png", "photoshop.png", "typescript.png", "vite.png",
  "vercel.png", "netlify.png", "linux.png", "postman.png"
];

const TechStackSection = () => {
  return (
    <section className="tech">

      <h2 className="tech-title">Technologies We Use</h2>

      <div className="tech-slider">
        <div className="tech-track">
          
          {/* First Set */}
          {logos.map((logo, index) => (
            <div className="tech-logo" key={index}>
              <img src={`/logos/${logo}`} alt="tech" />
            </div>
          ))}

          {/* Duplicate for infinite scroll */}
          {logos.map((logo, index) => (
            <div className="tech-logo" key={"dup-" + index}>
              <img src={`/logos/${logo}`} alt="tech" />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default TechStackSection;