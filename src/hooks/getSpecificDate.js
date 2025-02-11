const getSpecificDate = ( date ) => {

    let formatDate

    const semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    if(typeof date === "string") {
        console.log(date)
        formatDate = new Date(date)
    }

    const diaMes = formatDate.getDate()
    const diaSemana = semana[formatDate.getDay()]
    const mes = meses[formatDate.getMonth()]
    const anio = formatDate.getFullYear()

    const fullDate = diaSemana + " " + diaMes + " de " + mes + " del " + anio
    const shortDate = diaMes + " " + mes.slice(0, 3)

    return {
        fullDate,
        shortDate
    }
}

export default getSpecificDate