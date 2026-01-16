# EmailJS Setup Guide

## Quick Setup Steps

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service (Gmail)
1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** (or your email provider)
4. Click **Connect Account** and sign in with your Gmail account (`tusharmeena2002@gmail.com`)
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.
```

4. In the **To Email** field, enter: `tusharmeena2002@gmail.com`
5. Copy the **Template ID** (e.g., `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Scroll to **API Keys** section
3. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

### 5. Configure Environment Variables

1. Create a `.env` file in the root of your project (same folder as `package.json`)
2. Add the following lines:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholders with your actual values from steps 2, 3, and 4

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### 6. Restart Your Development Server

After creating/updating the `.env` file:
1. Stop your current dev server (Ctrl+C)
2. Start it again with `npm run dev`

### 7. Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (`tusharmeena2002@gmail.com`)

## Troubleshooting

### Form still shows "Email service not configured"
- Make sure your `.env` file is in the root directory (not in `src/`)
- Restart your dev server after creating/modifying `.env`
- Check that variable names start with `VITE_` (required for Vite)
- Verify there are no spaces around the `=` sign

### "Failed to send message" error
- Check that your EmailJS service is properly connected
- Verify your template has all required variables
- Check your EmailJS account for any quota limits (free tier: 200 emails/month)
- Look at browser console for detailed error messages

### Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/

## Security Note

The `.env` file is already added to `.gitignore` to prevent committing your credentials to version control. Never share your EmailJS credentials publicly.

