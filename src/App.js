import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#eb2f06").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setError(false);
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };

    return (
        <>
            <section className="container">
                <h3>Peïo Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className={`${error ? "error" : null}`}
                        placeholder="#f15025"
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <button type="submit" className="btn">
                        Generate
                    </button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return <SingleColor key={index} hexColor={color.hex} {...color} index={index} />;
                })}
            </section>
        </>
    );
}

export default App;
