import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "@common/TableContainer"
import { Spinner } from 'react-bootstrap';
import Link from 'next/link';
const SearchTable = () => {
    const searchTable =
      [
        { id: "10", name: "Tyrone", email: "tyrone@example.com", designation: "Senior Response Liaison", company: "Raynor, Rolfson and Daugherty", location: "Qatar" },
        { id: "09", name: "Cathy", email: "cathy@example.com", designation: "Customer Data Director", company: "Ebert, Schamberger and Johnston", location: "Mexico" },
        { id: "08", name: "Patsy", email: "patsy@example.com", designation: "Dynamic Assurance Director", company: "Streich Group", location: "Niue" },
        { id: "07", name: "Kerry", email: "kerry@example.com", designation: "Lead Applications Associate", company: "Feeney, Langworth and Tremblay", location: "Niger" },
        { id: "06", name: "Traci", email: "traci@example.com", designation: "Corporate Identity Director", company: "Koelpin - Goldner", location: "Vanuatu" },
        { id: "05", name: "Noel", email: "noel@example.com", designation: "Customer Data Director", company: "Howell - Rippin", location: "Germany" },
        { id: "04", name: "Robert", email: "robert@example.com", designation: "Product Accounts Technician", company: "Hoeger", location: "San Marino" },
        { id: "03", name: "Shannon", email: "shannon@example.com", designation: "Legacy Functionality Associate", company: "Zemlak Group", location: "South Georgia" },
        { id: "02", name: "Harold", email: "harold@example.com", designation: "Forward Creative Coordinator", company: "Metz Inc", location: "Iran" },
        { id: "01", name: "Jonathan", email: "jonathan@example.com", designation: "Senior Implementation Architect", company: "Hauck Inc", location: "Holy See" }
      ]
  
    const columns = useMemo(
      () => [
        {
          Header: "ID",
          accessor: (cellProps) => {
            return (
              <span className="fw-semibold">{cellProps.id}</span>
            )
          },
          disableFilters: true,
          filterable: false,
        },
  
        {
          Header: "Nome",
          accessor: "name",
          disableFilters: true,
          filterable: false,
        },
        {
          Header: "Email",
          accessor: "email",
          disableFilters: true,
          filterable: false,
        },
        {
          Header: "Endereço",
          accessor: "designation",
          disableFilters: true,
          filterable: false,
        },
        {
          Header: "Company",
          accessor: "company",
          disableFilters: true,
          filterable: false,
        },
        {
          Header: "Location",
          accessor: "location",
          disableFilters: true,
          filterable: false,
        },
        {
          Header: "Ação",
          disableFilters: true,
          filterable: true,
          accessor: (cellProps) => {
            return (
              <React.Fragment>
                <button type='button' className='btn btn-primary btn-sm'>Detalhes</button>
              </React.Fragment>
            )
          },
        },
      ],
      []
    );
  
    return (
      <React.Fragment >
        <TableContainer
          columns={(columns || [])}
          data={(searchTable || [])}
          isPagination={true}
          isGlobalFilter={true}
          iscustomPageSize={false}
          isBordered={false}
          customPageSize={5}
          className="custom-header-css table align-middle table-nowrap"
          tableClassName="table-centered align-middle table-nowrap mb-0"
          theadClassName="text-muted table-light"
          SearchPlaceholder='Search Products...'
        />
      </React.Fragment >
    );
  };

  export default SearchTable;