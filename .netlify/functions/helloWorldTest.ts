import { Handler } from "@netlify/functions";
import { createElement } from "react";
import ReactDOMServer from "react-dom/server";
import { HelloWorld } from "../../components/HelloWorld";

const handler: Handler = async function (event, context) {
  // This is where I would render a react component to string, and then send via email
  ReactDOMServer.renderToString(createElement(HelloWorld));
  return {
    statusCode: 200,
  };
};

export { handler };
