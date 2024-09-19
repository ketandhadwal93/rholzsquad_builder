import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { latestOrder } from 'Common/data';
import { Link } from 'react-router-dom';
import { Badge } from "react-bootstrap";

const LatestOrdersTable = () => {

  const columns = useMemo(() => [
    {
      header: "Order Date",
      accessorKey: "date",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Order ID",
      accessorKey: "id",
      cell: (cell: any) => {
        return (
          <Link to={"/apps-ecommerce-order-overview"} className="fw-medium link-primary">{cell.getValue()}</Link>
        );
      },
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Shop",
      accessorKey: "image",
      cell: (cell: any) => {
        return (
          <img src={cell.getValue()} alt="" className="avatar-xxs rounded-circle" />
        );
      },
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Customers",
      accessorKey: "customerName",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Products",
      accessorKey: "products",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Amount",
      accessorKey: "price",
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
          case "Pending":
            return (<Badge bg="warning-subtle" text="warning"> {cell.getValue()}</Badge>);
          case "New":
            return (<Badge bg="secondary-subtle" text="secondary"> {cell.getValue()}</Badge>);
          case "Delivered":
            return (<Badge bg="success-subtle" text="success"> {cell.getValue()}</Badge>);
          case "Shipping":
            return (<Badge bg="primary-subtle" text="primary"> {cell.getValue()}</Badge>);
          case "Out of Delivered":
            return (<Badge bg="danger-subtle" text="danger"> {cell.getValue()}</Badge>);
        }
      },
    },
    {
      header: "Rating",
      accessorKey: "rating",
      cell: (cell: any) => {
        return (<h5 className='fs-md fw-medium mb-0'>
          <i className='ph-star align-baseline text-warning'></i> {cell.getValue()}
        </h5>);
      },
      enableColumnFilter: false,
      enableSorting: true,
    },
  ], []
  );

  return (
    <React.Fragment>
      <TableContainer
        isPagination={false}
        columns={(columns || [])}
        data={(latestOrder || [])}
        isBordered={false}
        customPageSize={6}
        tableClass="table table-borderless table-centered align-middle table-nowrap mb-0"
        theadClass="text-muted table-light"
      />
    </React.Fragment>
  );
};

export { LatestOrdersTable };