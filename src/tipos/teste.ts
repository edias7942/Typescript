interface Usuario {
    nome: string;
    idade: number;
    dias_semana_disponivel_index: number[];
}

interface Designacao {
    data: Date;
    designado_1: Usuario;
}

let data_10_10_2024 = new Date(2024, 9, 10);

let usuario_emerson = {
    nome: 'emerson',
    idade: 21,
    dias_semana_disponivel_index: [1, 2, 3]
}

let designacao_1: Designacao = {
    data: data_10_10_2024,
    designado_1: {
        nome: 'emerson',
        idade: 21,
        dias_semana_disponivel_index: [1, 2, 3]
    }
};

console.log(designacao_1);
