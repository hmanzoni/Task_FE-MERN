import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTO,
  AGREGAR_PROYECTO,
  ELIMINAR_PROYECTO,
  PROYECTO_ACTUAL,
  VALIDAR_FORM
} from '../../types';

const ProyectoState = props => {
  const initialState = {
    proyectos: [],
    formulario: false,
    errorform: false,
    proyecto: null
  };

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    });
  };

  const proyectos = [
    { id: 1, nombre: 'Tienda virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Desing' }
  ];

  const getProjects = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos
    });
  };

  const addProject = proyecto => {
    proyecto.id = uuid();
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    });
  };

  const showError = () => {
    dispatch({
      type: VALIDAR_FORM
    });
  };

  const currentProject = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    });
  };

  const deleteProject = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorform: state.errorform,
        proyecto: state.proyecto,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
        deleteProject
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
