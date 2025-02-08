function Form(props) {
    return (  
        <>
        <label>{props.labelle}  </label>
        <input type="text" name={props.namee} />
      
        </>
    );
}

export default Form;