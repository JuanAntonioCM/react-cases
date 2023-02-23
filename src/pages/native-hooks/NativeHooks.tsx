import React from "react";
import { Button } from "../../components/Button";

export const NativeHooksPage = () => {
  return (
    <div>
      <Button>Click me 1</Button>
      <Button asChild>
        <a href="#">Click me 2</a>
      </Button>
    </div>
  );
};
