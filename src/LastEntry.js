import {useSelector} from 'react-redux'

const LastEntryHeader = () => {
    return (
        <thead>
            <tr>
                <th>LastEntryName</th>
                <th>LastEntryJob</th>
            </tr>
        </thead>
    )
}

const LastEntryBody = (props) => {
    const name = useSelector((state) => state.lastEntry.name)
    const job = useSelector((state) => state.lastEntry.job)

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{job}</td>
            </tr>
        </tbody>
    )
}

const LastEntry = (props) => {
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