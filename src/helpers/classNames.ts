type ClassName = string | false | null | undefined;

const classNames = (...classNames: ClassName[]) =>
  classNames.filter(Boolean).join(" ");

export default classNames;
