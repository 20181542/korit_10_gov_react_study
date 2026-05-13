import * as s from "./styles";

function Textinput({title, name}) {

   return (
        <div>
            <label css={s.label} >
                <div>{title} </div>
                <input type="text" name={name} />
            </label>
        </div>
    )
}

export default Textinput;