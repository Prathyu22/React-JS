import ChildThree from "./ChildThree";

const ChildTwo = ({data}) => {
    console.log(`Log from ChildTwo`)
    console.log(data)
    return (
        <div>
            <h3> I'm Child 2</h3>
            <ChildThree data={data} />
        </div>
    );
}

export default ChildTwo;