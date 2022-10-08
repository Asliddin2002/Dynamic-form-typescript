import React from "react";
import Checkbox from "./elements/Checkbox";
import Input from "./elements/Input";
import Select from "./elements/Select";
const Element = ({
  field: {
    // @ts-ignore
    field_type,
    // @ts-ignore
    field_id,
    // @ts-ignore
    field_label,
    // @ts-ignore
    field_placeholder,
    // @ts-ignore
    field_value,
    // @ts-ignore
    field_options,
  },
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          field_id={field_id}
          field_label={field_label}
          field_value={field_value}
        />
      );

    default:
      return null;
  }
};

export default Element;
