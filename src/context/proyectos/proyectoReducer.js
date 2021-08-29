import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTO,
  AGREGAR_PROYECTO,
  ELIMINAR_PROYECTO,
  PROYECTO_ACTUAL,
  VALIDAR_FORM
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true
      };
    case OBTENER_PROYECTO:
      return {
        ...state,
        proyectos: action.payload
      };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorform: false
      };
    case VALIDAR_FORM:
      return {
        ...state,
        errorform: true
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter(
          proyecto => proyecto.id === action.payload
        )
      };
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          proyecto => proyecto.id !== action.payload
        ),
        proyecto: null
      };

    default:
      return state;
  }
};
