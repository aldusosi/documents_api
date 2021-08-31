# documents_api**POSTGRES SQL;**

**TABELA** documents; 


exemplo de criação da tabela em postgres SQL;



create table documents(

id serial primary key not null,

**kbSizen** text not null,

**nome** varchar(30) not null,

**content** text not null,

**criatedAt** timestamptz not null,

**deletedAt** timestamptz default null

);


**API REST;**

POST/documents

recebe um objeto JSON 


{

"nome":  "nome do documento",

"conteudo": "conteudo do documento"

}


*nome* -> aqui será adicionado o nome do documento a ser guardado no banco de dados. 

*conteudo* -> conteudo recebe uma imagem do documento em questão no formato base64.


**GET**/documents 

Retorna uma lista com referencias a todos os documentos adicionados. [


{

  **"id":** 3,
	
  **"kbsizen":** "55.078 KiB",
	
  **"nome":** "Identidade",
	
  **"criatedat":** "2021-08-31T05:24:46.389Z",
	
  **"deletedat":** null
	
},
{

  **"id":** 2,
	
  **"kbsizen":** "55.078 KiB",
	
  **"nome":** "Identidade",
	
  **"criatedat":** "2021-08-31T05:13:03.560Z",
	
  **"deletedat":** "2021-08-31T13:39:08.922Z"
	
},
{

  **"id":** 4,
	
  **"kbsizen":** "55.078 KiB",
	
  **"nome":** "Identidade",
	
  **"criatedat":** "2021-08-31T14:29:29.737Z",
	
  **"deletedat":** null
	
},
{

  **"id":** 5,
	
  **"kbsizen":** "55.078 KiB",
	
  **"nome":** "Identidade",
	
  **"criatedat":** "2021-08-31T14:35:19.596Z",
	
  **"deletedat":** null
	
}
]

**GET**/cocuments/documentId 

Recebe como parâmetro um ID, caso este ID esteja inserido da tabela documents do banco de dados, 

retorna um objeto JSON referente a coluna CONTENT (base64) dele. Exemplo:

[


{
  "content": "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nOydd3
	gc1dWH3zu7q2q5N1xVVpKN6KbZko0NxIQWSmISmoHQktA/iim2WOzQIbQEQksgdEwJoZtmbNlUUwzGVpd7r+ranbnfH6NVs8pK
	mtnZle77PH4ea3bm3LO7M7+95ZxzBQpFG3gn3zREk+4REtdopD4KTYwQ4BaS72vd2ttlC301nbGXme0bIYXxA7AN2A5yG4jtUr
	BBg426ZJ0buUEIfcPKxXdsAqQtb0wRtQinHVA4z/hJt4zVhWtfocn9pdSyBHI/CeOB+HYuK9E07dxVi3xLQ23HO9U3SgsYa0M5
	V0AVsEpCvoQVmtDyMQI/5S9xF4LPCLVNRc9CCVYvwzv5piECz+FCchhwOILDkQzqorkaQ2jZRYt934XUdicEqx0qhWC5IflBIH
	8oyHM9pQSs9+B22gGFvWRm+0aAMU0KpiE4Com32QndG3TFuTD+DkzqlpXOkSglEwVMBMGECRv+vWwZSrB6CUqwehjJU31xHt04
	RkOcJKWcJjEyG160YUZISiaOm+pLXrXQV2a9dYWiOUqwegBZE30D/S7jRCE5RQaM44A+Mozz1brfSAfKwtagoteiBCtKSZ7qi4
	sNGCdL5Ew/xq8Bt3RoRlIK4pxpWdHbUIIVZYyb4pskDWOmDBi/l9BfrZsoehNKsKKAcYffNEjGeC6SgosMw/B2fIVC0TNRghXB
	ZEz0jcMtLzOknAn0VWGUit6OEqwIJCPHdywYPjCylUgpFI0owYogMrLnTBYas6U0pjvti8IkM/uGJIg9Pn+J6zUVoOo8mtMOKE
	yhysjO/RwhFkkplFhFEAGZEC+FeCUjx/ghfXLub1GrHI6ielgO4p085...
} ]


**DELETE**/documents/documentId 

Está rota recebe como parámetro um ID, caso este ID esteja inserido na tabela documents do banco de dados, 

ele altera a coluna DELETEDAT de Null para a data atual, dessa forma seria possível saber qual dia da remoção 

do arquivo. Está rota retorna apenas “Deletado com sucesso” casso o ID informado esteja inserido, ou “Documento 

não encontrado.” caso não o encontre.

