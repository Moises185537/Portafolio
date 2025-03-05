<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Volkswagen Potosina</title>
		<style type="text/css">
		body{
			background-color: aqua;
			text-align: left;
		}
		</style>
	</head>
	<body>
		<center>
			<h1>Volkswagen Potosina</h1>
			<h2>Compras Online</h2>
		</center>
		<form action="" method="post" enctype="text/plain">
			<fieldset>
				<legend>Informacion general del cliente</legend>
				<label for="Nombre">Nombre:</label>
				<input type="text" name="Nombre" id="Nombre" placeholder="Nombre" size="10" required>

				<label for="ApPaterno" style="margin-left: 150px;">Apellido paterno:</label>
				<input type="text" name="ApPaterno" id="ApMaterno" placeholder="Apellido paterno" size="10">

				<label for="ApMaterno" style="margin-left: 150px;">Apellido materno:</label>
				<input type="text" name="ApMaterno" id="ApMaterno" placeholder="Apellido materno" size="10"><br/>

				<label for="Usuario">Nombre de usuario:</label>
				<input type="text" name="Usuario" id="Usuario" placeholder="Usuario" size="10" required>

				<label for="pass" style="margin-left: 127px;">Password: </label>
				<input type="Password" name="pass" id="pass" size="10" maxlength="8" placeholder="Password" required>

				<label for="fechareg" style="margin-left: 150px;">Fecha de registro:</label>
				<input type="date" name="fechareg" id="fechareg"><br/>

			</fieldset>
			<fieldset>
				<legend>Datos para facturar</legend>
					<label for="pais">País:</label>
					<label for="Ciudad" style="margin-left: 127px;">Ciudad:</label>
					<br/>
					<select name="pais" id="pais" size="3">
					<optgroup>
						<option value="1" selected>Mexico</option>
						<option value="2">Canada</option>
						<option value="3">Reino Unido</option>
					</optgroup>
					</select>
					<select name="Ciudad" id="Ciudad" size="3" style="margin-left: 40px;">
					<optgroup>
						<option value="1" selected >San Luis Potosi</option>
						<option value="2" >Monterrey</option>
						<option value="3" >Cd. Valles</option>
					</optgroup>
					</select>

					<label for="Calle" style="margin-left: 127px;">Calle:</label>
					<input type="text" name="Calle" id="Calle" size="10" placeholder="Calle"><br/>

					<label for="Numcasa">Numero de casa:</label>
					<input type="number" name="Numcasa" id="Numcasa" min="0" size="10"  placeholder="Numero exterior">

					<label for="Colonia" style="margin-left: 127px;">Colonia:</label>
					<input type="text" name="Colonia" id="Colonia" size="10" placeholder="Colonia">

					<label for="email" style="margin-left: 127px;">E-mail:</label>
					<input type="text" name="email" id="email" size="10"placeholder="E-mail" required><br/>

					<label for="RFC">R.F.C:</label>
					<input type="text" name="RFC" id="RFC" size="10" placeholder="R.F.C" required>

					<label for="CP" style="margin-left: 127px;">C.P:</label>
					<input type="text" name="CP" id="CP" size="10" placeholder="Codigo Postal">

					<input type="checkbox" name="pasa1" id="pasa1" value="1" required>
					<label for="pasa1">Acepto los terminos y condiciones</label><br/>

					<input type="submit" name="enviar" id="enviar" value="Enviar datos">
					<input type="reset" name="restablecer" id="restablecer" value="Restablecer">
			</fieldset>
			<footer style="text-align: right;">Marzo 2025,SLP.</footer>
	</body>
	</html>
