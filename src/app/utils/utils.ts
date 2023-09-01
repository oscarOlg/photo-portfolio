export const slideTransitionClasses = {
  enter: "transform transition ease-in-out duration-400",
  enterFrom: "translate-x-full",
  enterTo: "translate-x-0",
  leave: "transform transition ease-in-out duration-400",
  leaveFrom: "translate-x-0",
  leaveTo: "translate-x-full",
};

export const simpleTransitionClasses = {
  enter: "transition-opacity duration-75",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "transition-opacity duration-150",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};
