import { useState } from "react";
import { StepFlowStep, StepFlow } from "@telia/styleguide/business";
import { TextField } from "@telia/styleguide";
import { useNavigate } from "react-router-dom";
const Flow = () => {
  const [state, setState] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });
  const setKey = (key, value) => {
    setState({ ...state, [key]: value });
  };
  const navigate = useNavigate();

  const step1Valid = true;

  return (
    <div>
      <StepFlow
        title="Step flow"
        description="Commonly used for large forms and orders"
        onSubmit={() => {
          navigate("/Page2");
        }}
        onCancel={() => {
          navigate("/");
        }}
      >
        <StepFlowStep
          title="Onomatopoetikon"
          description="An explanatory text for the first step"
          isValid={step1Valid}
        />
        <StepFlowStep title="Step 2" isValid={true} disabled={!step1Valid} />
      </StepFlow>
    </div>
  );
};
export default Flow;
