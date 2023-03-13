import "./styles.css";
import { useState } from "react";

import ShowHide from "./components/ShowHide";
import Timer from "./components/Timer";
import Cities from "./components/Cities";
import Progress from "./components/Progress";
import Input from "./components/Input";
import Button from "./components/Button";

export default function App() {
  return (
    // <ShowHide />
    // <Timer/>
    // <Cities/>
    // <Progress />
    // <Input placeholder="test" required={true} />
    <Button outline={true} className="btn-bold">
      Hello
    </Button>
  );
}
