const cursos = [
  { nombre: "Matemáticas Básicas", semestre: 1 },
  { nombre: "Geometría Vectorial y Analítica", semestre: 1 },
  { nombre: "Introducción a la Informática", semestre: 1 },
  { nombre: "Introducción a la Formación Profesional", semestre: 1 },
  { nombre: "Habilidades Comunicativas", semestre: 1 },

  { nombre: "Cálculo Diferencial", semestre: 2, req: ["Matemáticas Básicas"] },
  { nombre: "Álgebra Lineal", semestre: 2, req: ["Matemáticas Básicas"] },
  { nombre: "Química Básica y Laboratorio", semestre: 2 },
  { nombre: "Biología Celular", semestre: 2 },
  { nombre: "Inglés I", semestre: 2 },

  { nombre: "Cálculo Integral", semestre: 3, req: ["Cálculo Diferencial"] },
  { nombre: "Física Mecánica y Laboratorio", semestre: 3 },
  { nombre: "Introducción a las Biomoléculas", semestre: 3 },
  { nombre: "Algoritmia y Programación", semestre: 3, req: ["Introducción a la Informática"] },
  { nombre: "Inglés II", semestre: 3, req: ["Inglés I"] },

  { nombre: "Ecuaciones Diferenciales", semestre: 4, req: ["Cálculo Integral"] },
  { nombre: "Física de Campos y Laboratorio", semestre: 4, req: ["Física Mecánica y Laboratorio"] },
  { nombre: "Bioquímica Médica", semestre: 4, req: ["Introducción a las Biomoléculas"] },
  { nombre: "Morfofisiología I", semestre: 4, req: ["Biología Celular"] },
  { nombre: "Inglés III", semestre: 4, req: ["Inglés II"] },

  { nombre: "Métodos Numéricos", semestre: 5, req: ["Ecuaciones Diferenciales"] },
  { nombre: "Circuitos Eléctricos", semestre: 5 },
  { nombre: "Biología Molecular", semestre: 5 },
  { nombre: "Morfofisiología II", semestre: 5, req: ["Morfofisiología I"] },
  { nombre: "Inglés IV", semestre: 5, req: ["Inglés III"] },

  { nombre: "Biofísica", semestre: 6 },
  { nombre: "Biomateriales", semestre: 6 },
  { nombre: "Electrónica Análoga y de Potencia", semestre: 6 },
  { nombre: "Diseño Biomédico", semestre: 6 },

  { nombre: "Biomecánica", semestre: 7 },
  { nombre: "Optativa I", semestre: 7 },
  { nombre: "Electrónica Digital y Sistemas Embebidos", semestre: 7 },
  { nombre: "Bioinstrumentación", semestre: 7 },
  { nombre: "Estadística General", semestre: 7 },

  { nombre: "Procesamiento de Señales Biomédicas", semestre: 8 },
  { nombre: "Optativa II", semestre: 8 },
  { nombre: "Ciencia, Tecnología y Sociedad", semestre: 8 },
  { nombre: "Legislación en Salud", semestre: 8 },
  { nombre: "Metrología Biomédica", semestre: 8 },
  { nombre: "Ingeniería de Rehabilitación", semestre: 8 },

  { nombre: "Imágenes Médicas", semestre: 9 },
  { nombre: "Optativa III", semestre: 9 },
  { nombre: "Equipos Biomédicos I", semestre: 9 },
  { nombre: "Ingeniería Clínica", semestre: 9 },
  { nombre: "Seminario de Investigación", semestre: 9 },
  { nombre: "Electiva I", semestre: 9 },

  { nombre: "Electiva II", semestre: 10 },
  { nombre: "Trabajo de Grado – Programa Profesional", semestre: 10 },
  { nombre: "Proyectos i+D+I", semestre: 10 },
  { nombre: "Fundamentación Ambiental", semestre: 10 },
  { nombre: "Equipos Biomédicos II", semestre: 10, req: ["Equipos Biomédicos I"] },
  { nombre: "Gestión de Tecnología en Salud", semestre: 10 }
];

const malla = document.getElementById("malla");

const estadoCursos = {};

function render() {
  malla.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const cursosSemestre = cursos.filter(c => c.semestre === i);
    cursosSemestre.forEach(curso => {
      const btn = document.createElement("div");
      btn.textContent = curso.nombre;
      btn.classList.add("course");

      const aprobado = estadoCursos[curso.nombre] === true;
      const requisitos = curso.req || [];
      const desbloqueado = requisitos.every(r => estadoCursos[r] === true);

      if (!desbloqueado && requisitos.length > 0 && !aprobado) {
        btn.classList.add("locked");
      } else if (aprobado) {
        btn.classList.add("approved");
      }

      btn.onclick = () => {
        if (btn.classList.contains("locked")) return;
        estadoCursos[curso.nombre] = !estadoCursos[curso.nombre];
        render();
      };

      malla.appendChild(btn);
    });
  }
}

render();
