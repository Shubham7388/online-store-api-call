
import React from "react";
import './table.css'

function Datatable({ data = [] }) {

  const apiRender=(apiData)=>{
    let imgPattern = /\.(gif|jpe?g|tiff?|png|webp|bmp|svg|webp)$/i;

    if (
      typeof apiData == "number" ||
      (typeof apiData == "string" && !imgPattern.test(apiData))
    ) {
      return <td>{apiData}</td>;
    } else if (typeof apiData == "string" && imgPattern.test(apiData)) {
      return (
        <td>
          <img src={apiData} style={{ height: "150px", width: "150px" }} />
        </td>
      );
    }
    else if (typeof apiData == "object" && !Array.isArray(apiData)) {
      return (
          <table border={"1px"} cellSpacing={"0px"}>
          <tr>
            {Object.keys(apiData).length &&
              Object.keys(apiData).map((item, index) => {
                return apiRender(item);
              })}
          
          </tr>
          <tr>
          {Object.values(apiData).length &&
          Object.values(apiData).map((item1, index) => {
            return apiRender(item1)
          })}
          </tr>
        </table>
      );
    } 
    else if (typeof apiData == "object" && Array.isArray(apiData)) {
      return <td>
        {
          apiData.map((item, index) => {
          return apiRender(item);
          })
        }
      </td>
    } 
  }

  return (
    <table>
      {
        data.length && data.map((item,index)=>{
          return <tr>{apiRender(item)}</tr>
        })
      }
    </table>
  );
}
export default Datatable;
      

