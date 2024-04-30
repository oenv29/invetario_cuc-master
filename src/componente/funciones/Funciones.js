export const api = "http://localhost:3000/api";

let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6InBydWViYTIwMjJAY3VjLmVkdS5jbyIsImV4cCI6MTY0OTQ1MzA1NCwiY29ycmVvIjoicHJ1ZWJhMjAyMkBjdWMuZWR1LmNvIn0.MAoFJE2SBgHvp9BS9fyBmb2gZzD0BHGPiyKoAo_uYAQ";

const apiUrl = "https://consultas.cuc.edu.co/api/v1.0/articulos";

export const obtenerArticulos = async () => {
    try {
        const request = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Authorization": `JWT ${token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!request.ok) {
            throw new Error(`Error al obtener artículo: ${request.statusText}`);
        }
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener artículo:", error);
        return { status: "error", message: error.message || "Error al obtener artículo" };
    }
}



export const guardar = async (dato) => {
    try {
        const request = await fetch(api + "/bloques/crear", {
            method: "POST",
            body: JSON.stringify(dato),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al guardar persona:", error);
        return { status: "error", message: "Error al guardar persona" };
    }
}


export const guardarOficina = async (dato) => {
    try {
        const request = await fetch(api + "/oficina/crear", {
            method: "POST",
            body: JSON.stringify(dato),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al guardar persona:", error);
        return { status: "error", message: "Error al guardar persona" };
    }
}

export const obtenerBloques = async () => {
    try {
        const request = await fetch(api+'/bloques/listar', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener bloques:", error);
        return { status: "error", message: "Error al obtener bloques" };
    }
}

export const obtenerOficinasPorBlo = async (id) => {
    try {
        const request = await fetch(api+'/oficinabloque/listar/'+id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener bloques:", error);
        return { status: "error", message: "Error al obtener bloques" };
    }
}

export const obtenerArtiuloValidar = async (id) => {
    try {
        const request = await fetch(api+'/articulo/validar/'+id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener bloques:", error);
        return { status: "error", message: "Error al obtener bloques" };
    }
}

export const guardarAsignacion = async (dato) => {
    try {
        const request = await fetch(api + "/asignacion/crear", {
            method: "POST",
            body: JSON.stringify(dato),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al guardar persona:", error);
        return { status: "error", message: "Error al guardar persona" };
    }
}


export const obtenerArticuloValidarAsignacion = async (idb,idf) => {
    try {
        const request = await fetch(api+'/articulo/validarasignacion/'+idb+'/'+idf, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener bloques:", error);
        return { status: "error", message: "Error al obtener bloques" };
    }
}


export const obtenerArticuloValidarAsignacionBloque = async (idb) => {
    try {
        const request = await fetch(api+'/articulo/validarasignacionblo/'+idb, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener bloques:", error);
        return { status: "error", message: "Error al obtener bloques" };
    }
}

export const obtenerArticuloValidarAsignacionOfici = async (idf) => {
    try {
        const request = await fetch(api+'/articulo/validarasignacionofi/'+idf, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener bloques:", error);
        return { status: "error", message: "Error al obtener bloques" };
    }
}



export const obtenerOficina = async () => {
    try {
        const request = await fetch(api+'/oficina/listar', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error("Error al obtener bloques:", error);
        return { status: "error", message: "Error al obtener bloques" };
    }
}
