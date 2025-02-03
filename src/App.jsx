import { useState } from "react";
import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function ComponentProps({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

function TableContent({ children, onSelect , isSelected}) {
  // function handleClick() {
  //   return console.log("tharun");
  // }

  return (
    <li>
      <button className = {isSelected ? "active" : null} onClick={onSelect}>{children}</button>
    </li>
  );
}

function App() {
  // let console_output = "Love da";

  const [ans, setAns] = useState();

  function handleClick(selectedbutton) {
    // console_output = selectedbutton;

    setAns(selectedbutton);

    // return console.log(selectedbutton);
  }

  let tableContent = 'Click any button';

  if(ans){
    tableContent = (
    <div id="tab-content">
            <h3>{EXAMPLES[ans].title}</h3>
            <p>{EXAMPLES[ans].description}</p>
            <pre>
              <code>{EXAMPLES[ans].code}</code>
            </pre>
          </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>

            {CORE_CONCEPTS.map((item) => 
              <ComponentProps key={item.title} {...item} />)}

            {/* <ComponentProps
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <ComponentProps {...CORE_CONCEPTS[1]} />
            <ComponentProps {...CORE_CONCEPTS[2]} />
            <ComponentProps {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TableContent isSelected = { ans === 'components'} onSelect={() => handleClick("components")}>
              Component
            </TableContent>
            <TableContent isSelected = { ans === 'jsx'} onSelect={() => handleClick("jsx")}>JSX</TableContent>
            <TableContent isSelected = { ans === 'props'} onSelect={() => handleClick("props")}>
              Props
            </TableContent>
            <TableContent isSelected = { ans === 'state'} onSelect={() => handleClick("state")}>
              State
            </TableContent>
          </menu>
          {/* {console_output} */}
          {/* {ans} */}
          {tableContent}
        </section>
      </main>
    </div>
  );
}

export default App;
