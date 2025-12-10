import React, { useRef } from "react";
import { MdClose } from "react-icons/md";
import { useReactToPrint } from "react-to-print";

const ReceiptModal = ({ orderInfo, onClose }) => {
    const receiptRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => receiptRef.current,
    });

    const formatDate = (date) => {
        return new Date(date).toLocaleString();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white">
                    <h2 className="text-xl font-bold text-gray-800">Order Receipt</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <MdClose size={24} />
                    </button>
                </div>

                {/* Receipt Content */}
                <div ref={receiptRef} className="p-6">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">C'Hub Restaurant</h1>
                        <p className="text-sm text-gray-600">Thank you for your order!</p>
                        <p className="text-xs text-gray-500 mt-1">{formatDate(new Date())}</p>
                    </div>

                    <div className="border-t border-b border-gray-300 py-4 mb-4">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Order ID:</span>
                            <span className="font-semibold">#{orderInfo?._id?.slice(-8) || "N/A"}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Customer:</span>
                            <span className="font-semibold">{orderInfo?.customerDetails?.name}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Phone:</span>
                            <span className="font-semibold">{orderInfo?.customerDetails?.phone}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Table:</span>
                            <span className="font-semibold">{orderInfo?.table?.tableNo || "N/A"}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Guests:</span>
                            <span className="font-semibold">{orderInfo?.customerDetails?.guests}</span>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="mb-4">
                        <h3 className="font-bold text-gray-800 mb-3">Order Items</h3>
                        {orderInfo?.items?.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm mb-2">
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">{item.name}</p>
                                    <p className="text-xs text-gray-500">
                                        ₦{item.pricePerQuantity} × {item.quantity}
                                    </p>
                                </div>
                                <span className="font-semibold text-gray-800">₦{item.price.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>

                    {/* Totals */}
                    <div className="border-t border-gray-300 pt-4">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Subtotal:</span>
                            <span className="font-semibold">₦{orderInfo?.bills?.total?.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Tax (5.25%):</span>
                            <span className="font-semibold">₦{orderInfo?.bills?.tax?.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t border-gray-300 pt-2 mt-2">
                            <span>Total:</span>
                            <span>₦{orderInfo?.bills?.totalWithTax?.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="text-center mt-6 pt-4 border-t border-gray-300">
                        <p className="text-xs text-gray-500">Payment Method: {orderInfo?.paymentMethod || "Cash"}</p>
                        <p className="text-xs text-gray-500 mt-2">Status: {orderInfo?.orderStatus}</p>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-xs text-gray-400">Powered by C'Hub POS System</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 p-4 border-t bg-gray-50">
                    <button
                        onClick={handlePrint}
                        className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                    >
                        Print Receipt
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReceiptModal;
