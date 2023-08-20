import { useDispatch, useSelector } from "react-redux";
import { getTrips } from "../reducers/tripReducer";
import { useEffect } from "react";
import { AppDispatch } from "../store";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTrips());
  }, [dispatch]);

  const selected = useSelector((state: any) => state.trips.trips);

  const tableHead = {
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    duration: "Duration",
    destination: "Destination",
    interest: "Interest",
    travelers: "Travelers",
    budgetPerPerson: "Budget Per Person",
    when: "When",
    stage: "Current Stage",
  };

  //@ts-ignore
  const h: string[] = Object.keys(tableHead).map((item) => tableHead[item]);

  const getTableRows = (result: any) => {
    const tableCell = Object.keys(tableHead);

    const columnData = tableCell.map((key, i) => {
      return <td key={i}>{result[key]}</td>;
    });

    return <tr key={result._id}>{columnData}</tr>;
  };

  const refetch = (): void => {
    dispatch(getTrips());
  };

  return (
    <>
      <div className='container container-fluid'>
        <div className='display-4 my-3'>Travelers</div>
        <div className='d-flex justify-content-end mb-3'>
          <button className='btn btn-primary' onClick={refetch}>
            Refetch
          </button>
        </div>
        <table className='table'>
          <thead>
            <tr>
              {h.map((k) => (
                <th scope='col' key={k}>
                  {k}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{selected.map((item: any) => getTableRows(item))}</tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
