import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Doctor, Patient } from '../types';

interface TokenContextType {
  doctor: Doctor | null;
  patient: Patient | null;
  loading: boolean;
  isDoctor: boolean;
  isPatient: boolean;
  verifyPatientToken: (token: string) => Promise<boolean>;
  clearPatient: () => void;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);
const PATIENT_TOKEN_KEY = 'patient_access_token';

export function TokenProvider({ children }: { children: ReactNode }) {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initData = async () => {
      try {
        const { data: doctorData } = await supabase
          .from('doctors')
          .select('*')
          .eq('email', 'alexandra@metodoluvaro.it')
          .maybeSingle();

        if (doctorData) {
          setDoctor(doctorData);
        }

        const storedToken = localStorage.getItem(PATIENT_TOKEN_KEY);
        if (storedToken) {
          await verifyPatientToken(storedToken);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    initData();
  }, []);

  const verifyPatientToken = async (token: string): Promise<boolean> => {
    try {
      const { data: patientData, error } = await supabase
        .from('patients')
        .select('*')
        .eq('access_token', token)
        .maybeSingle();

      if (error || !patientData) {
        localStorage.removeItem(PATIENT_TOKEN_KEY);
        return false;
      }

      setPatient(patientData);
      localStorage.setItem(PATIENT_TOKEN_KEY, token);
      return true;
    } catch (error) {
      console.error('Error verifying token:', error);
      return false;
    }
  };

  const clearPatient = () => {
    setPatient(null);
    localStorage.removeItem(PATIENT_TOKEN_KEY);
  };

  return (
    <TokenContext.Provider
      value={{
        doctor,
        patient,
        loading,
        isDoctor: !!doctor,
        isPatient: !!patient,
        verifyPatientToken,
        clearPatient,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
}
