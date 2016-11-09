import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import reducer from "reducers/cellsReducer.js";
const logger = createLogger();
export default createStore(reducer,{
                        size: {
                            col: 50,
                            row: 50
                        },
                        cells: []
                    },
                    applyMiddleware(logger)
                );