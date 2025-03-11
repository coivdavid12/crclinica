document.getElementById("especialidades").addEventListener("change", function() {
    var especialidade = this.value;
    var medicoSelect = document.getElementById("medico");

    
   medicoSelect.innerHTML = '<option value="">Selecione um médico</option>';

    
    var medicos = {
        "clinico-geral": [
            "Dr. João Silva",
            "Dra. Maria Oliveira",
            "Dr. Doulgas Lima",
            "Dr Thiago Boaventura",
            "Dra. Adriana Santana",
        ],
        "pediatra": [
            "Dr. Lucas Almeida",
            "Dra. Carla Souza",
            "Dr. Cesar Lamounier",
            "Dra. Anne Luize",
            "Dra. Cassia Lemos",
            "Dra. Alessandra Licar",
            "Dr. Pietro Chenovante",
            "Dr. Bruno Vital",
        ],
        "anestesiologista": [
            "Dr. Eduardo Pereira",
            "Dra. Silvia Costa",
            "Dra. Sandra Anamuth",
            "Dra. Charlie Souza",
            "Dr. Alex Romier",
        ],
        "endocrinologista": [
            "Dr. Pedro Santos",
            "Dra. Juliana Lima"
        ],
        "dermatologista": [
            "Dr. Fabiano Martins",
            "Dra. Camila Rocha"
        ],
        "cirurgiao-geral": [
            "Dr. Marcos Silva",
            "Dra. Luciana Gomes"
        ],
        "ortopedista": [
            "Dr. Felipe Oliveira",
            "Dra. Renata Pereira"
        ],
        "neurologista": [
            "Dr. Rodrigo Costa",
            "Dra. Luciana Ribeiro"
        ],
        "ultrassonografista": [
            "Dr. Aline Andrade",
            "Dra. Beatriz Costa"
        ],
        "cardiologista": [
            "Dr. Gabriel Almeida",
            "Dra. Vanessa Marques"
        ]
    };

    
    if (medicos[especialidade]) {
        medicos[especialidade].forEach(function(medico) {
            var option = document.createElement("option");
            option.value = medico.toLowerCase().replace(/\s/g, '-');
            option.textContent = medico;
            medicoSelect.appendChild(option);
        });
    }
});
<script>
document.getElementById("especialidades").addEventListener("change", function() {
    var especialidade = this.value;
    var medicoSelect = document.getElementById("medico");

    medicoSelect.innerHTML = '<option value="">Selecione um médico</option>';

    var medicos = {
        "clinico-geral": [
            "Dr. João Silva",
            "Dra. Maria Oliveira",
            "Dr. Doulgas Lima",
            "Dr Thiago Boaventura",
            "Dra. Adriana Santana",
        ],
        "pediatra": [
            "Dr. Lucas Almeida",
            "Dra. Carla Souza",
            "Dr. Cesar Lamounier",
            "Dra. Anne Luize",
            "Dra. Cassia Lemos",
            "Dra. Alessandra Licar",
            "Dr. Pietro Chenovante",
            "Dr. Bruno Vital",
        ],
        "anestesiologista": [
            "Dr. Eduardo Pereira",
            "Dra. Silvia Costa",
            "Dra. Sandra Anamuth",
            "Dra. Charlie Souza",
            "Dr. Alex Romier",
        ],
        "endocrinologista": [
            "Dr. Pedro Santos",
            "Dra. Juliana Lima"
        ],
        "dermatologista": [
            "Dr. Fabiano Martins",
            "Dra. Camila Rocha"
        ],
        "cirurgiao-geral": [
            "Dr. Marcos Silva",
            "Dra. Luciana Gomes"
        ],
        "ortopedista": [
            "Dr. Felipe Oliveira",
            "Dra. Renata Pereira"
        ],
        "neurologista": [
            "Dr. Rodrigo Costa",
            "Dra. Luciana Ribeiro"
        ],
        "ultrassonografista": [
            "Dr. Aline Andrade",
            "Dra. Beatriz Costa"
        ],
        "cardiologista": [
            "Dr. Gabriel Almeida",
            "Dra. Vanessa Marques"
        ],
        "urologista": [
            "Dr. Pedro Manzuart",
            "Dra. Raquele Diaz"
        ]
    };

    if (medicos[especialidade]) {
        medicos[especialidade].forEach(function(medico) {
            var option = document.createElement("option");
            option.value = medico.toLowerCase().replace(/\s/g, '-');
            option.textContent = medico;
            medicoSelect.appendChild(option);
        });
    }
});

document.getElementById("form-agendamento").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const especialidade = document.getElementById("especialidades").value;
    const medico = document.getElementById("medico").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!especialidade || !medico || !data || !hora) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert(`Consulta agendada com sucesso!No dia da sua consulta, não esqueça do seu documento pessoal.\nEspecialidade: ${especialidade}\nMédico: ${medico}\nData: ${data}\nHora: ${hora}`);

    document.getElementById("form-agendamento").reset();
});
</script>

        
      
