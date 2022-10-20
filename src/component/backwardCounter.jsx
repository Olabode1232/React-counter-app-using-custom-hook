import useCounter from "../card/hook/useCounter"
import Card from "../card/card"


const BackwardCounter = props => {
    const count = useCounter(false)
    
    return <Card>{count}</Card>
}

export default BackwardCounter