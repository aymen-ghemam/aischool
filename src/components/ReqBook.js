import { useState } from "react";
import Button from "../components/Button";
import SelectArea from "../components/SelectAreaDocs";

const ReqBook = () => {
  const [state, setState] = useState("request-doc");

  return (
    <div>
      <div className="container reqbook">
        <div className="reqbook-toggle">
          <div className="row">
            <Button
              className="blue"
              text="Request Document"
              onClick={() => {
                setState("request-doc");
              }}
            />
            <Button
              className="grey"
              text="Book Appointment"
              onClick={() => {
                setState("appoint-doc");
              }}
            />
          </div>
        </div>

        {state === "request-doc" && 
          <div>
            <h1 className="title">
              Request a document from your administration
            </h1>
            <h4 className="secondary">
              Check out one of the authorized documents
            </h4>
            <div className="radiobuttons">
              <SelectArea />
            </div>
          </div>
        }
        
        {state === "appoint-doc" && (
          <div>
            <h1 className="title">
              Book an appointment with your administraion
            </h1>
            <h4 className="secondary">
              Order an appointment with your administration
            </h4>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default ReqBook;
