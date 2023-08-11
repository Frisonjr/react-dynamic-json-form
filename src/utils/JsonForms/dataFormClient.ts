const dataFormClient = [
  {
    group: "Client data",
    fields: [
      {
        label: "Name",
        name: "name",
        type: "string",
        rows: 1,
        required: true,
      },
      {
        label: "Birth date",
        name: "birth_date",
        type: "date",
      },
      {
        label: "Gender",
        name: "gender",
        type: "select",
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
        ],
        conditions: {
          other: [
            {
              label: "Specify your gender",
              name: "other",
              type: "string",
              rows: 1,
              required: true,
            },
          ],
        },
      },
      {
        label: "Email",
        name: "email",
        type: "email",
      },
      {
        label: "Phone",
        name: "phone",
        type: "number",
      },
      {
        label: "Relationship Status",
        name: "relationship_status",
        type: "select",
        options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
          { value: "divorced", label: "Divorced" },
          { value: "widowed", label: "Widowed" },
        ],
      },
      {
        label: "Ethnicity/Nationality",
        name: "Ethnicity",
        select: "select",
        options: [
          { value: "white", label: "White" },
          { value: "black", label: "Black" },
          { value: "asian", label: "Asian" },
          { value: "hispanic", label: "Hispanic" },
          { value: "other", label: "Other" },
        ],
        conditions: {
          other: [
            {
              label: "Inform your ethnicity",
              name: "other_ethnicity",
              type: "string",
              rows: 1,
            },
          ],
        },
      },
      {
        label: "Address",
        name: "address",
        type: "string",
        rows: 1,
      },
      {
        label: "Smoker",
        name: "smoker",
        type: "boolean",
        conditions: {
          true: [
            {
              label: "How many cigarettes do you smoke per day?",
              name: "cigarettes",
              type: "number",
            },
          ],
        },
      },
      {
        label: "Select a number between 1 and 10",
        name: "number",
        type: "interval",
        min: 1,
        max: 10,
      },
      {
        label: "Select the programming languages you know",
        name: "programming_languages",
        type: "multicheck",
        options: [
          { value: "javascript", label: "Javascript" },
          { value: "typescript", label: "Typescript" },
          { value: "python", label: "Python" },
          { value: "java", label: "Java" },
          { value: "c#", label: "C#" },
          { value: "c++", label: "C++" },
          { value: "php", label: "PHP" },
          { value: "ruby", label: "Ruby" },
          { value: "go", label: "Go" },
          { value: "rust", label: "Rust" },
          { value: "swift", label: "Swift" },
          { value: "kotlin", label: "Kotlin" },
          { value: "scala", label: "Scala" },
          { value: "r", label: "R" },
          { value: "haskell", label: "Haskell" },
          { value: "elixir", label: "Elixir" },
          { value: "clojure", label: "Clojure" },
          { value: "erlang", label: "Erlang" },
        ],
      },
      {
        label: "Country",
        name: "country_name",
        type: "autocomplete",
        request: "https://restcountries.com/v3.1/name",
        request_token: "country_name",
        request_key_label: "country_name",
        request_key_value: "country_name",
      },
    ],
  },
] as Models.CustomDynamicData[];

export default dataFormClient;
