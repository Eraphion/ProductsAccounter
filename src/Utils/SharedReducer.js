import {DEFAULT} from 'Actions/Types';

const ApplyHandler = getHandlers => (state, action) => {
    const handlers = getHandlers(state,action);
    const handler = handlers[action.type] || handlers[DEFAULT];
    return handler() || null;
}

export default ApplyHandler;