import { FormData } from './types';

export const PLATFORM_OPTIONS = ['YouTube', 'Instagram', 'TikTok'];

export const FORMAT_OPTIONS: { [key: string]: string[] } = {
  YouTube: ['Vídeo Longo (10+ min)', 'Vídeo Padrão (2-10 min)', 'Short (< 60s)'],
  Instagram: ['Reel', 'Sequência de Stories (3-5 partes)', 'Roteiro para Carrossel'],
  TikTok: ['Vídeo Padrão do TikTok'],
};

export const GOAL_OPTIONS = [
  'Atrair novos seguidores (Topo de Funil)',
  'Educar e engajar minha audiência (Meio de Funil)',
  'Gerar vendas / Apresentar produto (Fundo de Funil)',
];

export const AUDIENCE_OPTIONS = [
  'Iniciantes no Assunto',
  'Entusiastas e Hobbistas',
  'Profissionais da Área',
  'Estudantes e Acadêmicos',
  'Empreendedores e Donos de Negócio',
  'Parceiro Comercial ou Potencial (B2B)',
  'Cliente ou Potencial Cliente (B2C)',
  'Alunos de um Curso',
  'Público Geral / Curiosos',
  'Outro (descrever abaixo)',
];

export const TONE_OPTIONS = [
  'Informativo e Direto',
  'Engraçado e Casual',
  'Inspirador e Motivacional',
  'Analítico e Profundo',
  'Narrativo / Storytelling',
  'Polêmico e Desafiador',
  'Técnico e Especializado',
  'Empático e Acolhedor',
  'Luxuoso e Sofisticado',
  'Outro (descrever abaixo)',
];

export const OTHER_KEY = 'Outro (descrever abaixo)';

export const INITIAL_FORM_DATA: FormData = {
  platform: '',
  format: '',
  videoTopic: '',
  videoGoal: '',
  targetAudience: '',
  customAudience: '',
  toneOfVoice: '',
  customTone: '',
  keyPoints: '',
}; 