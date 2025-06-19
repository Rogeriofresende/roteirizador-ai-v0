export interface FormData {
  platform: 'YouTube' | 'Instagram' | 'TikTok' | '';
  format: string;
  videoTopic: string;
  videoGoal: string;
  targetAudience: string;
  customAudience: string;
  toneOfVoice: string;
  customTone: string;
  keyPoints: string;
}

export interface SavedScript extends FormData {
  id: string;
  userId: string;
  scriptContent: string;
  createdAt: any; // Ideally a Firestore Timestamp
} 