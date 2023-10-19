import { createRoot } from 'react-dom/client';

// import statement to indicate that you need to bundle ./index.scss
import "./index.scss";

// Main Component (will eventually use all the others)
const MyFLixApplication = () => {
  return (
    <div className="my-flix">
      <div>Good Morning</div>
    </div>
  );
};

// finds the root of the app
const container = document.querySelector("#root");
const root = createRoot(container);

// tells React to redner your app i the root DOM element
root.render(<MyFlixApplication />);