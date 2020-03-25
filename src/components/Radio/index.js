import React from "react";
import { Group, Input, Label } from "./style";

const Radio = props => {
  return (
    <Group>
      <Input
        type="text"
        name={props.name}
        id={props.id}
        onClick={props.select}
      />
      <Label htmlFor={props.id}>{props.value}</Label>
    </Group>
  );
};

export default Radio;
