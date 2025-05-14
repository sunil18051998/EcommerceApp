import { getState, setState, addOrder, removeOrder, updateOrder } from '../state';

const stateMiddleware = (req, res, next) => {
    req.getState = getState;
    req.setState = setState;
    req.addOrder = addOrder;
    req.removeOrder = removeOrder;
    req.updateOrder = updateOrder;
    next();
};

export default stateMiddleware;
