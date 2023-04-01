import {pools} from '../database.js';

export const getEmployess = async(req,res) => {
    const [rows] = await pools.query('SELECT * FROM alumnos')
    res.json(rows);
};

export const getEmployessID = async(req,res) => {
    const [rowsId] = await pools.query('SELECT * FROM alumnos where id = ?',[req.params.id]);
    if(rowsId.length <= 0) return res.status(404).json({
        message: "Empleado no encontrado"
    })
    res.json(rowsId[0])
}

export const postEmployess = async(req,res) => {
    const {nombre,apellido,correo,edad} = req.body;
    const [rows] = await pools.query('INSERT INTO alumnos(nombre,apellido,correo,edad) VALUES (?,?,?,?)',[nombre,apellido,correo,edad]);
    console.log(req.body)
    res.send({
        id: rows.insertId,
        nombre,
        apellido,
        correo,
        edad
    })
};

export const updateEmployess = async(req,res) => {
    const {id} = req.body;
    const {nombre,apellido,correo,edad} = req.body;

    const [result] = await pools.query(  "UPDATE alumnos SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido),correo = IFNULL(?, correo) ,edad = IFNULL(?, edad) WHERE id = ?",
    [id,nombre,correo,apellido,edad]);
    console.log(result);
    if(result.affectedRows === 0) return res.status(404).json({
        message:'Empleado no encontrado'
    })
    const [rowsUpdates] = await pools.query('SELECT * FROM alumnos WHERE id = ?', [id])
    res.json(rowsUpdates[0])
};

export const deleteEmployess = async(req,res) => {
    const result = await pools.query('DELETE FROM alumnos WHERE id = ? ',[req.params.id]);
    if(result.affectedRows <= 0) return res.status(404).json({
        message : "Empleado no existe"
    })

    res.sendStatus(204)
}

export const patchEmployess = (req,res) => res.send('Actualizando una parte de Empleados :V');