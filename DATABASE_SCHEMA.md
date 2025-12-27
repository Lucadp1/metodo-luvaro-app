# Database Schema Overview

Your Supabase database is fully configured with a comprehensive schema for the nutritionist application.

## Authentication & Users

### user_profiles
- Links auth.users to doctors or patients
- Role-based access: `DOCTOR_ADMIN` or `PATIENT_USER`
- Fields: id, email, role, doctor_id, patient_id, created_at

## Core Tables

### doctors
- Doctor accounts and profiles
- Fields: id, full_name, email, created_at
- Unique email constraint
- RLS enabled

### patients
- Patient records linked to doctors
- Fields: id, doctor_id, first_name, last_name, email, phone, active
- Additional fields: height_cm, birth_date, gender, notes, status
- Approval system: approved, approved_at, approved_by
- Partner referral: referred_by_partner_id
- Request tracking: request_id
- RLS enabled

### patient_requests
- Public access requests from potential patients
- Fields: full_name, email, phone, birth_date, goal, notes, status
- Status: pending, approved, rejected
- Goals: dimagrimento, PCOS, sport, benessere, altro

## Health Data

### measurements
- Weight and body measurements tracking
- Fields: patient_id, measured_at, weight_kg, waist_cm, hips_cm, notes
- Validation: weight 0-500kg, measurements 0-300cm
- RLS enabled

### metabolism_records
- BMR and TDEE calculations
- Fields: patient_id, activity_factor, bmr_formula, bmr_value, tdee_value
- Includes: weight_kg, height_cm, age, gender
- Formula support: mifflin-st-jeor
- RLS enabled

## Appointments

### appointments
- Scheduled appointments between doctors and patients
- Fields: doctor_id, patient_id, appointment_date, appointment_time, duration_minutes
- Types: in-presenza, online
- Status: scheduled, completed, cancelled, no_show
- RLS enabled

### appointment_requests
- Patient appointment requests requiring approval
- Fields: patient_id, doctor_id, requested_date, requested_time, appointment_type
- Status: pending, approved, rejected
- RLS enabled

## Nutrition

### recipes
- Recipe database for meal planning
- Fields: name, description, category, prep_time, cook_time, servings
- Nutrition: calories_per_serving, protein, carbs, fat, fiber
- Categories: colazione, spuntino, pranzo, merenda, cena
- Ingredients: jsonb array format
- Base recipes and custom recipes per doctor
- RLS enabled

### meal_plans
- Weekly meal plans for patients
- Fields: patient_id, doctor_id, name, start_date, end_date, target_calories_daily
- Active status tracking
- RLS enabled

### meal_plan_items
- Individual meals within a meal plan
- Fields: meal_plan_id, recipe_id, day_of_week (1-7), meal_type, servings
- Links to recipes or custom meal_description
- RLS enabled

## Financial Management

### payments
- Income tracking from patients
- Fields: patient_id, doctor_id, payment_date, amount, method, status
- Methods: cash, bank_transfer, paypal, stripe
- Status: paid, pending, overdue
- RLS enabled

### expenses
- Business expenses tracking
- Fields: doctor_id, expense_date, amount, category, description, frequency
- Categories: fixed_cost, variable_cost
- Frequency: one_time, monthly, annual
- RLS enabled

### financial_settings
- Doctor-specific financial configuration
- Fields: doctor_id, safety_margin_percentage, working_days_per_month, vacation_days_per_year
- Defaults: 20% margin, 22 working days, 0 vacation days
- RLS enabled

## Subscription System

### subscription_plans
- Available subscription tiers
- Fields: name, description, price_euros, duration_days, features (jsonb)
- Active status and sort_order
- RLS enabled

### content_sections
- Available content modules
- Fields: name, description, section_key, sort_order
- Active status tracking
- 7 sections pre-configured

### subscription_plan_content
- Maps content sections to subscription plans
- Many-to-many relationship
- 10 mappings configured

### patient_subscriptions
- Active patient subscriptions
- Fields: patient_id, subscription_plan_id, doctor_id, status, start_date, end_date
- Status: active, inactive, expired, cancelled
- Payment method tracking and payment_id link
- Doctor activation flag
- RLS enabled

## Communication

### messages
- Message system between doctors and patients
- Fields: thread_id, patient_id, doctor_id, sender_role, title, content, category, status
- Categories: general, diet, appointment, urgent, other
- Status: unread, read, replied
- RLS enabled

### whatsapp_templates
- Pre-configured WhatsApp message templates
- Fields: doctor_id, template_type, message_text
- Types: appointment_reminder, meal_plan, measurements_request
- RLS enabled

## Documents

### patient_documents
- Document storage and sharing
- Fields: patient_id, uploader_role, categoria, titolo, file_url, file_name, file_size, mime_type
- Visibility control: visible_to_patient
- Uploader roles: patient, nutritionist
- RLS enabled

## Settings

### doctor_settings
- Doctor profile and business settings
- Fields: doctor_id, first_name, last_name, email, whatsapp_business_phone, iban
- Working hours: jsonb with daily schedule
- Closure days and vacation dates arrays
- RLS enabled

### partners
- Referral partners (gyms, pharmacies, beauty centers)
- Fields: doctor_id, name, partner_type, phone, email, address
- Agreement tracking: agreement_type (fixed/percentage), agreement_value, monthly_cost
- Active status and start_date
- RLS enabled

## Row Level Security (RLS)

All tables have RLS enabled with appropriate policies:
- Doctors can only access their own data and their patients' data
- Patients can only access their own data when approved
- Subscription-based content requires active subscription
- Public access for patient_requests table

## Setup Instructions

1. Copy your Supabase project URL and anon key from https://app.supabase.com
2. Update the `.env` file:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
3. Restart the development server

## Database Status

- Total Tables: 24
- Migrations Applied: 22
- All tables have RLS enabled
- Comprehensive foreign key relationships
- Proper indexes for performance
- Validation constraints on all data
