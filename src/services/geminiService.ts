import { FormData } from '../types';

/**
 * Simulates calling the Gemini API to generate a script.
 * In a real application, this would contain the actual API call logic.
 * @param data The form data.
 * @returns A promise that resolves to the generated script content.
 */
export const generateScript = async (data: FormData): Promise<string> => {
  console.log('Generating script with data:', data);

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Basic template for the script
  const script = `
# Roteiro Gerado para ${data.platform}

**Título:** ${data.videoTopic}

**Objetivo:** ${data.videoGoal}
**Público-Alvo:** ${data.targetAudience === 'Outro (descrever abaixo)' ? data.customAudience : data.targetAudience}
**Tom de Voz:** ${data.toneOfVoice === 'Outro (descrever abaixo)' ? data.customTone : data.toneOfVoice}

---

### Cena 1: Abertura (Hook)

**Visual:** [Descreva a imagem de abertura. Ex: Close-up do apresentador sorrindo]

**Fala:** [Início impactante para prender a atenção do público] Olá! Você já se perguntou como ${data.videoTopic.toLowerCase()}? Fique comigo que nos próximos minutos eu vou te mostrar exatamente isso!

---

### Cena 2: Desenvolvimento

**Visual:** [Descreva o B-roll ou a cena principal. Ex: Animações explicando o conceito]

**Fala:** [Desenvolva os pontos-chave aqui. Se o usuário forneceu pontos, use-os]
${data.keyPoints ? `Vamos seguir estes pontos: ${data.keyPoints}` : 'O primeiro passo é...'}

---

### Cena 3: Chamada para Ação (CTA)

**Visual:** [Descreva a cena final. Ex: Apresentador olhando para a câmera com um gráfico de "Inscreva-se" na tela]

**Fala:** E aí, gostou? Se este vídeo te ajudou a entender melhor sobre ${data.videoTopic.toLowerCase()}, não se esqueça de curtir, compartilhar e se inscrever no canal para mais dicas como essa!
  `;

  return script;
}; 