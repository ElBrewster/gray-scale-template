export default function Form() {
    return (
        <form className="my-form-container">
            <div className="input-container">
                <label htmlFor="my-input" className="input-label"></label>
                <input type="text" name="my-input" placeholder="my input"/>
            </div>
            <div className="input-container">
                <label htmlFor="my-input" className="input-label"></label>
                <input type="text" name="my-input" placeholder="my input"/>
            </div>
            <div className="input-container">
                <label htmlFor="my-input" className="input-label"></label>
                <input type="text" name="my-input" placeholder="my input"/>
            </div>
            <div className="select-container">
                <label htmlFor="my-select" className="select-label"></label>
                <select name="my-slect" id="mySelect">
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                    <option value="four">four</option>
                </select>
            </div>
            <div className="input-container"></div>
            <div className="input-container"></div>
            <label htmlFor="my-input">YO
                <input name="my-input" type="text" />
            </label>
            <button>SUBMIT</button>
        </form>
    );
}