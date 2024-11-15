import './style.css';

const MyComponent = () => {

    const edan = [1, 2, 3]


    return (
        <>
            <div> {JSON.stringify(edan)} & edan update</div>
            <div>{console.log("EDAN NGUYEN")}</div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>
    );
}

export default MyComponent;