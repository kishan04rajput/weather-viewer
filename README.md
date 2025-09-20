# 🌤️ Weather Viewer

A beautiful and responsive React-based weather application that allows you to view weather data for any location using latitude and longitude coordinates. The app fetches historical weather data from the Open-Meteo API and displays it in an intuitive chart and table format.

## 🚀 Live Demo

**Experience the app live at: [https://weathers-viewers.netlify.app/](https://weathers-viewers.netlify.app/)**

## ✨ Features

- **Interactive Weather Data**: View temperature data (max, min, mean) and apparent temperature
- **Beautiful Charts**: Visualize weather data using Recharts library
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Date Range Selection**: Choose custom date ranges for weather data
- **Input Validation**: Comprehensive validation for coordinates and dates
- **Loading States**: Smooth loading indicators for better user experience
- **Modern UI**: Built with Tailwind CSS for a clean, modern interface

## 🛠️ Technologies Used

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS 3.4.17
- **Charts**: Recharts 3.2.1
- **HTTP Client**: Axios 1.12.2
- **Icons**: React Icons 5.5.0
- **Build Tool**: Create React App
- **API**: Open-Meteo Weather API

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your computer:

### Required Software

1. **Node.js** (version 14.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Choose the LTS (Long Term Support) version
   - This includes npm (Node Package Manager)

2. **Git** (for cloning the repository)
   - Download from [git-scm.com](https://git-scm.com/)
   - Follow the installation guide for your operating system

### How to Check if You Have Them Installed

Open your terminal/command prompt and run these commands:

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

If any of these commands show "command not found" or similar errors, you need to install that software.

## 🚀 Getting Started

### Step 1: Clone the Repository

1. Open your terminal/command prompt
2. Navigate to the folder where you want to store this project
3. Run the following command to clone the repository:

```bash
git clone https://github.com/kishan04rajput/weather-viewer.git
```

**Alternative**: If you don't have Git, you can download the project as a ZIP file:
1. Go to the repository page on GitHub
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location

### Step 2: Navigate to the Project Directory

```bash
cd weather-viewer
```

### Step 3: Install Dependencies

This command will install all the required packages and libraries:

```bash
npm install
```

**What this does:**
- Reads the `package.json` file
- Downloads all dependencies listed in the file
- Creates a `node_modules` folder with all the packages
- This may take a few minutes depending on your internet connection

**Expected output:**
```
npm WARN deprecated some-package@version
added 1234 packages, and audited 1235 packages in 45s

found 0 vulnerabilities
```

### Step 4: Start the Development Server

```bash
npm start
```

**What this does:**
- Starts the React development server
- Compiles your code
- Opens your default web browser
- Navigates to `http://localhost:3000`

**Expected output:**
```
Compiled successfully!

You can now view weather-viewer in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.100:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

### Step 5: Verify Installation

1. Your browser should automatically open to `http://localhost:3000`
2. You should see the Weather Viewer application
3. If the browser doesn't open automatically, manually navigate to `http://localhost:3000`

## 🎯 How to Use the Application

### Getting Weather Data

1. **Enter Coordinates**:
   - **Latitude**: Enter a value between -90 and 90 (e.g., 28.6139 for New Delhi)
   - **Longitude**: Enter a value between -180 and 180 (e.g., 77.2090 for New Delhi)

2. **Select Date Range**:
   - **From Date**: Choose the start date for weather data
   - **To Date**: Choose the end date for weather data
   - Note: You cannot select future dates beyond today

3. **Get Weather Data**:
   - Click the "Get Weather Data" button
   - Wait for the loading animation to complete
   - View the results in chart and table format
   - In development mode using mockResponse
   - In production mode it will make an api call

### Example Coordinates

| City | Latitude | Longitude |
|------|----------|-----------|
| New Delhi, India | 28.6139 | 77.2090 |
| New York, USA | 40.7128 | -74.0060 |
| London, UK | 51.5074 | -0.1278 |
| Tokyo, Japan | 35.6762 | 139.6503 |
| Sydney, Australia | -33.8688 | 151.2093 |

### Understanding the Data

- **Temperature 2m Max/Min/Mean**: Actual air temperature at 2 meters above ground
- **Apparent Temperature Max/Min/Mean**: How the temperature "feels" to humans (considering humidity, wind, etc.)

## 🔧 Available Scripts

In the project directory, you can run:

### `npm start`
- Runs the app in development mode
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- The page reloads when you make changes
- Shows lint errors in the console

### `npm test`
- Launches the test runner in interactive watch mode
- Useful for running unit tests

### `npm run build`
- Builds the app for production
- Creates optimized files in the `build` folder
- Minifies the code for better performance
- Ready for deployment

### `npm run eject`
- **⚠️ Warning**: This is a one-way operation
- Removes the single build dependency
- Gives you full control over configuration
- Not recommended unless you understand the implications

## 🌐 API Information

This application uses the **Open-Meteo API**, which is:
- **Free**: No API key required
- **Reliable**: Provides accurate weather data
- **Comprehensive**: Covers global weather information

**API Endpoint**: `https://api.open-meteo.com/v1/forecast`

**Parameters Used**:
- `latitude`: Geographic latitude
- `longitude`: Geographic longitude
- `daily`: Temperature parameters (max, min, mean, apparent)
- `start_date`: Start date for data
- `end_date`: End date for data
- `timezone`: Timezone (set to Asia/Kolkata)

## 🚀 Deployment

### Deploying to Netlify (Recommended)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Click "Deploy site"

### Other Deployment Options

- **Vercel**: Perfect for React apps
- **GitHub Pages**: Free hosting for static sites
- **Firebase Hosting**: Google's hosting solution
- **AWS S3 + CloudFront**: For advanced users

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. "Command not found" errors
**Problem**: `node`, `npm`, or `git` commands not recognized
**Solution**: 
- Make sure Node.js and Git are properly installed
- Restart your terminal/command prompt
- Add Node.js and Git to your system PATH

#### 2. "Port 3000 is already in use"
**Problem**: Another application is using port 3000
**Solution**:
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or start on a different port
PORT=3001 npm start
```

#### 3. "npm install" fails
**Problem**: Network or permission issues
**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install

# If still failing, try with different registry
npm install --registry https://registry.npmjs.org/
```

#### 4. "Module not found" errors
**Problem**: Missing dependencies
**Solution**:
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

#### 5. App loads but shows blank page
**Problem**: JavaScript errors in browser console
**Solution**:
- Open browser developer tools (F12)
- Check the Console tab for error messages
- Ensure all dependencies are properly installed

### Getting Help

If you're still having issues:

1. **Check the browser console** for error messages
2. **Search for solutions** on Stack Overflow
3. **Check the GitHub issues** page for similar problems
4. **Create a new issue** with detailed error information

## 📁 Project Structure

```
weather-viewer/
├── public/                 # Static files
│   ├── index.html         # Main HTML template
│   ├── favicon.ico        # Website icon
│   └── manifest.json      # PWA manifest
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── ChartComponent.js
│   │   ├── ChartTableBlock.js
│   │   ├── FooterComponent.js
│   │   ├── HeaderComponent.js
│   │   ├── LocationDateBlock.js
│   │   └── TableComponent.js
│   ├── hooks/             # Custom React hooks
│   │   └── useIsSmallScreen.js
│   ├── utils/             # Utility functions
│   │   ├── addDelay.js
│   │   ├── isFutureDate.js
│   │   ├── isValidLatitude.js
│   │   ├── isValidLongitude.js
│   │   └── mockResponse.js
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md             # This file
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Open-Meteo** for providing free weather API
- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Recharts** for beautiful chart components

## 📞 Support

If you have any questions or need help:

- **Create an issue** on GitHub
- **Check the documentation** above
- **Visit the live demo** to see the app in action

---

**Happy coding! 🌟**

*Built with ❤️ using React and modern web technologies.*

Contact details of Kishan Rajput (creator):-
- +91 8347223811
- kishan9rajput@gmail.com