import CRUDTable, {
    Fields,
    Field,
    CreateForm,
    UpdateForm,
    DeleteForm
} from "react-crud-table";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
    const styles = {
        container: { margin: "auto", width: "fit-content" }
    };

    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState(null);
    const actualUrl = window.location.pathname;

    const fetchEstudiantes = async () =>{
        const estudiantes = await service.fetchItems();
        setData(estudiantes);
    }

   const handleTableChange = ({ queryRules }) => {
    const busqueda = queryRules[0].value;
    const newUrl = `http://localhost:5173/estudiantes/${busqueda}`;
    window.location.href = newUrl;
};

    const service = {
        fetchItems: async (payload) => {
            const response = await axios.get(`http://localhost:3000${actualUrl}`);
            setData(response.data); // Actualiza data con los datos originales
            return response.data;
        },
    create: async task => {
        const response = await axios.post(`http://localhost:3000${actualUrl}`, task);
        await fetchEstudiantes(); // Actualiza los datos después de crear
        console.log(task)
        return response.data;
    },
    update: async task => {
        const response = await axios.put(`http://localhost:3000${actualUrl}/${task.id}`, task);
        await fetchEstudiantes(); // Actualiza los datos después de actualizar
        return response.data;
    },
    delete: async task => {
        const response = await axios.delete(`http://localhost:3000${actualUrl}/${task.id}`);
        await fetchEstudiantes(); // Actualiza los datos después de eliminar
        return response.data;
    }
    };


  return (
      <div style={styles.container}>
          <CRUDTable
              showQueryBuilder={true}
              onChange={handleTableChange}
              caption="Estudiantes"
              fetchItems={payload => service.fetchItems(payload)}
          >
              <Fields>
                  <Field sortable={false} name="id" label="Id" hideInCreateForm hideInUpdateForm/>
                  <Field sortable={false} name="nombre_completo" label="Nombre Completo" placeholder="Nombre Completo"/>
                  <Field sortable={false} type={"date"} name="fecha_nacimiento" label="Fecha de Nacimiento" placeholder="Fecha de Nacimiento"/>
                  <Field sortable={false} name="carrera" label="Carrera" placeholder="Carrera"/>
              </Fields>
              <CreateForm
                  title="Creación de Estudiante"
                  trigger="Crear Estudiante"
                  onSubmit={task => service.create(task)}
                  submitText="Crear"
                  validate={values => {
                      const errors = {};
                      if (!values.nombre_completo) {
                          errors.nombre_completo = "Por favor, proporciona el nombre completo del estudiante";
                      }

                      if (!values.fecha_nacimiento) {
                          errors.fecha_nacimiento = "Por favor, proporciona la fecha de nacimiento del estudiante";
                      }

                      if (!values.carrera) {
                          errors.carrera = "Por favor, proporciona la carrera del estudiante";
                      }

                      return errors;
                  }}
              />

              <UpdateForm
                  title="Actualizar"
                  trigger="Actualizar"
                  onSubmit={task => service.update(task)}
                  submitText="Actualizar"
                  validate={values => {
                      const errors = {};

                      if (!values.id) {
                          errors.id = "Por favor, proporciona el id";
                      }

                      if (!values.nombre_completo) {
                          errors.nombre_completo = "Por favor, proporciona el nombre completo del estudiante";
                      }

                      if (!values.fecha_nacimiento) {
                          errors.fecha_nacimiento = "Por favor, proporciona la fecha de nacimiento del estudiante";
                      }

                      if (!values.carrera) {
                          errors.carrera = "Por favor, proporciona la carrera del estudiante";
                      }

                      return errors;
                  }}
              />

              <DeleteForm
                  title="Proceso de Eliminación de Estudiante"
                  message="¿Estás seguro de que quieres eliminar al estudiante?"
                  trigger="Eliminar"
                  onSubmit={task => service.delete(task)}
                  submitText="Eliminar"
                  validate={values => {
                      const errors = {};
                      if (!values.id) {
                          errors.id = "Por favor, proporciona el id";
                      }
                      return errors;
                  }}
              />
          </CRUDTable>
      </div>
  )
}

export default App