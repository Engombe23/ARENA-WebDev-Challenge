# ARENA Web Development Challenge

<h2>Description</h2>

<p>I spent the last 2 weeks of 2024 on a challenge set by Valyfy on developing a landing page for a sports start-up called ARENA that handles sports sessions for users to book onto.</p>

<p>The web application is a full stack application that was build with Next.js as the frontend and Django as the backend, on a PostgreSQL database.</p>

<p>The user fills in a form with their details and the sports sessions he/she are interested in and Stripe was used for the person to book their favourite session.</p>

<h2>Tools Used</h2>

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" width="80" height="80"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" width="80" height="80"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" width="80" height="80" />
                
</p>

<h2>Setup</h2>

<h3>Prerequesities</h3>

<li>Node.js and npm (or yarn)</li>
<li>Git</li>
<li>Python</li>
<li>PostgreSQL</li>

<h3>Installation</h3>

<p>Clone the repository</p>

```bash
git clone https://github.com/Engombe23/ARENA-WebDev-Challenge.git

```
<h4>Frontend setup</h4>

<p>Navigate into the project folder</p>

```bash
cd ARENA-WebDev-Challenge/frontend
```

<p>Install dependencies</p>

```bash
npm install
```

<p>Start the development server</p>

```bash
npm run dev
```

<h5>Usage</h5>

<p>Open your browser and go to http://localhost:3000 to view the application.</p>

<h4>Backend setup</h4>

<p>Launch a new terminal, DO NOT close the terminal for the frontend</p>

<p>Navigate to the backend directory</p>

```bash
cd ARENA-WebDev-Challenge/django-backend
```

<p>Create a virtual environment (optional but recommended)</p>

```bash
python -m venv venv
source venv/bin/activate # Linux
venv/Scripts/activate # Windows
```

<p>Create a requirements.txt file and go into it </p>

```bash
touch requirements.txt
nano requirements.txt
```

<p>Add contents to requirements.txt file and save it</p>

```bash
Django>=4.0,<5.0
psycopg2>=2.9,<3.0
djangorestframework>=3.12,<4.0
python-dotenv>=0.19,<1.0
```

<p>Install the dependencies</p>

```bash
pip install -r requirements.txt
```

<h5>Set up environment variables</h5>

<p>Create a .env file and add necessary environment variables such as database URL, API keys, etc.</p>

<h5>Set up PostgreSQL</h5>

<li>Install PostgreSQL</li>
<li>Create a database in PostgreSQL</li>

```bash
CREATE DATABASE arena_db; # Example database name
```
<p>Configure PostgreSQL settings in backend/settings.py</p>

```bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'arena_db',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

<p>Apply migrations</p>

```bash
python manage.py migrate
```

<p>Start the development server</p>

```bash
python manage.py runserver
```

<h5>Usage</h5>

<p>Test that the backend server works at 127.0.0.1:8000</p>

<h2>Demo</h2>

<p>Here is the demo of the project: <a href="https://youtu.be/nFZ7F7Rxy44">Arena Demo</a></p>
