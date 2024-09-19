import React, { useMemo } from 'react';
import TableContainer from "Common/TableContainer";
import { Badge } from "react-bootstrap";
import { coursesData } from 'Common/data';
import { Link } from 'react-router-dom';

const CourseTable = () => {

  const columns = useMemo(() => [
    {
      header: "Course Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <>
          <div className="d-flex align-items-center gap-2">
            <img src={cell.row.original.image} alt="react.png" className="avatar-xxs rounded" />
            <Link to={"/pages-profile"} className="text-reset contact_name">{cell.row.original.coursesName}</Link>
          </div>
        </>
      ),
    },
    {
      header: "Category",
      accessorKey: "category",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Instructor",
      accessorKey: "instructor",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Lessons",
      accessorKey: "lessons",
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
      header: "Fees",
      accessorKey: "fees",
      enableColumnFilter: false,
      enableSorting: true,
    },
    {
      header: "Status",
      enableColumnFilter: false,
      enableSorting: true,
      accessorKey: "status",
      cell: (cell: any) => {
        switch (cell.getValue()) {
          case "Open":
            return (<Badge bg="info-subtle" text="info" className="status"> {cell.getValue()}</Badge>);
          case "Close":
            return (<Badge bg="danger-subtle" text="danger" className="status"> {cell.getValue()}</Badge>);
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
        isPagination={true}
        columns={(columns || [])}
        data={(coursesData || [])}
        isBordered={false}
        customPageSize={5}
        PaginationClassName="align-items-center mt-4 pt-2 row"
        divClassName="table-responsive table-card mt-0"
        tableClass="table-borderless table-centered align-middle table-nowrap mb-0"
        theadClass="text-muted table-light"
      />
    </React.Fragment>
  );
};

export { CourseTable };