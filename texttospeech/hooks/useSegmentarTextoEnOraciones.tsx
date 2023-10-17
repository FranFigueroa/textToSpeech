import { Text, View, Button } from 'react-native';

export function useSegmentarTextoEnOraciones(texto: string): string[] {
  const oraciones: string[] = [];
  let oracionActual = '';
  const delimitadoresOracion = ['.', '!', '?'];

  for (let i = 0; i < texto.length; i++) {
    const caracterActual = texto[i];
    oracionActual += caracterActual;

    // Si encontramos un delimitador de oración, agregamos la oración actual y la reiniciamos
    if (delimitadoresOracion.includes(caracterActual) && i < texto.length - 1) {
      oraciones.push(oracionActual.trim());
      oracionActual = '';
    }
  }

  // Agregamos la última oración si no termina con un delimitador de oración
  if (oracionActual !== '') {
    oraciones.push(oracionActual.trim());
  }

  return oraciones;
}

// Ejemplo de uso
const textoEjemplo = 'Esto es una oración. Y esto es otra oración.';
const oracionesSegmentadas = useSegmentarTextoEnOraciones(textoEjemplo);
console.log(oracionesSegmentadas);