/*
  # Create vehicles and messages tables

  1. New Tables
    - `vehicles`
      - `id` (uuid, primary key)
      - `model` (text)
      - `condition` (text)
      - `price` (numeric)
      - `description` (text)
      - `features` (jsonb)
      - `images` (text[])
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `read` (boolean)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated admin users
*/

-- Create vehicles table
CREATE TABLE vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  model text NOT NULL,
  condition text NOT NULL,
  price numeric NOT NULL,
  description text,
  features jsonb DEFAULT '{}',
  images text[] DEFAULT ARRAY[]::text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  phone text,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for vehicles
CREATE POLICY "Allow public read access" ON vehicles
  FOR SELECT TO public USING (true);

CREATE POLICY "Allow admin full access" ON vehicles
  FOR ALL TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE auth.users.role = 'admin'))
  WITH CHECK (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE auth.users.role = 'admin'));

-- Create policies for contact_messages
CREATE POLICY "Allow public insert" ON contact_messages
  FOR INSERT TO public
  WITH CHECK (true);

CREATE POLICY "Allow admin read access" ON contact_messages
  FOR SELECT TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE auth.users.role = 'admin'));