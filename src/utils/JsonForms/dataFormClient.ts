const dataFormClient = [
  {
    group: "Dados paciente",
    fields: [
      {
        label: "Número do atendimento",
        name: "numero_atendimento",
        type: "number",
        required: true,
      },
      {
        label: "name do paciente",
        name: ["paciente", "name"],
        type: "string",
        required: true,
      },
      {
        label: "Código",
        name: ["paciente", "codigo"],
        type: "number",
      },
      {
        label: "Data de nascimento",
        name: ["paciente", "data_nascimento"],
        type: "data",
        showTime: false,
        required: true,
      },
      {
        label: "Gênero",
        name: ["paciente", "genero"],
        type: "select",
        options: [
          { label: "Masculino", value: "M" },
          { label: "Feminino", value: "F" },
          { label: "Outro", value: "O" },
        ],
      },
      {
        label: "CPF",
        name: ["paciente", "cpf"],
        type: "masked",
        mask: "000.000.000-00",
        required: true,
      },
      {
        label: "Observação",
        name: ["paciente", "observacao"],
        type: "string",
      },
    ],
  },
] as Models.CustomDynamicData[];

export default dataFormClient;
