import { useState } from "react";
import AccountSetup from "./AccountSetup"
import Socials from "./Socials";

export default function StepForm() {
    const [step, setStep] = useState(1)

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step -1)
    }

    switch(step) {
            case 1:
              return (
                  <AccountSetup
                    nextStep={nextStep}

                   />
              );
            case 2:
                return (
                    <Socials
                      nextStep={nextStep}
                      prevStep={prevStep}
                     />
                );
        }
         
}