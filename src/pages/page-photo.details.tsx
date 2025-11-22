import Text from '../components/text'
import { useParams } from 'react-router'


export default function PagePhotoDetails() {
    const { id } = useParams()

    return (
        <>
            <Text variant="heading-medium">Página da foto!</Text>
            <hr />
            <Text variant="heading-medium">id data foto {id}!</Text>

        </>
    )
}
