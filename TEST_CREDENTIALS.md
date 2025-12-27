# Test Credentials

## Test Nutritionist Account

A test doctor account has been created for testing patient registration and the full application workflow.

### Login Credentials

**Email:** luvaroalexandra2@gmail.com
**Password:** Sigaret1

### Account Details

- **Full Name:** Alexandra Luvaro
- **Role:** DOCTOR_ADMIN
- **Auth User ID:** c0ab3b38-cbbb-4655-82c4-786f7f6bec02
- **Doctor ID:** 1409ca53-5bad-4b36-94fc-c706742b5bf3
- **Email Confirmed:** Yes

### Settings Configured

**Doctor Settings:**
- First Name: Alexandra
- Last Name: Luvaro
- Working Hours: Monday-Friday 9:00-18:00
- Weekend: Not working

**Financial Settings:**
- Safety Margin: 20%
- Working Days per Month: 22
- Vacation Days per Year: 0

## How to Test

### 1. Login as Doctor
1. Navigate to the login page
2. Enter the email and password above
3. You should be redirected to the doctor dashboard

### 2. Test Patient Registration
Patients can register in two ways:

**Option A: Request Access (Public)**
1. Go to `/request-access`
2. Fill out the request form
3. Login as doctor to approve the request

**Option B: Doctor Creates Patient**
1. Login as doctor
2. Go to Patients page
3. Click "Add Patient"
4. Fill in patient details
5. Patient will receive registration email

### 3. Available Doctor Features
Once logged in as doctor, you can access:
- Dashboard with overview
- Patients list and management
- Calendar and appointments
- Messages
- Financial control
- Subscription settings
- Partner collaborations
- Access requests approval

## Patient Testing

To test as a patient:
1. Create a patient account (using doctor or request access)
2. Login with patient credentials
3. Patient features require:
   - Approval from doctor
   - Active subscription (for premium features)

## Database Structure

All records are properly linked:
- `auth.users` - Authentication
- `user_profiles` - Links auth to doctor/patient
- `doctors` - Doctor profile and data
- `doctor_settings` - Doctor preferences
- `financial_settings` - Financial configuration

## Next Steps

1. Update your `.env` file with actual Supabase credentials
2. Restart the dev server
3. Navigate to login page
4. Test the doctor login
5. Create test patients
6. Test the complete workflow

## Important Notes

- This is a test account for development only
- The password uses bcrypt encryption
- Email is confirmed automatically
- All related settings tables are populated
- RLS policies are properly configured
