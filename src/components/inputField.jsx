const InputField = ({text, setText,toggleTodo}) => {

  return (
    <label className="label" >
      <input  className="input" type="text" value={text}
      onChange={(e)=> setText(e.target.value) }
      />
      <button className="button" onClick={toggleTodo} >добавить</button>
    </label>
  )
}
export default InputField



































/*
                              // Вариант с Redux
const InputField = ({text,handleInput,handleSubmit}) => {
  return (
    <label className="label" >
      <input  className="input" type="text"  value={text}
        onChange={(e) => handleInput(e.target.value)}  />
      <button className="button" onClick={handleSubmit} >добавить</button>
    </label>
  )
}
export default InputField
*/


/*
                            // Вариант без Redux
const InputField = ({ text, handleSubmit, handleInput }) => {
   return (
    <label className="label">
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button className="button" onClick={handleSubmit}>
        добавить
      </button>
    </label>
  );
};

export default InputField;
*/