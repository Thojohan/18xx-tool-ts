import { BsExclamationTriangle } from "react-icons/bs";
import Button from "./Button";

type HandlerType = {
  yesHandler: (() => void);
  noHandler: (() => void);
  children: string
}

function TerminateToast({ yesHandler, noHandler, children } : HandlerType) {
  return (
    <div>
      <p className="flex gap-2 items-center">
        <span>
          <BsExclamationTriangle className="text-red-800 dark:text-red-400 text-lg" />
        </span>
        <span>{children}</span>
        <span>
          <BsExclamationTriangle className="text-red-800 dark:text-red-400 text-lg" />
        </span>
      </p>
      <span className="flex justify-around mt-2">
        <Button variant="primary" type="button" clickHandler={yesHandler}>
          Yes
        </Button>
        <Button variant="primary" type="button" clickHandler={noHandler}>
          No
        </Button>
      </span>
    </div>
  );
}

export default TerminateToast;
