const validation = (values) =>{
    let errors={};
    if(!values.email){
        errors.email= "E-mail is requeired"
    }
    if(!values.password){
        errors.password= "password is requeired"

    }
    if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "E-mail is not valied !"
    }

    if (values.Confirm != values.password){
        errors.Confirm = "Password dosnot match"
    }
    if (values.password.length <5){
        errors.fname = "Password smust be more than 5 char "
    }
    if (values.password != values.Confirm){
        errors.Confirm = "Passwors didnot match"
    }
    return errors ;
}
export default validation; 