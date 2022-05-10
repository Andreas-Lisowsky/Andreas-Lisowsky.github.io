import React, {Component} from 'react'

const LastEntryHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const LastEntryBody = (props) => {
    return (
    <tr>
        <td>Placeholder</td>
        <td>Placeholder</td>
    </tr>
    )
}

const LastEntry = (props) => {
    const {characterData, removeCharacter} = props;

    return (
        <div>
            <h4>Last Entry</h4>
            <table>
                <LastEntryHeader />
                <LastEntryBody />
            </table>
        </div>
    )
}

export default LastEntry