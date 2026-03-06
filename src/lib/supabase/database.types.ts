export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: string;
          name: string;
          type: string;
          time: string;
          description: string;
          venues: string[];
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Insert: {
          id?: string;
          name: string;
          type: string;
          time: string;
          description: string;
          venues: string[];
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          type?: string;
          time?: string;
          description?: string;
          venues?: string[];
          created_by?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
