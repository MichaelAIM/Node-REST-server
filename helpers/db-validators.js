const { Categoria, Usuario, Role, Producto } = require('../models');

/**
 * Usuarios
 */
const esRolValido = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no se encuentra registrado en la BD`);
    }
}

const EmailExiste = async ( correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya esta registrado`);
    }
}

const ExisteUsuario_ID = async ( id ) => {
    const existeUsuario = await Usuario.findById(id);
    if ( !existeUsuario ) {
        throw new Error(`El id: ${ id }, No esta registrado en la DB`);
    }
}

/**
 * Categorias
 */
const existeCategoriaPorId = async ( id ) => {
    const existeCategoria = await Categoria.findById(id);
    if ( !existeCategoria ) {
        throw new Error(`El id: ${ id }, No esta registrado en la DB`);
    }
}

/**
 * Productos
 */
const existeProductoPorId = async ( id ) => {
    const existeProducto = await Producto.findById(id);
    if ( !existeProducto ) {
        throw new Error(`El id: ${ id }, No esta registrado en la DB`);
    }
}

/**
 * validar Colecciones permitidas
 */
 const coleccionesPermitidas = async ( coleccion = '', colecciones = [] ) => {
    const incluida  =  colecciones.includes(coleccion);
    if ( !incluida ) {
        throw new Error(`El coleccion: ${ coleccion } No esta permitida - ${ colecciones }`);
    }
    return true;
}

module.exports = {
    esRolValido,
    EmailExiste,
    ExisteUsuario_ID,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas
}