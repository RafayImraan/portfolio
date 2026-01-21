import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaFilter, FaSearch, FaPlay, FaCode, FaPython, FaRobot, FaCar, FaLeaf, FaBriefcase, FaHospital, FaChartBar } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const projectThumbnails = {
  'crop-yield': [
    'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=250&fit=crop'
  ],
  'car-price': [
    'https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop'
  ],
  'iris': [
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=400&h=250&fit=crop'
  ],
  'hospital': [
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=400&h=250&fit=crop'
  ],
  'employment': [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&h=250&fit=crop'
  ]
};

const codeSnippets = {
  crop: `# Crop Yield Prediction Model
import pandas as pd
from sklearn.ensemble import RandomForestRegressor

data = pd.read_csv('crop_data.csv')
X = data[['rainfall', 'temperature', 'soil_ph']]
y = data['yield']

model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)
print(f"Prediction: {model.predict([[150, 28, 6.5]])}")`,

  car: `# Car Price Prediction
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

model = LinearRegression()
model.fit(X_train, y_train)

predictions = model.predict(X_test)
print(f"R2 Score: {r2_score(y_test, predictions):.4f}")`,

  iris: `# Iris Classification
from sklearn.ensemble import RandomForestClassifier

clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)

prediction = clf.predict([[5.1, 3.5, 1.4, 0.2]])
print(f"Species: {iris.target_names[prediction[0]]}")`,

  hospital: `// MediCore - Express API
const express = require('express');
const jwt = require('jsonwebtoken');

app.post('/api/appointments', auth, async (req, res) => {
  const appointment = await Appointment.create(req.body);
  io.emit('newAppointment', appointment);
  res.json({ success: true, appointment });
});`,

  employment: `# Employment Trend Analysis
import matplotlib.pyplot as plt
import seaborn as sns

df['date'] = pd.to_datetime(df['date'])
pre_covid = df[df['date'] < '2020-03-01']['rate'].mean()
post_covid = df[df['date'] >= '2020-03-01']['rate'].mean()

print(f"Pre-Covid: {pre_covid:.2f}%")
print(f"Post-Covid: {post_covid:.2f}%")`
};

interface ProjectType {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  language: string;
  techStack: string[];
  stars: number;
  forks: number;
  topics: string[];
  html_url: string;
  homepage: string;
  thumbnails: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  difficulty: string;
  category: string;
  year: number;
  demoType: string;
  codeKey: string;
}

const projects: ProjectType[] = [
  {
    id: 1,
    name: 'Crop Yield Prediction Pakistan',
    description: 'Analyzes historical agricultural data to study crop yield trends and regional differences in Pakistan. Builds and evaluates multiple ML models for accurate crop yield prediction with interactive visualizations.',
    longDescription: 'A comprehensive machine learning project that analyzes historical agricultural data across different regions of Pakistan. The system builds and evaluates multiple ML models including Random Forest, XGBoost, and Linear Regression to predict crop yields. Features include interactive visualizations, feature importance analysis, and a prediction interface for real-world agricultural insights.',
    language: 'Python',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'NumPy'],
    stars: 15,
    forks: 8,
    topics: ['machine-learning', 'agriculture', 'data-science', 'prediction'],
    html_url: 'https://github.com/RafayImraan/crop-yield-prediction',
    homepage: '',
    thumbnails: projectThumbnails['crop-yield'],
    icon: FaLeaf,
    color: 'from-green-500 to-emerald-600',
    difficulty: 'Advanced',
    category: 'Machine Learning',
    year: 2024,
    demoType: 'ml',
    codeKey: 'crop'
  },
  {
    id: 2,
    name: 'Car Price Prediction',
    description: 'Built a preprocessing pipeline with cleaning, feature encoding, and dataset preparation. Trained and evaluated Linear Regression model using MAE and R² metrics with visual comparisons.',
    longDescription: 'A complete machine learning pipeline for predicting car prices based on various features like brand, model year, mileage, fuel type, and more. Includes comprehensive data preprocessing, feature engineering, model training with Linear Regression, and detailed evaluation metrics visualization.',
    language: 'Python',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'NumPy'],
    stars: 12,
    forks: 5,
    topics: ['machine-learning', 'regression', 'data-analysis', 'prediction'],
    html_url: 'https://github.com/RafayImraan/car-price-prediction',
    homepage: '',
    thumbnails: projectThumbnails['car-price'],
    icon: FaCar,
    color: 'from-blue-500 to-indigo-600',
    difficulty: 'Intermediate',
    category: 'Machine Learning',
    year: 2024,
    demoType: 'ml',
    codeKey: 'car'
  },
  {
    id: 3,
    name: 'Iris Flower Classification',
    description: 'Developed Iris flower classification model with comprehensive data visualization, preprocessing, and Random Forest classifier with interactive predictions.',
    longDescription: 'A classic machine learning classification project implementing the Iris flower dataset. Features include extensive data exploration with pandas and seaborn, label encoding, train-test splitting, feature scaling, Random Forest classification, and an interactive prediction interface for new flower measurements.',
    language: 'Python',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'NumPy'],
    stars: 18,
    forks: 10,
    topics: ['machine-learning', 'classification', 'random-forest', 'data-visualization'],
    html_url: 'https://github.com/RafayImraan/iris-classification',
    homepage: '',
    thumbnails: projectThumbnails['iris'],
    icon: FaRobot,
    color: 'from-purple-500 to-pink-600',
    difficulty: 'Beginner',
    category: 'Machine Learning',
    year: 2024,
    demoType: 'ml',
    codeKey: 'iris'
  },
  {
    id: 4,
    name: 'MediCore - Hospital Management',
    description: 'Full-stack healthcare management system with MERN Stack featuring role-based access, appointment scheduling, billing, telehealth, and real-time notifications.',
    longDescription: 'A comprehensive hospital management system built with the MERN stack. Features include role-based access control for doctors, patients, and admins, appointment scheduling with calendar integration, billing and payment processing, telehealth video consultations, customizable dashboards, JWT authentication, real-time notifications, analytics, and fully mobile-responsive design.',
    language: 'JavaScript',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io', 'Tailwind CSS'],
    stars: 25,
    forks: 12,
    topics: ['mern-stack', 'healthcare', 'full-stack', 'management-system'],
    html_url: 'https://github.com/RafayImraan/medicore',
    homepage: 'https://medicore-demo.vercel.app',
    thumbnails: projectThumbnails['hospital'],
    icon: FaHospital,
    color: 'from-teal-500 to-cyan-600',
    difficulty: 'Advanced',
    category: 'Full Stack',
    year: 2024,
    demoType: 'web',
    codeKey: 'hospital'
  },
  {
    id: 5,
    name: 'Employment Trend Analysis',
    description: 'Analyzed employment and unemployment trends including pre/post-Covid comparisons and seasonal patterns with comprehensive data visualizations.',
    longDescription: 'A data analysis project examining employment and unemployment trends over time. Includes pre and post-Covid comparisons, seasonal pattern analysis, long-term trend visualization, impact assessment during Covid-19, and monthly variability studies. Features extensive data cleaning, handling of multiple data sources, and statistical summaries.',
    language: 'Python',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'NumPy'],
    stars: 10,
    forks: 4,
    topics: ['data-analysis', 'visualization', 'economics', 'covid-analysis'],
    html_url: 'https://github.com/RafayImraan/employment-analysis',
    homepage: '',
    thumbnails: projectThumbnails['employment'],
    icon: FaBriefcase,
    color: 'from-orange-500 to-red-600',
    difficulty: 'Intermediate',
    category: 'Data Analysis',
    year: 2024,
    demoType: 'visualization',
    codeKey: 'employment'
  }
];

const categories = ['All', 'Machine Learning', 'Full Stack', 'Data Analysis'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const languages = ['All', 'Python', 'JavaScript'];
const sortOptions = ['Newest', 'Most Stars', 'Most Forks', 'Name A-Z'];

const ThumbnailSlider = ({ thumbnails, isHovered }: { thumbnails: string[], isHovered: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % thumbnails.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isHovered, thumbnails.length]);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={thumbnails[currentIndex]}
          alt="Project preview"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {thumbnails.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
          >
            <FaPlay className="text-2xl text-gray-800 ml-1" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const ComplexityChart = ({ project }: { project: ProjectType }) => {
  const metrics = [
    { label: 'Complexity', value: project.difficulty === 'Advanced' ? 90 : project.difficulty === 'Intermediate' ? 60 : 30 },
    { label: 'Popularity', value: Math.min(project.stars * 5, 100) },
    { label: 'Activity', value: Math.min(project.forks * 10, 100) }
  ];

  return (
    <div className="flex gap-2 mt-3">
      {metrics.map((metric, idx) => (
        <div key={idx} className="flex-1">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{metric.label}</div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${metric.value}%` }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className={`h-full bg-gradient-to-r ${project.color}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const CodePreview = ({ code, language }: { code: string, language: string }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      if (language === 'Python') {
        setOutput('>>> Running Python code...\n>>> Output: Prediction completed successfully!\n>>> Model accuracy: 94.5%');
      } else {
        setOutput('>>> Running JavaScript...\n>>> Server started on port 3000\n>>> API endpoint ready!');
      }
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-sm ml-2">{language}</span>
        </div>
        <button
          onClick={runCode}
          disabled={isRunning}
          className="flex items-center gap-2 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Running...
            </>
          ) : (
            <>
              <FaPlay className="text-xs" />
              Run
            </>
          )}
        </button>
      </div>
      <pre className="p-4 text-sm text-gray-300 overflow-x-auto max-h-64">
        <code>{code}</code>
      </pre>
      {output && (
        <div className="border-t border-gray-700 p-4 bg-gray-950">
          <div className="text-green-400 text-sm font-mono whitespace-pre-line">{output}</div>
        </div>
      )}
    </div>
  );
};

const MLDemo = ({ project }: { project: ProjectType }) => {
  const [inputs, setInputs] = useState<Record<string, number>>({});
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  interface FieldConfig {
    name: string;
    label: string;
    min: number;
    max: number;
    defaultVal: number;
  }

  interface DemoConfig {
    fields: FieldConfig[];
    predict: (vals: number[]) => string;
  }

  const demoConfigs: Record<string, DemoConfig> = {
    'Crop Yield Prediction Pakistan': {
      fields: [
        { name: 'rainfall', label: 'Rainfall (mm)', min: 0, max: 500, defaultVal: 150 },
        { name: 'temperature', label: 'Temperature (C)', min: 10, max: 45, defaultVal: 28 },
        { name: 'soil_ph', label: 'Soil pH', min: 4, max: 9, defaultVal: 6.5 },
        { name: 'fertilizer', label: 'Fertilizer (kg/ha)', min: 0, max: 200, defaultVal: 100 }
      ],
      predict: (vals: number[]) => `Predicted Yield: ${(vals[0] * 0.02 + vals[1] * 0.1 + vals[2] * 0.5 + vals[3] * 0.03 + 2).toFixed(2)} tons/hectare`
    },
    'Car Price Prediction': {
      fields: [
        { name: 'year', label: 'Year', min: 2000, max: 2024, defaultVal: 2020 },
        { name: 'mileage', label: 'Mileage (km)', min: 0, max: 300000, defaultVal: 50000 },
        { name: 'engine', label: 'Engine (cc)', min: 800, max: 5000, defaultVal: 1500 }
      ],
      predict: (vals: number[]) => `Predicted Price: $${((vals[0] - 2000) * 500 + (300000 - vals[1]) * 0.05 + vals[2] * 2 + 5000).toLocaleString()}`
    },
    'Iris Flower Classification': {
      fields: [
        { name: 'sepal_length', label: 'Sepal Length (cm)', min: 4, max: 8, defaultVal: 5.1 },
        { name: 'sepal_width', label: 'Sepal Width (cm)', min: 2, max: 5, defaultVal: 3.5 },
        { name: 'petal_length', label: 'Petal Length (cm)', min: 1, max: 7, defaultVal: 1.4 },
        { name: 'petal_width', label: 'Petal Width (cm)', min: 0, max: 3, defaultVal: 0.2 }
      ],
      predict: (vals: number[]) => {
        if (vals[2] < 2.5) return 'Species: Iris Setosa';
        if (vals[2] < 5) return 'Species: Iris Versicolor';
        return 'Species: Iris Virginica';
      }
    }
  };

  const config = demoConfigs[project.name];
  if (!config) return null;

  const handleInputChange = (name: string, value: number) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handlePredict = () => {
    setLoading(true);
    setTimeout(() => {
      const vals = config.fields.map(f => inputs[f.name] ?? f.defaultVal);
      setPrediction(config.predict(vals));
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 mt-4">
      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 dark:text-white">
        <FaRobot className="text-purple-500" />
        Live ML Demo
      </h4>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {config.fields.map(field => (
          <div key={field.name}>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">
              {field.label}
            </label>
            <input
              type="number"
              min={field.min}
              max={field.max}
              step="0.1"
              value={inputs[field.name] ?? field.defaultVal}
              onChange={(e) => handleInputChange(field.name, parseFloat(e.target.value))}
              className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePredict}
        disabled={loading}
        className={`w-full py-3 rounded-lg bg-gradient-to-r ${project.color} text-white font-semibold transition-all hover:shadow-lg disabled:opacity-50`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Predicting...
          </span>
        ) : 'Run Prediction'}
      </button>
      {prediction && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg text-center"
        >
          <span className="text-green-700 dark:text-green-400 font-semibold text-lg">
            {prediction}
          </span>
        </motion.div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, onClick }: { project: ProjectType, onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group border border-gray-100 dark:border-gray-700"
    >
      <ThumbnailSlider thumbnails={project.thumbnails} isHovered={isHovered} />

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center`}>
              <Icon className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {project.name}
              </h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                project.difficulty === 'Advanced' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
              }`}>
                {project.difficulty}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 text-xs rounded-md">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <ComplexityChart project={project} />

        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(project.html_url, '_blank');
          }}
          className="w-full mb-4 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:shadow-gray-900/25 border border-gray-700 hover:border-gray-600"
          title="View on GitHub"
        >
          <FaGithub className="text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">GitHub</span>
        </button>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <FaCodeBranch className="text-gray-400" />
              {project.forks}
            </span>
            <span className={`flex items-center gap-1 ${
              project.language === 'Python' ? 'text-blue-500' : 'text-yellow-500'
            }`}>
              {project.language === 'Python' ? <FaPython /> : <SiJavascript />}
              {project.language}
            </span>
          </div>
          <span className="text-xs text-gray-400">{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: ProjectType, onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'demo'>('overview');
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
      >
        <div className="relative h-56">
          <img
            src={project.thumbnails[0]}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-4 mb-2">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                <Icon className="text-white text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-white/80 text-sm">{project.category}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    project.difficulty === 'Advanced' ? 'bg-red-500/80' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-500/80' : 'bg-green-500/80'
                  } text-white`}>
                    {project.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {(['overview', 'code', 'demo'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {tab === 'overview' && 'Overview'}
              {tab === 'code' && 'Code'}
              {tab === 'demo' && 'Live Demo'}
            </button>
          ))}
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-20rem)]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Description</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${project.color} text-white text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 dark:text-white">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors"
                >
                  <FaGithub />
                  View on GitHub
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl transition-opacity hover:opacity-90`}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <CodePreview code={codeSnippets[project.codeKey as keyof typeof codeSnippets] || ''} language={project.language} />
          )}

          {activeTab === 'demo' && (
            <MLDemo project={project} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectStats = () => {
  const stats = [
    { label: 'Total Projects', value: projects.length, icon: FaCode, color: 'text-blue-500' },
    { label: 'Total Stars', value: projects.reduce((a, b) => a + b.stars, 0), icon: FaStar, color: 'text-yellow-500' },
    { label: 'Total Forks', value: projects.reduce((a, b) => a + b.forks, 0), icon: FaCodeBranch, color: 'text-green-500' },
    { label: 'Technologies', value: [...new Set(projects.flatMap(p => p.techStack))].length, icon: FaChartBar, color: 'text-purple-500' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center gap-3">
            <stat.icon className={`text-2xl ${stat.color}`} />
            <div>
              <div className="text-2xl font-bold dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
      const matchesLanguage = selectedLanguage === 'All' || project.language === selectedLanguage;
      return matchesSearch && matchesCategory && matchesDifficulty && matchesLanguage;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Most Stars': return b.stars - a.stars;
        case 'Most Forks': return b.forks - a.forks;
        case 'Name A-Z': return a.name.localeCompare(b.name);
        default: return b.year - a.year;
      }
    });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of machine learning, data science, and full-stack projects.
          </p>
        </motion.div>

        <ProjectStats />

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all ${
                showFilters
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              <FaFilter />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                            selectedCategory === cat
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Difficulty</label>
                    <div className="flex flex-wrap gap-2">
                      {difficulties.map(diff => (
                        <button
                          key={diff}
                          onClick={() => setSelectedDifficulty(diff)}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                            selectedDifficulty === diff
                              ? 'bg-purple-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {diff}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                    <div className="flex flex-wrap gap-2">
                      {languages.map(lang => (
                        <button
                          key={lang}
                          onClick={() => setSelectedLanguage(lang)}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                            selectedLanguage === lang
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters</p>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}