export default function guardrail(mathFunction) {
  const lined = [];
  try {
    const value = mathFunction();
    lined.push(value, 'Guardrail was processed');
  } catch (error) {
    lined.push(`Error: ${error.message}`, 'Guardrail was processed');
  }
  return lined;
}
