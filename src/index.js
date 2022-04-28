import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return;
}

const Person = () => <h2>this is new header</h2>;
const Message = () => <p>this is the paragraph</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));

//function Greeting() {
//return (
//  <React.Fragment>
//    <div>
//      <Person />
//        <Message />
//     </div>
//    </React.Fragment>
//);
//}
