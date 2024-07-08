import GenerateCPF from './Ex016_1/assets/JS/GenerateCPF';
import './Ex016_1/assets/style/style.css';

(function(){
    const generate = new GenerateCPF();
    const generateCpf = document.querySelector('.cpf-generated');
    generateCpf.innerHTML = generate.generatenewCPF();
}());