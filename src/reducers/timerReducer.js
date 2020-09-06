import { Time } from "../Utils/time";

export const timerInitialState = {
  milliseconds: 0,
  seconds: '00',
  minutes: '00',
  hours: '00',
  // unit time can take the value of h, m, or s.
  selectedUnitTime: null,
  timeInfo: Time.getTime(0),
  isTimerStarted: false,
  timerInterval: null,
  isAlmostFinished: false,
};

export function timerReducer(state, action) {
  switch (action.type) {
    case "MILLISECONDS":
      return { ...state, milliseconds: action.payload };
    case "DEC_MILLISECONDS":
      if (state.isTimerStarted && state.milliseconds < 10 * 1000) {
        state.isAlmostFinished = true;
      }

      if (state.milliseconds < 0) {
        clearInterval(state.timerInterval);
        return { ...timerInitialState };
      }

      return {
        ...state,
        milliseconds: state.milliseconds - 10,
      };
    case "SECONDS":
      return { ...state, seconds: action.payload };
    case "UNIT_TIME":
      return { ...state, selectedUnitTime: action.payload };
    case "UPDATE_TIMES":
      const timeUnit = state.lastInputSelected.dataset.timeUnit;

      switch (timeUnit) {
        case "s":
          return { ...state, seconds: action.payload };
        case "m":
          return { ...state, minutes: action.payload };
        case "h":
          return { ...state, hours: action.payload };
      }
    case "TIMEINFO":
      return { ...state, timeInfo: Time.getTime(action.payload) };
    case "UPDATE_TIMEINFO":
      return { ...state, timeInfo: Time.getTime(state.milliseconds) };
    case "TIMER_STARTED":
      return { ...state, isTimerStarted: action.payload };
    case "TIMER_INTERVAL":
      return { ...state, timerInterval: action.payload };
    case "TIMER_ALMOST_FINISHED":
      return { ...state, isAlmostFinished: action.payload };
    default:
      throw new Error();
  }
}
