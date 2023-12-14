import { Button } from "react-bootstrap";
import React, { useMemo } from "react";
import TableContainer from "@common/TableContainer";

const SearchTable = ({ handleModalOpen }) => {
  const handleDetailsClick = (cellProps) => {
    handleModalOpen(cellProps);
  };

  const searchTable = [
    {
      id: "10",
      nome: "Tyrone",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Raynor, Rolfson and Daugherty",
      location: "Qatar",
    },
    {
      id: "09",
      nome: "Cathy",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Ebert, Schamberger and Johnston",
      location: "Mexico",
    },
    {
      id: "08",
      nome: "Patsy",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Streich Group",
      location: "Niue",
    },
    {
      id: "07",
      nome: "Kerry",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Feeney, Langworth and Tremblay",
      location: "Niger",
    },
    {
      id: "06",
      nome: "Traci",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Koelpin - Goldner",
      location: "Vanuatu",
    },
    {
      id: "05",
      nome: "Noel",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Howell - Rippin",
      location: "Germany",
    },
    {
      id: "04",
      nome: "Robert",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Hoeger",
      location: "San Marino",
    },
    {
      id: "03",
      nome: "Shannon",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Zemlak Group",
      location: "South Georgia",
    },
    {
      id: "02",
      nome: "Harold",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Metz Inc",
      location: "Iran",
    },
    {
      id: "01",
      nome: "Jonathan",
      cnpj: "12.123.123/00001-12",
      telefone: "(11) 91234-1234",
      numero: "Hauck Inc",
      location: "Holy See",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: (cellProps) => {
          return <span className="fw-semibold">{cellProps.id}</span>;
        },
        disableFilters: true,
        filterable: false,
      },

      {
        Header: "Nome",
        accessor: "nome",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "CNPJ",
        accessor: "cnpj",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Telefone",
        accessor: "telefone",
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
              <div className="d-flex gap-2">
                <Button
                  onClick={() => handleDetailsClick(cellProps)}
                  variant="outline-success"
                  size="sm"
                >
                  <i className="ri-menu-2-line"></i>
                </Button>
                <Button
                  onClick={() => console.log("clicou em deletar!")}
                  variant="outline-danger"
                  size="sm"
                >
                  <i className="ri-delete-bin-5-line"></i>
                </Button>
              </div>
            </React.Fragment>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={searchTable || []}
        isPagination={true}
        isGlobalFilter={true}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={5}
        className="custom-header-css table align-middle table-nowrap"
        tableClassName="table-centered align-middle table-nowrap mb-0"
        theadClassName="text-muted table-light"
        SearchPlaceholder="Search Products..."
      />
    </React.Fragment>
  );
};

export default SearchTable;
