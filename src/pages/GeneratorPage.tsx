import React, { useState } from 'react';
import ScriptForm from '../components/ScriptForm';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import EditableScriptArea from '../components/EditableScriptArea';
import { FormData } from '../types';
import { generateScript } from '../services/geminiService';

const GeneratorPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [script, setScript] = useState<string | null>(null);

  const handleSubmit = async (data: FormData) => {
    // Basic validation
    if (!data.platform || !data.format || !data.videoTopic || !data.videoGoal || !data.targetAudience || !data.toneOfVoice) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setScript(null);

    try {
      const generatedScript = await generateScript(data);
      setScript(generatedScript);
    } catch (err) {
      setError('Ocorreu um erro ao gerar o roteiro. Por favor, tente novamente mais tarde.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveScript = (editedScript: string) => {
    // In a real app, this would be a more robust save operation,
    // likely involving a call to a backend service to update a Firestore document.
    console.log('Saving script to database (simulation):', editedScript);
    setScript(editedScript); // Update state to reflect saved changes, useful for UI feedback
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Gerador de Roteiros com IA</h1>
        <p className="text-center text-gray-500 mb-8">
          Preencha os campos abaixo para criar um roteiro de vídeo personalizado em segundos.
        </p>
        <ScriptForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>

      {isLoading && <LoadingSpinner />}
      
      {error && (
        <div className="max-w-4xl mx-auto mt-8 p-4 bg-red-100 text-red-700 border border-red-400 rounded-lg" role="alert">
          <p className="font-bold">Erro!</p>
          <p>{error}</p>
        </div>
      )}

      {script && !isLoading && (
        <EditableScriptArea 
          initialScript={script} 
          onSave={handleSaveScript}
          isLoading={isLoading} 
        />
      )}
    </div>
  );
};

export default GeneratorPage; 