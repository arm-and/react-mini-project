import React from "react";

export default function TableUI({value}) {
    return (
        <>
            <tr>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.body}</td>
            </tr>
        </>
    )
}
