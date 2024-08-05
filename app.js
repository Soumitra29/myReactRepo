const heading1 = React.createElement("h1",{id:"heading"},"Hello World From React!!!");
console.log(heading1)
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);

// const para = React.createElement("p1",{},"This is a paragrapgh...");
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(para);