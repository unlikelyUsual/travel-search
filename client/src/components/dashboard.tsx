import { useDispatch, useSelector } from "react-redux";
import { getTrips } from "../reducers/tripReducer";
import { useEffect } from "react";
import { AppDispatch } from "../store";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTrips());
  }, []);

  const selected = useSelector((state) => state);

  console.log(selected);

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

    return <tr key={result.id}>{columnData}</tr>;
  };

  return (
    <>
      <div className='container container-fluid'>
        <div className='display-4 my-3'>Travelers</div>
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
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
