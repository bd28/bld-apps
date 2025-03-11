#!/bin/bash

# Create the projects directory if it doesn't exist
mkdir -p public/images/projects

# Download placeholder images
curl -o public/images/projects/ecommerce.jpg https://placehold.co/600x400/3B82F6/FFFFFF/png?text=E-commerce+Platform
curl -o public/images/projects/task-app.jpg https://placehold.co/600x400/10B981/FFFFFF/png?text=Task+Management+App
curl -o public/images/projects/healthcare.jpg https://placehold.co/600x400/6366F1/FFFFFF/png?text=Healthcare+Portal
curl -o public/images/projects/real-estate.jpg https://placehold.co/600x400/F59E0B/FFFFFF/png?text=Real+Estate+Platform
curl -o public/images/projects/fitness-app.jpg https://placehold.co/600x400/EC4899/FFFFFF/png?text=Fitness+App
curl -o public/images/projects/analytics.jpg https://placehold.co/600x400/8B5CF6/FFFFFF/png?text=Analytics+Dashboard

echo "Images downloaded successfully!" 