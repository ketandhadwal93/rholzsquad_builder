import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SubscriptionTable = ({ subscriptionsList }: any) => {

    const columns = useMemo(
        () => [
            {
                header: "Plan",
                accessorKey: "coursename",
                cell: (cell: any) => {
                    return (<div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                            <div className="avatar-sm">
                                <div className={"avatar-title bg-" + cell.row.original.bgcolor + "-subtle rounded"}>
                                    <img src={cell.row.original.logoImg} alt="" className="avatar-xxs" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <h6 className="fs-md mb-2 plan">{cell.row.original.coursename}</h6>
                            <p className="text-muted mb-0">{cell.row.original.category}</p>
                        </div>
                    </div>);
                },
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Price",
                accessorKey: "price",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Duration",
                accessorKey: "duration",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Status",
                accessorKey: "status",
                enableColumnFilter: false,
                enableSorting: true,
                cell: (cell: any) => {
                    switch (cell.getValue()) {
                        case "Active":
                            return (<Badge bg="success-subtle" text="success" className="status"> {cell.getValue()}</Badge>);
                        default:
                            return (<Badge bg="danger-subtle" text="danger" className="status"> {cell.getValue()}</Badge>);
                    }
                },
            },
            {
                header: "Payment Due",
                accessorKey: "paymentDue",
                cell: (cell: any) => {
                    return <span className='text-muted mb-0 payment_due'>{cell.getValue()}</span>;
                },
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Action",
                enableColumnFilter: false,
                enableSorting: false,
                accessorKey: "action",
                cell: (cell: any) => {
                    switch (cell.getValue()) {
                        case "Renew Now":
                            return (<Link to="#" className="text-decoration-underline">{cell.getValue()}</Link>);
                        case "Pay Now":
                            return (<Link to="#" className="text-decoration-underline mb-0">{cell.getValue()}</Link>);
                        default:
                            return (<Link to="#" className="text-decoration-underline">{cell.getValue()}</Link>);
                    }
                },
            },
        ],
        []
    );

    return (
        <React.Fragment>
            {
                subscriptionsList && subscriptionsList.length > 0 ?
                    <TableContainer
                        isPagination={false}
                        columns={(columns || [])}
                        data={(subscriptionsList || [])}
                        customPageSize={5}
                        tableClass="table table-custom align-middle table-borderless table-nowrap"
                    />
                    :
                    <div className="noresult">
                        <div className="text-center py-4">
                            <div className="avatar-md mx-auto mb-4">
                                <div className="avatar-title bg-light text-primary rounded-circle fs-4xl">
                                    <i className="bi bi-search"></i>
                                </div>
                            </div>
                            <h5 className="mt-2">Sorry! No Result Found</h5>
                            <p className="text-muted mb-0">We've searched more than 150+ products We did not find any products for you search.</p>
                        </div>
                    </div>
            }

        </React.Fragment>
    );
};

export default SubscriptionTable;