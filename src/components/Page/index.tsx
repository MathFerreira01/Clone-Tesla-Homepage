import React from "react";

import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer} from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model S",
            "Model X",
            "Model Y",
            "Model 3",
            "Solar Panels",
          ].map(modelName => (
            <ModelSection
            key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
