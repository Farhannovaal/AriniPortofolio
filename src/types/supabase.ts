export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          full_name: string | null
          headline: string | null
          bio: string | null
          avatar_url: string | null
          email: string | null
          phone: string | null
          linkedin_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          full_name?: string | null
          headline?: string | null
          bio?: string | null
          avatar_url?: string | null
          email?: string | null
          phone?: string | null
          linkedin_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string | null
          headline?: string | null
          bio?: string | null
          avatar_url?: string | null
          email?: string | null
          phone?: string | null
          linkedin_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      experiences: {
        Row: {
          id: string
          profile_id: string
          company_name: string
          position: string
          start_date: string | null
          end_date: string | null
          description: string | null
          tools_used: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          company_name: string
          position: string
          start_date?: string | null
          end_date?: string | null
          description?: string | null
          tools_used?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          company_name?: string
          position?: string
          start_date?: string | null
          end_date?: string | null
          description?: string | null
          tools_used?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          profile_id: string
          title: string
          description: string | null
          image_url: string | null
          project_url: string | null
          technologies: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          title: string
          description?: string | null
          image_url?: string | null
          project_url?: string | null
          technologies?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          title?: string
          description?: string | null
          image_url?: string | null
          project_url?: string | null
          technologies?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          profile_id: string
          name: string
          category: string | null
          created_at: string
        }
        Insert: {
          id?: string
          profile_id: string
          name: string
          category?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          profile_id?: string
          name?: string
          category?: string | null
          created_at?: string
        }
      }
    }
  }
}