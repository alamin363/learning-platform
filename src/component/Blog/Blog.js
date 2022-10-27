import React from "react";
import { FaAlignRight, FaAngleRight, FaQuestion, FaQuestionCircle } from "react-icons/fa";
import "./Blog.css";

const Blog = () => {
  const data = [
    {
      id: 1,
      qursen: "What is cors?",
      ans: "Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there .",
    },
    {
      id: 2,
      qursen: "how does work privet rout",
      ans: "The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated",
    },
    {
      id: 3,
      qursen: "how to devolopment a  site without firebase?",
      ans: "It’s important to note that this convenient way of divvying up development has changed significantly over the past 10 to 15 years with the explosive growth of JavaScript, which wasn’t as ubiquitous on the front end as it is now, or as common on the back end, thanks to Node.js. There’s more overlap between the two, especially when it comes to a JavaScript developer’s role on a fully JavaScript-powered stack.",
    },
    {
      id: 4,
      qursen: "What is node js. how dows work",
      ans: "Node.js is an open source server environmen. Node.js is an open source server environmen.Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient. 🧟 Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. ",
    },
  ];
  console.log(data);
  return (
   <div className="blog-card">
        {data.map(dt => <div key={dt.id} className="singlecard">
          <h2 className="title"><FaQuestionCircle /> {dt.qursen}</h2>
          <p className="underline"></p>
          <h4 className="title">Ans:<FaAngleRight /> {dt.ans}</h4>
          <br />
        </div>)}
      </div>
  );
};

export default Blog;
