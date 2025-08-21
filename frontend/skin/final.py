import numpy as np
import pandas as pd
import streamlit as st
import matplotlib.pyplot as plt
from PIL import Image, ImageOps
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.tree import DecisionTreeClassifier

# -------------------------------
# Step 1: Sample Dataset
# -------------------------------
data = [
    [2, 1, 5, 1, "Dry"],
    [8, 7, 4, 2, "Oily"],
    [4, 2, 6, 1, "Dry"],
    [9, 8, 5, 2, "Oily"],
    [3, 2, 7, 2, "Dry"],
    [5, 5, 5, 8, "Acne"],
    [6, 6, 6, 9, "Acne"],
    [4, 3, 8, 7, "Acne"],
    [7, 7, 4, 1, "Oily"],
    [2, 1, 3, 0, "Skinny"],
    [1, 0, 2, 0, "Skinny"],
    [3, 2, 2, 0, "Skinny"],
]

df = pd.DataFrame(data, columns=["hydration", "oiliness", "sensitivity", "acne_severity", "skin_type"])

X = df.drop("skin_type", axis=1)
y = df["skin_type"]

le = LabelEncoder()
y_encoded = le.fit_transform(y)

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.3, random_state=42)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# -------------------------------
# Train Decision Tree Model
# -------------------------------
model = DecisionTreeClassifier(random_state=42)
model.fit(X_train_scaled, y_train)

# -------------------------------
# Streamlit UI
# -------------------------------
st.title("🧴 Skin Type Classifier (Decision Tree)")
st.write("Predict your skin type (Dry, Oily, Acne, Skinny) using **two options**:")

mode = st.radio("Choose Input Mode", ["🔢 Enter Values", "📤 Upload Image"])

# -------------------------------
# Option 1: Manual Input (Sliders)
# -------------------------------
if mode == "🔢 Enter Values":
    st.sidebar.header("👉 Input Your Skin Data")
    hydration = st.sidebar.slider("Hydration Level", 0, 10, 5)
    oiliness = st.sidebar.slider("Oiliness Level", 0, 10, 5)
    sensitivity = st.sidebar.slider("Sensitivity Level", 0, 10, 5)
    acne_severity = st.sidebar.slider("Acne Severity", 0, 10, 5)

    if "history" not in st.session_state:
        st.session_state.history = []

    if st.sidebar.button("🔮 Predict My Skin Type"):
        new_data = np.array([[hydration, oiliness, sensitivity, acne_severity]])
        new_data_scaled = scaler.transform(new_data)
        prediction = model.predict(new_data_scaled)
        probabilities = model.predict_proba(new_data_scaled)[0]
        predicted_label = le.inverse_transform(prediction)[0]

        st.success(f"✅ Your predicted skin type is: **{predicted_label}**")

        # Save history
        st.session_state.history.append(
            {"Hydration": hydration, "Oiliness": oiliness, "Sensitivity": sensitivity,
             "Acne": acne_severity, "Predicted": predicted_label}
        )

        # Show probability chart
        fig, ax = plt.subplots()
        ax.bar(le.classes_, probabilities)
        ax.set_ylabel("Probability")
        ax.set_title("Model Confidence")
        st.pyplot(fig)

        # Tips
        tips = {
            "Dry": "💧 Drink plenty of water and use a hydrating moisturizer.",
            "Oily": "✨ Use oil-control products and avoid heavy creams.",
            "Acne": "🧼 Keep skin clean, avoid touching your face often.",
            "Skinny": "🍎 Balanced diet and proper hydration help improve skin health."
        }
        st.info(tips[predicted_label])

    if st.checkbox("📜 Show Prediction History"):
        st.dataframe(pd.DataFrame(st.session_state.history))

# -------------------------------
# Option 2: Upload Image (Dummy)
# -------------------------------
else:
    uploaded_file = st.file_uploader("Upload your face image", type=["jpg", "jpeg", "png"])
    if uploaded_file is not None:
        img = Image.open(uploaded_file)
        st.image(img, caption="Uploaded Face Image", use_column_width=True)

        # Convert to grayscale using Pillow
        gray = ImageOps.grayscale(img)
        gray = np.array(gray)

        # Dummy intensity-based rule
        avg_intensity = np.mean(gray)
        if avg_intensity < 85:
            predicted_label = "Oily"
        elif avg_intensity < 170:
            predicted_label = "Acne"
        else:
            predicted_label = "Dry"

        st.success(f"✅ Your predicted skin type from image is: **{predicted_label}**")

        # Tips
        tips = {
            "Dry": "💧 Drink plenty of water and use a hydrating moisturizer.",
            "Oily": "✨ Use oil-control products and avoid heavy creams.",
            "Acne": "🧼 Keep skin clean, avoid touching your face often.",
            "Skinny": "🍎 Balanced diet and proper hydration help improve skin health."
        }
        if predicted_label in tips:
            st.info(tips[predicted_label])
