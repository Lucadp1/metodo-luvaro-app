# Supabase Setup Guide

## Database Status

Your Supabase database is already fully configured and ready to use.

### What's Already Set Up

- **24 tables** with complete schema
- **22 migrations** successfully applied
- **Row Level Security (RLS)** enabled on all tables
- **Authentication** system configured
- **Foreign key relationships** established
- **Validation constraints** in place

### Tables Include

1. **Authentication & Users**: user_profiles, doctors, patients, patient_requests
2. **Health Data**: measurements, metabolism_records
3. **Appointments**: appointments, appointment_requests
4. **Nutrition**: recipes, meal_plans, meal_plan_items
5. **Financial**: payments, expenses, financial_settings
6. **Subscriptions**: subscription_plans, patient_subscriptions, content_sections
7. **Communication**: messages, whatsapp_templates
8. **Documents**: patient_documents
9. **Settings**: doctor_settings, partners

## Getting Your Credentials

To connect your application to Supabase, you need two values:

### Step 1: Access Your Supabase Dashboard

1. Go to https://app.supabase.com
2. Sign in to your account
3. Select your project

### Step 2: Get Your API Keys

1. In your project dashboard, click on the "Settings" icon in the left sidebar (gear icon)
2. Click on "API" under Project Settings
3. You'll see two important values:

   **Project URL**
   ```
   https://your-project-id.supabase.co
   ```

   **anon/public key** (under "Project API keys")
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBh...
   ```

### Step 3: Update Your .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBh...
```

**Important:**
- Use the **anon key** (NOT the service_role key)
- The anon key is safe to use in client-side code
- Never commit your actual keys to version control

### Step 4: Restart Your Development Server

After updating the .env file:

```bash
npm run dev
```

## Verifying Your Setup

### Test Database Connection

1. Navigate to the login page
2. Try to sign in or register
3. If successful, you're connected!

### Check the Browser Console

Open your browser's developer tools (F12) and check for:
- No Supabase connection errors
- Successful authentication attempts

### Common Issues

**"Supabase config missing" error**
- Make sure your .env file has both values filled in
- Restart the dev server after updating .env

**Authentication fails**
- Verify the anon key is correct (it should be a long JWT token)
- Check that the URL doesn't have trailing slashes

**Database queries fail**
- Ensure RLS policies are properly configured (they already are)
- Verify the user is authenticated

## Database Schema Documentation

See `DATABASE_SCHEMA.md` for detailed information about:
- All 24 tables and their fields
- Relationships between tables
- RLS policies
- Data validation rules
- Subscription system details

## Auth Configuration

The authentication system is configured with:
- Email/password authentication
- Password reset via email link
- Automatic session management
- Token refresh on expiry
- Session detection from URL (for email links)

### Password Reset Flow

1. User requests password reset at `/reset-password`
2. Supabase sends email with magic link
3. User clicks link → redirected to `/update-password`
4. App validates token and allows password change
5. User redirected to login page

## Next Steps

1. **Get your Supabase credentials** from the dashboard
2. **Update .env file** with actual values
3. **Restart dev server**: `npm run dev`
4. **Test the application** by registering/logging in
5. **Review database schema** in `DATABASE_SCHEMA.md`

## Support

If you encounter issues:
- Check Supabase dashboard logs
- Review browser console for errors
- Verify .env values are correct
- Ensure dev server was restarted after .env changes
