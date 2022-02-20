import ChildTwo from "./ChildTwo";

const ChildOne = ({data}) => {
    console.log(`Log from ChildOne`)
    console.log(data)
    return (
        <div>
            <h2> I'm Child 1</h2>
            <ChildTwo data={data} />
        </div>
    );
}

export default ChildOne;