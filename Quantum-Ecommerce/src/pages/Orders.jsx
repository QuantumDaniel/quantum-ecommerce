
import './Orders.css';

const Orders = ({ orders, setOrders }) => {

    const date = new Date();
    const deliveryDate = new Date();
    // Sample orders data


    // Status badges mapping
    const statusConfig = {
        'Delivered': { bgColor: '#d4edda', textColor: '#155724', icon: 'fas fa-check-circle' },
        'In Transit': { bgColor: '#cfe2ff', textColor: '#084298', icon: 'fas fa-truck' },
        'Processing': { bgColor: '#fff3cd', textColor: '#664d03', icon: 'fas fa-spinner' },
        'Cancelled': { bgColor: '#f8d7da', textColor: '#842029', icon: 'fas fa-times-circle' }
    };

    return (
        <div className="orders-container">
            <div className="orders-wrapper">
                {/* Orders Header */}
                <div className="orders-header">
                    <h2 className="orders-title">My Orders</h2>
                    <span className="orders-item-count">({orders.length} orders)</span>
                </div>

                {/* Orders List */}
                <div className="orders-list">
                    {orders.map((order) => (
                        <div key={order.id} className="order-card">
                            {/* Order Card Header */}
                            <div className="order-card-header">
                                <div className="order-info">
                                    <h4 className="order-number">{order.orderNumber}</h4>
                                    <p className="order-date">
                                        <i className="fas fa-calendar me-2"></i>
                                        {new Date(order.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>

                                <div
                                    className="order-status-badge"
                                    style={{
                                        backgroundColor: statusConfig[order.status].bgColor,
                                        color: statusConfig[order.status].textColor
                                    }}
                                >
                                    <i className={`${statusConfig[order.status].icon} me-2`}></i>
                                    {order.status}
                                </div>
                            </div>

                            {/* Order Items */}
                            <div className="order-items">
                                <div className="order-items-header">
                                    <span className="items-label">Items ({order.items.length})</span>
                                </div>

                                {order.items.map((item, index) => (
                                    <div key={index} className="order-item-row">
                                        <div className="order-item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="order-item-details">
                                            <p className="order-item-name">{item.name}</p>
                                            <p className="order-item-quantity">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="order-item-price">
                                            <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="order-summary-section">
                                <div className="row g-3">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="summary-info">
                                            <span className="summary-label">Order Total:</span>
                                            <span className="summary-value">${order.totalAmount.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {order.deliveryDate && (
                                        <div className="col-md-4 col-sm-6">
                                            <div className="summary-info">
                                                <span className="summary-label">Delivery Date:</span>
                                                <span className="summary-value">
                                                    {new Date(order.deliveryDate).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="col-md-4 col-sm-6">
                                        <div className="summary-info">
                                            <span className="summary-label">Tracking:</span>
                                            <span className="summary-value tracking-number">{order.trackingNumber}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Actions */}
                            <div className="order-actions">
                                {/*
                                <button className="btn-view-details">
                                    <i className="fas fa-eye me-2"></i>
                                    View Details
                                </button>
                                */}

                                {order.status === 'Delivered' && (
                                    <>
                                        <button className="btn-reorder" onClick={() => {
                                            //orders.map((item) => item.id).includes(order.id) ? orders :
                                            setOrders(
                                                [
                                                    ...orders, {
                                                        id: orders.map((item) => { return (item.id) }),
                                                        orderNumber: `#ORD-${Math.random()}`,
                                                        date: date.toDateString(),
                                                        status: 'Processing',
                                                        totalAmount: order.totalAmount,
                                                        items: order.items.map((item) => { return item }),
                                                        deliveryDate: deliveryDate.setDate(date.getDate() + 5),
                                                        trackingNumber: `TRK${Date.now()}`
                                                    }
                                                ]
                                            )

                                        }} >
                                            <i className="fas fa-redo me-2"></i>
                                            Reorder
                                        </button>
                                        <button className="btn-return">
                                            <i className="fas fa-box-open me-2"></i>
                                            Return Item
                                        </button>
                                    </>
                                )}

                                {order.status === 'In Transit' && (
                                    <button className="btn-track">
                                        <i className="fas fa-map-marker-alt me-2"></i>
                                        Track Package
                                    </button>
                                )}

                                {order.status === 'Processing' && (
                                    <button className="btn-cancel" onClick={() => { setOrders(orders.filter(i => i.id !== order.id)) }}>
                                        <i className="fas fa-ban me-2"></i>
                                        Cancel Order
                                    </button>
                                )}

                                <button className="btn-invoice">
                                    <i className="fas fa-receipt me-2"></i>
                                    Download Invoice
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
