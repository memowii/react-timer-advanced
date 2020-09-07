import { Time } from "../Utils/time";

export const timerInitialState = {
  milliseconds: 0,
  seconds: "00",
  minutes: "00",
  hours: "00",
  // unit time can take the value of h, m, or s.
  selectedUnitTime: null,
  canStart: false,
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
    case "UPDATE_TIME_UNIT":
      switch (state.selectedUnitTime) {
        case "s":
          return {
            ...state,
            seconds: formatUnitTime(state.seconds, action.payload),
            milliseconds: calcMilliseconds(
              state.hours,
              state.minutes,
              formatUnitTime(state.seconds, action.payload)
            ),
          };
        case "m":
          return {
            ...state,
            minutes: formatUnitTime(state.minutes, action.payload),
            milliseconds: calcMilliseconds(
              state.hours,
              formatUnitTime(state.minutes, action.payload),
              state.seconds
            ),
          };
        case "h":
          return {
            ...state,
            hours: formatUnitTime(state.hours, action.payload),
            milliseconds: calcMilliseconds(
              formatUnitTime(state.hours, action.payload),
              state.minutes,
              state.seconds
            ),
          };
        default:
          throw new Error();
      }
    case "CLEAR_UNIT_TIME":
      switch (state.selectedUnitTime) {
        case "s":
          return {
            ...state,
            seconds: "00",
            milliseconds: calcMilliseconds(state.hours, state.minutes, 0),
          };
        case "m":
          return {
            ...state,
            minutes: "00",
            milliseconds: calcMilliseconds(state.hours, 0, state.seconds),
          };
        case "h":
          return {
            ...state,
            hours: "00",
            milliseconds: calcMilliseconds(0, state.minutes, state.seconds),
          };
        default:
          throw new Error();
      }
    case "CAN_START":
      if (state.milliseconds > 0) {
        return { ...state, canStart: true };
      } else {
        return { ...state, canStart: false };
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

const formatUnitTime = (currentValue, value) =>
  currentValue.split("")[1] + value;

const calcMilliseconds = (hours, minutes, seconds) =>
  (parseInt(hours) * 60 * 60 + parseInt(minutes) * 60 + parseInt(seconds)) *
  1000;
