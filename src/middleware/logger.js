const logger = store => next => action => {
  console.group(action.type); 
  console.log("The action:", action);
  const returnValue = next(action);
  console.log("The new state:", store.getState());
  console.groupEnd();
  console.log('tany tany tany')
  return returnValue;
};
export default logger 