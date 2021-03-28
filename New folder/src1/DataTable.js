import React from 'react'

function DataTable({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    console.log('hi 1');
                    console.log(data);
        return (
        <div>
        <table>
            <thead>
                <tr>{data[0] && columns.map((heading)=> <th>{heading}</th>)}</tr>

                </thead>
            <tbody>{ 
                console.log('hi 2'),
                    console.log(data[0]),

                Object.entries(data).map(row=>(<tr>
                    {
                        columns.map(column =><td>{row[column]}</td>)
                    }
                </tr>))


                }
            </tbody>
        </table>
            
        </div>
    )
}

export default DataTable
