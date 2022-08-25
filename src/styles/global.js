//Arquivo que irá definir o estilo da pagina principal 
import { createGlobalStyle } from 'styled-components' //Importa o Styled Components

//As linhas abaixo irá definir os atributos da pagina, na sintaxe do CSS
export default createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap'); /*Importa a fonte usada*/
	*{ 
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	html, body, #root{
		height: 100%;
	}
	body{
		font: 14px 'Roboto', sans-serif;
		background: #ced6e0;
		color: #333;
		-webkit-font-smoothing: antialiased !important;
	}
	ul{
	list-style: none;
	}
`;