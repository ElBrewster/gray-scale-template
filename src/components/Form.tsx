export default function Form() {
    return (
        <form className="my-form-container">
            <div className="input-container">
                <label htmlFor="my-input" className="input-label"></label>
                <input type="text" name="my-input"/>
            </div>
            <div className="input-container">
                <label htmlFor="my-input" className="input-label"></label>
                <input type="text" name="my-input"/>
            </div>
            <div className="input-container">
                <label htmlFor="my-input" className="input-label"></label>
                <input type="text" name="my-input"/>
            </div>
            <div className="input-container"></div>
            <div className="input-container"></div>
            <div className="input-container"></div>
            <label htmlFor="my-input">YO
                <input name="my-input" type="text" />
            </label>
            <button>SUBMIT</button>
        </form>
    );
}