function getUsuarioActivo(nombre){
    return {
        uid:'1234567',
        userName: nombre,
    }
};

const usuarioActivo = getUsuarioActivo('Ming');
console.log(usuarioActivo);


let getActiveUser = (nombre)=>({
    uid:'1234567',
    username:nombre
});

const activeUser = getActiveUser('Bate');
console.log(activeUser);