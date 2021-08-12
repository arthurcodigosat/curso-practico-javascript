const salariosCol = colombia.map (
    function(persona){
        return persona.salary
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(){}