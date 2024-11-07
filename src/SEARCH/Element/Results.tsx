import { ProjectPreview } from "../../FIREBASE/Interface/Types"

interface Props {
    listOfProyect: ProjectPreview[] | undefined
    isLoading: boolean,
    isError: boolean
}

const Results: React.FC<Props> = ({ listOfProyect, isLoading, isError }) => {

    console.log(listOfProyect);
    console.log(isLoading);
    console.log(isError)

    return (<ul>

    </ul>)
}

export default Results;