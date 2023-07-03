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
            <fieldset className="radio-container">
                <legend>Let's Have Some Radios!!!</legend>
                <input type="radio" value="yes"/>
                <label htmlFor="yes"></label>
                <br />
                <input type="radio" value="no"/>
                <label htmlFor="no"></label>
                <br />
                <input type="radio" value="occasionally"/>
                <label htmlFor="occasionally"></label>
            </fieldset>
            <div className="textarea-container">
                <textarea name="comments" placeholder="Add Your Comments!"/>
            </div>
            <label htmlFor="my-input">YO
                <input name="my-input" type="text" />
            </label>
            <button>SUBMIT</button>
        </form>
    );
}