# InterView AI: AI-Powered Interview Simulator

InterView AI is a modern web application that helps users practice for job interviews using AI-generated questions and real-time feedback. Built with Next.js, React, and powered by Google's Gemini AI, this application provides a realistic interview experience with webcam integration and speech-to-text capabilities.

Live Demo: https://interview-ai-red.vercel.app/dashboard

## Features

- 🤖 AI-generated interview questions based on job position and description
- 📹 Real-time webcam integration for mock interviews
- 🎤 Speech-to-text functionality for answer recording
- 💬 Immediate AI feedback on interview responses
- 📊 Detailed performance analysis and ratings
- 🔐 Secure authentication with Clerk
- 💾 Data persistence with Neon Serverless Postgres

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**:
  - Database: Neon Serverless Postgres
  - ORM: Drizzle ORM
  - Authentication: Clerk
- **AI Integration**: Google Gemini API
- **Additional Libraries**:
  - react-webcam
  - react-hook-speech-to-text
  - sonner (for notifications)
  - lucide-react (for icons)
  - moment.js (for date handling)

## Setup Instructions

1. Clone the repository

```bash
git clone <repository-url>
cd interview-simulator
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_DRIZZLE_DB_URL=your_neon_database_url
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
```

4. Run the development server

```bash
npm run dev
```

## Application Structure

### Core Components

1. **InterviewPrompt**

   - Handles creation of new interview sessions
   - Collects job position, description, and experience details
   - Generates AI questions using Gemini API

2. **Interview Process**

   - Webcam integration for mock interviews
   - Speech-to-text recording of answers
   - Real-time feedback generation

3. **Feedback System**
   - AI-generated feedback for each answer
   - Rating system for responses
   - Comparison with AI-generated ideal answers

### Database Schema

```javascript
// Mock Interview Table
mockInterview {
  id: serial
  jsonMockResp: text
  jobPos: varchar
  jobDesc: varchar
  jobExp: varchar
  createdBy: varchar
  createdAt: varchar
  mockId: varchar
}

// User Answer Table
userAnswer {
  id: serial
  mockIdRef: varchar
  question: varchar
  aiAns: text
  userAns: text
  feedback: text
  rating: varchar
  userEmail: varchar
  createdAt: varchar
}
```

## Features in Detail

### Interview Creation

- Users input job details
- AI generates relevant interview questions
- Questions are stored with unique interview ID

### Interview Process

1. **Setup Phase**

   - Webcam activation
   - Microphone access
   - Interview preparation instructions

2. **Interview Phase**

   - Question display with text-to-speech option
   - Video recording capability
   - Speech-to-text answer recording

3. **Feedback Phase**
   - AI analysis of responses
   - Detailed feedback generation
   - Performance rating
   - Comparison with ideal answers

### Dashboard

- Overview of all interview sessions
- Access to previous interview recordings
- Feedback history
- Option to continue or review past interviews

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
