import React, { useEffect, useState } from "react";
import axios from "axios";
import { Api_Url } from "../environment";

const Dashboard = () => {
  const [table, setTable] = useState([{}]);

  useEffect(() => {
    axios.get(Api_Url + "Scrapping/GetScrap").then((response) => {
      setTable(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-9">
          <div className="header-first-page my-4">
            If you are looking for a group for some classes or you are a group
            who is looking for student this page is for you.
          </div>
          <div className="header-first-page my-2">
            These are the statistics of people leaving for Erasmus in some
            countries, it shows us how helpful this page will be for us:
          </div>
          {table != null ? (
            <table className="table table-striped table-bordered table-hover">
              <tbody>
                {table.map((elem) => {
                  return (
                    <tr>
                      <th>{elem.country}</th>
                      <th>{elem.numberOfUniwersity}</th>
                      <th>{elem.totalNumberOfStudentsInCountry}</th>
                      <th>{elem.totalIncommingStudents}</th>
                      <th>{elem.totalOutgoingStudents}</th>
                      <th>{elem.totalStaff}</th>
                      <th>{elem.totalStaffIncomming}</th>
                      <th>{elem.totalStaffOutgoing}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
