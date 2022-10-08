import React from "react";
import formJSON from "../formElements.json";
import { useState, useEffect } from "react";
import Element from "./Element";
import { FormContext } from "./FormContext";
function FormPage() {
  const [elements, setElements] = useState<any>(null);
  useEffect(() => {
    setElements(formJSON[0]);
  }, []);
  const { fields, page_label } = elements ?? {};
  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(elements);
  };
  const handleChange = (id: any, event: any): void => {
    const newElements = { ...elements };
    newElements.fields.forEach((field: any) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;

          default:
            field["field_value"] = event.target.value;
            break;
        }
      }
      setElements(newElements);
    });
    console.log(elements);
  };
  return (
    <>
      <FormContext.Provider value={{ handleChange }}>
        <div className="App container">
          <h3>{page_label}</h3>
          <form>
            {fields
              ? fields.map((field: any, i: any) => (
                  
                  <Element key={i} field={field} />
                ))
              : null}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </FormContext.Provider>
    </>
  );
}

export default FormPage;
