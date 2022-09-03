import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import load_kd_data from '../firebase/firebase';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

function Scoreboard() {

    const [kddata, setKDData] = useState({});
    const [count, setCount] = useState(0);
    const [dataRows, setDataRows] = useState([])

    useEffect(() => {
        // create a interval and get the id
        const myInterval = setInterval(() => {
          load_kd_data(setKDData);  
          console.log(kddata);
          fillTables();
          // for (const property in kddata) {
          //   console.log(`${property}: ${kddata[property]["KILLS"]}`);
          // }
        }, 1000);
        // clear out the interval using the id when unmounting the component
        return () => clearInterval(myInterval);
      }, [kddata]);

    
    function getDeaths(player) {
      try {
        return kddata[player]['DEATHS'];
      }
      catch(err) {
        console.log(err)
        return 0
      }
    }

    function getKills(player) {
      try {
        return kddata[player]['KILLS'];
      }
      catch(err) {
        console.log(err)
        return 0
      }
    }

    function getKDRatio(player) {
      try {
        return kddata[player]['DEATHS'];
      }
      catch(err) {
        console.log(err)
        return 0
      }
    }

    function fillTables(){

      let counter = 0;
      let parsedrows = [];
      setDataRows([])
      for (const property in kddata) {
        console.log(`${property}: ${kddata[property]["KILLS"]}`);
        const row = (
          <tr>
            <td>{counter}</td>
            <td>{property}</td>
            <td>{kddata[property]["KILLS"]}</td>
            <td>{kddata[property]["DEATHS"]}</td>
            <td>{kddata[property]["KD_RATIO"]}</td>
          </tr>
        );
        counter = counter + 1;
        parsedrows.push(row);
      }
      setDataRows(parsedrows)
    }
 

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>K/D</th>
          </tr>
        </thead>
        <tbody>
          {dataRows}
        </tbody>
      </Table>
    );
  }
  
  export default Scoreboard;