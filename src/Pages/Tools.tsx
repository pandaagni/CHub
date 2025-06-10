import {tools} from "../Configs/tools";
import "../Styles/Tools.css";
function Tools() {

  const showTooltip = (e: any) => {
    console.log("showTooltip called");
    const element = e.currentTarget.querySelector('.description');
    if (element) {
      element.style.display = "block";
    }
  }
  const hideTooltip = (e: any) => {
    console.log("hideTooltip called");
    const element = e.currentTarget.querySelector('.description');
    if (element) {
      element.style.display = "none";
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Tools</h1>
        <div className="tools-container">
            {tools.map((tool: any, index: any) => (
                <a key={index} className="tool" href={tool.url} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                    <img src={tool.image} alt={tool.name} className="icons"/>
                    <span className="name">{tool.name}</span>
                    <span className="description">
                      {tool.description}
                    </span>
                </a>
            ))}
        </div>
    </div>
  );
}

export default Tools;