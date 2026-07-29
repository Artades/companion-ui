interface UseFieldControlOptions {
    ariaDescribedBy?: string;
    error?: string;
    id?: string;
}
declare const useFieldControl: ({ ariaDescribedBy, error, id, }: UseFieldControlOptions) => {
    controlId: string;
    describedBy: string | undefined;
    errorId: string | undefined;
};
export default useFieldControl;
