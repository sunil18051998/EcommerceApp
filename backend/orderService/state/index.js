const state = {
    orders: [],
    orderCount: 0,
    status: 'idle',
    error: null,
    config: {
        maxOrders: 100,
        orderTimeout: 30000 // 30 seconds
    }
};

const getState = () => ({
    ...state
});

const setState = (newState) => {
    Object.assign(state, newState);
};

const resetState = () => {
    state.orders = [];
    state.orderCount = 0;
    state.status = 'idle';
    state.error = null;
};

const addOrder = (order) => {
    if (state.orders.length >= state.config.maxOrders) {
        throw new Error('Maximum number of orders reached');
    }
    setState({
        orders: [...state.orders, order],
        orderCount: state.orderCount + 1
    });
};

const removeOrder = (orderId) => {
    const updatedOrders = state.orders.filter(order => order.id !== orderId);
    setState({
        orders: updatedOrders,
        orderCount: updatedOrders.length
    });
};

const updateOrder = (orderId, updates) => {
    const updatedOrders = state.orders.map(order => 
        order.id === orderId ? { ...order, ...updates } : order
    );
    setState({ orders: updatedOrders });
};

export { getState, setState, resetState, addOrder, removeOrder, updateOrder };
