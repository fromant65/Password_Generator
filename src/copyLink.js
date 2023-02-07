export function copyURI(event) {
  event.preventDefault();
  navigator.clipboard.writeText(event.target.getAttribute("password")).then(
    () => {
      alert("La contraseña ha sido copiada correctamente al portapapeles");
    },
    () => {
      alert("Ha habido un error al copiar la contraseña al portapapeles");
    }
  );
}
