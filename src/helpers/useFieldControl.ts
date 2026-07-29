import { useId } from "react";

interface UseFieldControlOptions {
  ariaDescribedBy?: string;
  error?: string;
  id?: string;
}

const useFieldControl = ({
  ariaDescribedBy,
  error,
  id,
}: UseFieldControlOptions) => {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const errorId = error ? `${controlId}-error` : undefined;
  const describedBy =
    [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;

  return { controlId, describedBy, errorId };
};

export default useFieldControl;
