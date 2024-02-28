function renderElement(reactElement, container) {
	const domElement = document.createElement(reactElement.type);
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
	}
  domElement.innerHTML = reactElement.children;
  container.appendChild(domElement);
}

const myAnchorAsReactElement = {
	type: "a",
	props: {
		href: "https://www.github.com/AreebZaho",
		target: "_blank",
	},
	children: "My github account",
};

const mainContainer = document.getElementById("root");

renderElement(myAnchorAsReactElement, mainContainer);
