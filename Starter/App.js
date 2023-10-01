const rootElement = document.getElementById("root");
const heading = React.createElement("h1", null, "Namaste React !!");
const heading2 = React.createElement("h2", null, "Namaste React !!!");
const heading3 = React.createElement("h3", null, "Namaste React !!!!");

const container = React.createElement("div", {
    id: 'conatiner',
}, [heading, heading2, heading3]);
const root = ReactDOM.createRoot(rootElement);
root.render(container);
