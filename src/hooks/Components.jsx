
// Move to Components Repo
const tableTemplate = {
    className: "table",
    dataObj: [
        {company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany"},
        {company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico"}
    ]
};


// Move to Components Repo
export const Table = (tableInfo = tableTemplate) => {

    return (
        <table className={tableInfo.className}>
            <tr>
                {tableInfo.dataObj.keys().map((header)=> {
                    return <th> {header} </th>
                })}
            </tr>
            {tableInfo.dataObj.map((objItem) => {
                return (
                    <tr>
                        {objItem.map((info) => {
                            return <td> {info} </td>
                        })}
                    </tr>
                )
            })}
        </table>
    )
};

// Move to Components Repo
const listTemplate = ["item", "item", "item", "item"];
export const List = (listArray = listTemplate, customStyle, ordered) => {
    // How do you want to handle the styles?
    // CSS or styleObj
    const style = {};

    let list = listArray.map((item) =>  <li> {item} </li>)
    return (ordered 
        ? <ol style={customStyle? customStyle: style}>{list}</ol> 
        : <ul style={customStyle? customStyle: style}>{list}</ul>
    )
};