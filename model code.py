import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.ensemble import RandomForestClassifier
import numpy as np
import pickle
import os

# Load dataset
dataset = pd.read_csv("C:\\Users\\dines\\OneDrive\\Desktop\\Training.csv")

# Feature and target separation
X = dataset.drop('prognosis', axis=1)
y = dataset['prognosis']

# Encoding the target column
le = LabelEncoder()
le.fit(y)
Y = le.transform(y)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.3, random_state=20)

# Model definition
models = {
    'RandomForest': RandomForestClassifier(n_estimators=100, random_state=20),
}

for model_name, model in models.items():
    # Train the model
    model.fit(X_train, y_train)

    # Ensure X_test is a pandas DataFrame (retain column names)
    X_test_df = X_test.copy()

    # Test the model
    predictions = model.predict(X_test_df)

  
# Define the directory to save the model
model_directory = "C:\\Users\\dines\\OneDrive\\Documents\\Medicine-Recommendation-System\\model"

# Ensure the directory exists
os.makedirs(model_directory, exist_ok=True)

# Save the trained RandomForest model
model_filename = os.path.join(model_directory, 'random_forest_model.pkl')
pickle.dump(model, open(model_filename, 'wb'))

print(f"Model saved to {model_filename}")

