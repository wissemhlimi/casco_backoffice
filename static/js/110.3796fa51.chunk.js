(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[110],{600:function(e,a,o){"use strict";o.r(a);a.default={common:{or:"o",cancel:"Cancelar",reset:"Reiniciar",save:"Guardar",search:"Buscar",edit:"Editar",remove:"Eliminar",new:"Nuevo",export:"Exportar a Excel",noDataToExport:"No hay datos para exportar",import:"Importar",discard:"Descartar",yes:"Si",no:"No",pause:"Pausa",areYouSure:"\xbfEst\xe1s seguro?",view:"Ver",destroy:"Eliminar",mustSelectARow:"Debe seleccionar una fila",filters:"Filtros"},app:{title:"Aplicaci\xf3n"},api:{menu:"API"},entities:{produr:{name:"produr",label:"Produrs",menu:"Produrs",exporterFileName:"exportacion_produr",list:{menu:"Produrs",title:"Produrs"},create:{success:"Produr guardado con \xe9xito"},update:{success:"Produr guardado con \xe9xito"},destroy:{success:"Produr eliminado con \xe9xito"},destroyAll:{success:"Produr(s) eliminado con \xe9xito"},edit:{title:"Editar Produr"},fields:{id:"Id",produrTitle:"ProdurTitle",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Produr"},view:{title:"Ver Produr"},importer:{title:"Importar Produrs",fileName:"produr_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},unit:{name:"unit",label:"Units",menu:"Units",exporterFileName:"exportacion_unit",list:{menu:"Units",title:"Units"},create:{success:"Unit guardado con \xe9xito"},update:{success:"Unit guardado con \xe9xito"},destroy:{success:"Unit eliminado con \xe9xito"},destroyAll:{success:"Unit(s) eliminado con \xe9xito"},edit:{title:"Editar Unit"},fields:{id:"Id",unitTitle:"UnitTitle",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Unit"},view:{title:"Ver Unit"},importer:{title:"Importar Units",fileName:"unit_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},family:{name:"family",label:"Families",menu:"Families",exporterFileName:"exportacion_family",list:{menu:"Families",title:"Families"},create:{success:"Family guardado con \xe9xito"},update:{success:"Family guardado con \xe9xito"},destroy:{success:"Family eliminado con \xe9xito"},destroyAll:{success:"Family(s) eliminado con \xe9xito"},edit:{title:"Editar Family"},fields:{id:"Id",famTitle:"FamTitle",famDescr:"FamDescr",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Family"},view:{title:"Ver Family"},importer:{title:"Importar Families",fileName:"family_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},prodline:{name:"prodline",label:"Prodlines",menu:"Prodlines",exporterFileName:"exportacion_prodline",list:{menu:"Prodlines",title:"Prodlines"},create:{success:"Prodline guardado con \xe9xito"},update:{success:"Prodline guardado con \xe9xito"},destroy:{success:"Prodline eliminado con \xe9xito"},destroyAll:{success:"Prodline(s) eliminado con \xe9xito"},edit:{title:"Editar Prodline"},fields:{id:"Id",lineTitle:"LineTitle",lineDescr:"LineDescr",lineNoperRange:"LineNoper",lineNoper:"LineNoper",lineDoc:"LineDoc",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Prodline"},view:{title:"Ver Prodline"},importer:{title:"Importar Prodlines",fileName:"prodline_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},zap:{name:"zap",label:"Zaps",menu:"Zaps",exporterFileName:"exportacion_zap",list:{menu:"Zaps",title:"Zaps"},create:{success:"Zap guardado con \xe9xito"},update:{success:"Zap guardado con \xe9xito"},destroy:{success:"Zap eliminado con \xe9xito"},destroyAll:{success:"Zap(s) eliminado con \xe9xito"},edit:{title:"Editar Zap"},fields:{id:"Id",zapTitle:"ZapTitle",zapDescr:"ZapDescr",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Zap"},view:{title:"Ver Zap"},importer:{title:"Importar Zaps",fileName:"zap_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},linedoc:{name:"linedoc",label:"Linedocs",menu:"Linedocs",exporterFileName:"exportacion_linedoc",list:{menu:"Linedocs",title:"Linedocs"},create:{success:"Linedoc guardado con \xe9xito"},update:{success:"Linedoc guardado con \xe9xito"},destroy:{success:"Linedoc eliminado con \xe9xito"},destroyAll:{success:"Linedoc(s) eliminado con \xe9xito"},edit:{title:"Editar Linedoc"},fields:{id:"Id",lineId:"LineId",linedocTitle:"LinedocTitle",linedocLink:"LinedocLink",linedocType:"LinedocType",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Linedoc"},view:{title:"Ver Linedoc"},importer:{title:"Importar Linedocs",fileName:"linedoc_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},config:{name:"config",label:"Configs",menu:"Configs",exporterFileName:"exportacion_config",list:{menu:"Configs",title:"Configs"},create:{success:"Config guardado con \xe9xito"},update:{success:"Config guardado con \xe9xito"},destroy:{success:"Config eliminado con \xe9xito"},destroyAll:{success:"Config(s) eliminado con \xe9xito"},edit:{title:"Editar Config"},fields:{id:"Id",configTitle:"ConfigTitle",configRef:"ConfigRef",configDateRange:"ConfigDate",configDate:"ConfigDate",configStatus:"ConfigStatus",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{configStatus:{active:"Active",locked:"Locked"}},placeholders:{},hints:{},new:{title:"Nuevo Config"},view:{title:"Ver Config"},importer:{title:"Importar Configs",fileName:"config_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},configTable:{name:"configTable",label:"ConfigTables",menu:"ConfigTables",exporterFileName:"exportacion_configTable",list:{menu:"ConfigTables",title:"ConfigTables"},create:{success:"ConfigTable guardado con \xe9xito"},update:{success:"ConfigTable guardado con \xe9xito"},destroy:{success:"ConfigTable eliminado con \xe9xito"},destroyAll:{success:"ConfigTable(s) eliminado con \xe9xito"},edit:{title:"Editar ConfigTable"},fields:{id:"Id",configCode:"ConfigCode",famId:"FamId",lineId:"LineId",prodId:"ProdId",zapId:"ZapId",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo ConfigTable"},view:{title:"Ver ConfigTable"},importer:{title:"Importar ConfigTables",fileName:"configTable_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},prodtype:{name:"prodtype",label:"Prodtypes",menu:"Prodtypes",exporterFileName:"exportacion_prodtype",list:{menu:"Prodtypes",title:"Prodtypes"},create:{success:"Prodtype guardado con \xe9xito"},update:{success:"Prodtype guardado con \xe9xito"},destroy:{success:"Prodtype eliminado con \xe9xito"},destroyAll:{success:"Prodtype(s) eliminado con \xe9xito"},edit:{title:"Editar Prodtype"},fields:{id:"Id",prodtypeName:"ProdtypeName",prodtypePlan:"ProdtypePlan",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{prodtypePlan:{yes:"Yes",no:"No"}},placeholders:{},hints:{},new:{title:"Nuevo Prodtype"},view:{title:"Ver Prodtype"},importer:{title:"Importar Prodtypes",fileName:"prodtype_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},product:{name:"product",label:"Products",menu:"Products",exporterFileName:"exportacion_product",list:{menu:"Products",title:"Products"},create:{success:"Product guardado con \xe9xito"},update:{success:"Product guardado con \xe9xito"},destroy:{success:"Product eliminado con \xe9xito"},destroyAll:{success:"Product(s) eliminado con \xe9xito"},edit:{title:"Editar Product"},fields:{id:"Id",prodName:"ProdName",prodDescr:"ProdDescr",partNumber:"PartNumber",prodType:"ProdType",partUnit:"PartUnit",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Product"},view:{title:"Ver Product"},importer:{title:"Importar Products",fileName:"product_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},pRODUCTline:{name:"pRODUCTline",label:"PRODUCTlines",menu:"PRODUCTlines",exporterFileName:"exportacion_pRODUCTline",list:{menu:"PRODUCTlines",title:"PRODUCTlines"},create:{success:"PRODUCTline guardado con \xe9xito"},update:{success:"PRODUCTline guardado con \xe9xito"},destroy:{success:"PRODUCTline eliminado con \xe9xito"},destroyAll:{success:"PRODUCTline(s) eliminado con \xe9xito"},edit:{title:"Editar PRODUCTline"},fields:{id:"Id",pRODlinePRODID:"PRODlinePRODID",pRODlineLINEID:"PRODlineLINEID",pRODlineBaseline:"PRODlineBaseline",prodlineUq:"ProdlineUq",prodlineUpt:"ProdlineUpt",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{pRODlineBaseline:{yes:"Yes",no:"No"}},placeholders:{},hints:{},new:{title:"Nuevo PRODUCTline"},view:{title:"Ver PRODUCTline"},importer:{title:"Importar PRODUCTlines",fileName:"pRODUCTline_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},pRODUCTunit:{name:"pRODUCTunit",label:"PRODUCTunits",menu:"PRODUCTunits",exporterFileName:"exportacion_pRODUCTunit",list:{menu:"PRODUCTunits",title:"PRODUCTunits"},create:{success:"PRODUCTunit guardado con \xe9xito"},update:{success:"PRODUCTunit guardado con \xe9xito"},destroy:{success:"PRODUCTunit eliminado con \xe9xito"},destroyAll:{success:"PRODUCTunit(s) eliminado con \xe9xito"},edit:{title:"Editar PRODUCTunit"},fields:{id:"Id",prodId:"ProdId",produrId:"ProdurId",pRODlineUQ:"PRODlineUQ",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo PRODUCTunit"},view:{title:"Ver PRODUCTunit"},importer:{title:"Importar PRODUCTunits",fileName:"pRODUCTunit_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}}},auth:{tenants:"Espacios de trabajo",profile:{title:"Perfil",success:"Perfil actualizado con \xe9xito"},createAnAccount:"Crea una cuenta",rememberMe:"Recu\xe9rdame",forgotPassword:"Se te olvid\xf3 tu contrase\xf1a",signin:"Iniciar Sesi\xf3n",signup:"Registrarse",signout:"Desconectar",alreadyHaveAnAccount:"\xbfYa tienes una cuenta? Registrarse.",social:{errors:{"auth-invalid-provider":"This email is already registered to another provider.","auth-no-email":"The email associated with this account is private or inexistent."}},signinWithAnotherAccount:"Inicia sesi\xf3n con otra cuenta",passwordChange:{title:"Cambia la contrase\xf1a",success:"Contrase\xf1a cambiada correctamente",mustMatch:"Las contrase\xf1as deben coincidir"},emailUnverified:{message:"Confirme su correo electr\xf3nico en <strong>{0}</strong> para continuar.",submit:"Reenviar verificaci\xf3n de correo electr\xf3nico"},emptyPermissions:{message:"A\xfan no tienes permisos. Espera a que el administrador te otorgue privilegios."},passwordResetEmail:{message:"Enviar contrase\xf1a restablecer correo electr\xf3nico",error:"Correo electr\xf3nico no reconocido"},passwordReset:{message:"Restablecer la contrase\xf1a"},emailAddressVerificationEmail:{error:"Correo electr\xf3nico no reconocido"},verificationEmailSuccess:"Correo electr\xf3nico de verificaci\xf3n enviado con \xe9xito",passwordResetEmailSuccess:"Correo electr\xf3nico de restablecimiento de contrase\xf1a enviado correctamente",passwordResetSuccess:"Contrase\xf1a cambiada correctamente",verifyEmail:{success:"Correo electr\xf3nico verificado con \xe9xito.",message:"Solo un momento, su correo electr\xf3nico est\xe1 siendo verificado ..."}},tenant:{name:"inquilino",label:"Espacios de trabajo",menu:"Espacios de trabajo",list:{menu:"Espacios de trabajo",title:"Espacios de trabajo"},create:{button:"Crear espacio de trabajo",success:"Espacio de trabajo guardado correctamente"},update:{success:"Espacio de trabajo guardado correctamente"},destroy:{success:"Espacio de trabajo eliminado correctamente"},destroyAll:{success:"Espacio(s) de trabajo eliminado(s) correctamente"},edit:{title:"Editar espacio de trabajo"},fields:{id:"Id",name:"Nombre",url:"URL",tenantName:"Nombre del espacio de trabajo",tenantId:"Espacio de trabajo",tenantUrl:"URL del espacio de trabajo",plan:"Plan"},enumerators:{},new:{title:"Nuevo espacio de trabajo"},invitation:{view:"Ver invitaciones",invited:"Invitado",accept:"Aceptar la invitacion",decline:"Rechazar invitaci\xf3n",declined:"Invitaci\xf3n rechazada con \xe9xito",acceptWrongEmail:"Aceptar invitaci\xf3n con este correo electr\xf3nico"},select:"Seleccionar espacio de trabajo",validation:{url:"La URL de su espacio de trabajo solo puede contener letras min\xfasculas, n\xfameros y guiones (y debe comenzar con una letra o n\xfamero)."}},roles:{admin:{label:"Administraci\xf3n",description:"Acceso total a todos los recursos."},custom:{label:"Rol personalizado",description:"Acceso personalizado a recursos"}},user:{invite:"Invitaci\xf3n",title:"Usuarios",menu:"Usuarios",fields:{id:"Id",avatars:"Avatar",email:"Email",emails:"Email(s)",fullName:"Nombre completo",firstName:"Nombre",lastName:"Apellido",status:"Estado",disabled:"Discapacitado",phoneNumber:"N\xfamero de tel\xe9fono",role:"Rol",createdAt:"Creado el",updatedAt:"Actualizado el",roleUser:"Rol/Usuario",roles:"Roles",createdAtRange:"Creado el",password:"Contrase\xf1a",rememberMe:"Recu\xe9rdame",oldPassword:"Contrase\xf1a anterior",newPassword:"Nueva contrase\xf1a",newPasswordConfirmation:"Nueva confirmaci\xf3n de contrase\xf1a"},enabled:"Habilitado",disabled:"Discapacitado",validations:{email:"El correo electr\xf3nico ${value} no es v\xe1lido"},disable:"Inhabilitar",enable:"Habilitar",doEnableSuccess:"Usuario habilitado con \xe9xito",doDisableSuccess:"Usuario deshabilitado con \xe9xito",doDisableAllSuccess:"Usuario(s) deshabilitado con \xe9xito",doEnableAllSuccess:"Usuario(s) habilitados correctamente",doAddSuccess:"Usuario(s) guardado correctamente",doUpdateSuccess:"Usuario guardado con \xe9xito",status:{active:"Activo",invited:"Invitado","empty-permissions":"Esperando permisos"},exporterFileName:"usuarios_exportacion",doDestroySuccess:"Usuario eliminado con \xe9xito",doDestroyAllSelectedSuccess:"Usuario(s) eliminado correctamente",edit:{title:"Editar Usuario"},new:{title:"Invitar Usuario(s)",titleModal:"Nuevo Usuario",emailsHint:"Separe varias direcciones de correo electr\xf3nico utilizando el car\xe1cter de coma."},view:{title:"Ver Usuario",activity:"Actividad"},importer:{title:"Importar Usuarios",fileName:"users_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio."},errors:{userAlreadyExists:"El usuario con este correo electr\xf3nico ya existe",userNotFound:"Usuario no encontrado",disablingHimself:"No puedes inhabilitarte",revokingOwnPermission:"No puede revocar su propio permiso de administrador"}},plan:{menu:"Planes",title:"Planes",free:{label:"Gratis",price:"$0"},growth:{label:"Crecimiento",price:"$10"},enterprise:{label:"Empresa",price:"$50"},pricingPeriod:"/mes",current:"Plan Actual",subscribe:"Suscribir",manage:"Administrar Suscripci\xf3n",cancelAtPeriodEnd:"Este plan se cancelar\xe1 al final del per\xedodo.",somethingWrong:"Hay algo mal con su suscripci\xf3n. Vaya a administrar la suscripci\xf3n para obtener m\xe1s detalles.",notPlanUser:"No eres el administrador de esta suscripci\xf3n.",demoHintHtml:'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostraci\xf3n.'},auditLog:{menu:"Registros de auditor\xeda",title:"Registros de auditor\xeda",exporterFileName:"audit_log_export",entityNamesHint:"Separe varias entidades con el car\xe1cter de coma.",fields:{id:"Id",timestampRange:"Per\xedodo",entityName:"Entidad",entityNames:"Entidades",entityId:"ID de entidad",action:"Acci\xf3n",values:"Valores",timestamp:"Fecha",createdByEmail:"Email del usuario"}},settings:{title:"Configuraciones",menu:"Configuraciones",save:{success:"Configuraci\xf3n guardada con \xe9xito. La p\xe1gina se volver\xe1 a cargar en {0} segundos para que los cambios surtan efecto."},fields:{theme:"Tema",logos:"Logo",backgroundImages:"Imagen de fondo"},colors:{default:"Defecto",cyan:"Cian","geek-blue":"Geek Blue",gold:"Oro",lime:"Lima",magenta:"Magenta",orange:"Naranja","polar-green":"Verde polar",purple:"P\xfarpura",red:"Rojo",volcano:"Volc\xe1n",yellow:"Amarillo"}},dashboard:{menu:"Tablero",message:"Esta p\xe1gina utiliza datos falsos solo con fines de demostraci\xf3n. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.",charts:{day:"D\xeda",red:"Rojo",green:"Verde",yellow:"Amarillo",grey:"Gris",blue:"Azul",orange:"Naranja",months:{1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio"},eating:"Comiendo",drinking:"Bebiendo",sleeping:"Dormiendo",designing:"Dise\xf1ando",coding:"Codificando",cycling:"Pedalando",running:"Corriendo",customer:"Cliente"}},errors:{403:"Lo sentimos, no tienes acceso a esta p\xe1gina",404:"Lo sentimos, la p\xe1gina que visitaste no existe",500:"Lo sentimos, el servidor informa un error",429:"Demasiadas solicitudes. Por favor, int\xe9ntelo de nuevo m\xe1s tarde.",backToHome:"Volver a Inicio",forbidden:{message:"Prohibido"},validation:{message:"Ocurri\xf3 un error"},defaultErrorMessage:"Ops, ocurri\xf3 un error"},preview:{error:"Lo sentimos, esta operaci\xf3n no est\xe1 permitida en el modo de vista previa."},validation:{mixed:{default:"${path} no es v\xe1lido",required:"${path} es obligatorio",oneOf:"${path} debe ser uno de los siguientes valores: ${values}",notOneOf:"${path} no debe ser uno de los siguientes valores: ${values}",notType:function(e){var a=e.path,o=e.type;e.value,e.originalValue;return"".concat(a," debe ser un ").concat(o)}},string:{length:"${path} debe tener exactamente ${length} caracteres",min:"${path} debe tener al menos ${min} caracteres",max:"${path} debe tener como m\xe1ximo ${max} caracteres",matches:'${path} debe coincidir con lo siguiente: "${regex}"',email:"${path} debe ser un correo electr\xf3nico v\xe1lido",url:"${path} debe ser una URL v\xe1lida",trim:"${path} debe ser una cadena recortada",lowercase:"${path} debe ser una cadena en min\xfasculas",uppercase:"${path} debe ser una cadena en may\xfascula",selected:"${path} debe estar seleccionado"},number:{min:"${path} debe ser mayor o igual que ${min}",max:"${path} debe ser menor o igual que ${max}",lessThan:"${path} debe ser menor que ${less}",moreThan:"${path} debe ser mayor que ${more}",notEqual:"${path} no debe ser igual a ${notEqual}",positive:"${path} debe ser un n\xfamero positivo",negative:"${path} debe ser un n\xfamero negativo",integer:"${path} debe ser un n\xfamero entero"},date:{min:"El campo ${path} debe ser posterior a ${min}",max:"El campo ${path} debe ser anterior a ${max}"},boolean:{},object:{noUnknown:"El campo ${path} no puede tener claves no especificadas en la forma del objeto"},array:{min:function(e){var a=e.min,o=e.path;return 1===a?"".concat(o," es obligatorio"):"'El campo ".concat(o," debe tener al menos ").concat(a," elementos")},max:"El campo ${path} debe tener elementos menores o iguales a ${max}"}},fileUploader:{upload:"Subir",image:"Debes subir una imagen",size:"El archivo es muy grande. El tama\xf1o m\xe1ximo permitido es {0}",formats:"Formato inv\xe1lido. Debe ser uno de: {0}."},importer:{line:"L\xednea",status:"Estado",pending:"Pendiente",imported:"Importado",error:"Error",total:"{0} importado, {1} pendiente y {2} con error",importedMessage:"Procesado {0} de {1}.",noNavigateAwayMessage:"No navegue fuera de esta p\xe1gina o la importaci\xf3n se detendr\xe1.",completed:{success:"Importaci\xf3n completada. Todas las filas se importaron correctamente.",someErrors:"Procesamiento completado, pero algunas filas no se pudieron importar.",allErrors:"Importaci\xf3n fallida. No hay filas v\xe1lidas."},form:{downloadTemplate:"Descargar la plantilla",hint:"Haga clic o arrastre el archivo a esta \xe1rea para continuar."},list:{discardConfirm:"\xbfEst\xe1s seguro? Los datos no importados se perder\xe1n."},errors:{invalidFileEmpty:"El archivo esta vacio",invalidFileExcel:"Solo se permiten archivos de Excel(.xlsx)",invalidFileUpload:"Archivo inv\xe1lido. Aseg\xfarese de estar utilizando la \xfaltima versi\xf3n de la plantilla.",importHashRequired:"Se requiere hash de importaci\xf3n",importHashExistent:"Los datos ya han sido importados"}},autocomplete:{loading:"Cargando..."},imagesViewer:{noImage:"Sin im\xe1gen"}}}}]);