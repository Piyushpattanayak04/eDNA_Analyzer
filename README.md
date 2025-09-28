
# PhyloDive - AI-Powered Taxonomic Classification & Novel Organism Discovery

![PhyloDive Hero](httpshttps://user-images.githubusercontent.com/8343247/150182593-67a8ab2f-1b31-4f88-9b0a-5b9b4b7f8e7a.png)

**PhyloDive is a deep learning platform that revolutionizes environmental DNA (eDNA) analysis. It provides accurate taxonomic classification of known species and uncovers novel organisms from complex marine ecosystems.**

This repository contains the source code for the PhyloDive promotional website, designed to showcase the platform's capabilities, technical architecture, and its potential to transform marine biodiversity research.

---

## 🌊 The Challenge: Unseen Biodiversity

The world's oceans are teeming with life, yet it is estimated that **over 91% of marine species remain undiscovered**. Traditional methods for species identification from eDNA are hampered by several critical issues:

- **Incomplete Databases:** Reference databases like NCBI and SILVA have mislabeled entries, sequencing errors, and significant gaps, particularly for under-represented marine clades.
- **Closed-World Assumption:** Existing classifiers can only assign sequences to known taxa, forcing potentially novel organisms into ill-fitting categories and stifling discovery.
- **Technical Barriers:** Simple alignment-based or k-NN models lack the sophistication to learn robust, hierarchical patterns from noisy and complex genomic data.

These limitations create a bottleneck in our ability to monitor ecosystem health, track invasive species, and discover new life.

## 💡 The Solution: PhyloDive's AI-Powered Pipeline

PhyloDive addresses these challenges with a multi-stage AI architecture that combines supervised learning with anomaly detection to provide a comprehensive analysis of eDNA data.

### Key Architectural Stages

1.  **High-Fidelity Preprocessing (QIIME 2 & DADA2):**
    - Raw sequence data is processed to produce high-resolution Amplicon Sequence Variants (ASVs), minimizing errors and providing a clean input for the AI models.

2.  **Advanced Sequence Encoding (k-mer Embeddings):**
    - DNA sequences are transformed into rich numerical representations using contextual k-mer embeddings, allowing the model to capture complex patterns beyond simple sequence similarity.

3.  **Hierarchical Classification (Multi-Task Transformer):**
    - A powerful Transformer-based model is trained to predict the full taxonomic lineage (kingdom to species) in a multi-task learning framework. This approach respects the hierarchical nature of taxonomy and improves accuracy at all levels.

4.  **Novelty Detection (Autoencoder & Clustering):**
    - An autoencoder network, trained on the embedding space of known organisms, identifies sequences that deviate significantly from the learned distribution. These anomalies, representing potentially novel taxa, are then clustered for further analysis in the **Discovery Workbench**.

---

## ✨ Key Features

The PhyloDive platform is designed for cutting-edge scientific discovery.

- **Interactive Phylogenetic Trees:** Visualize the taxonomic placement of classified sequences with confidence scores and evolutionary context.
- **Model Interpretability:** Attention map visualizations highlight the specific regions of a DNA sequence that were most influential in the model's classification decision.
- **Discovery Workbench:** An interactive interface for exploring novel organism clusters, complete with metadata, sequence alignments, and tools for further investigation.
- **Continuous Learning Loop:** The platform features a "living database" that can be updated with newly validated taxa, allowing for automated model retraining and continuous accuracy improvements.
- **RESTful API:** Seamlessly integrate PhyloDive's analytical power into existing bioinformatics workflows and automated pipelines.

---

## 🛠️ Technology Stack

PhyloDive is built on a foundation of cutting-edge tools and frameworks from the bioinformatics and machine learning domains.

| Category          | Technologies                                       |
| ----------------- | -------------------------------------------------- |
| **Bioinformatics**| `QIIME 2`, `DADA2`, `Nextflow`, `BioPython`          |
| **AI / ML**       | `PyTorch`, `Transformers`, `Scikit-learn`, `NumPy`   |
| **Data & Storage**| `PostgreSQL`, `FAISS`, `S3-compatible Storage`     |
| **Visualization** | `iTOL`, `Plotly`, `D3.js`, `Matplotlib`              |
| **Web Frontend**  | `HTML5`, `CSS3`, `JavaScript (ES6+)`, `Three.js`   |

---

## 🚀 Getting Started

To explore the PhyloDive showcase website:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Piyushpattanayak04/eDNA_Analyzer.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd eDNA_Analyzer
    ```
3.  **Open `index.html` in a modern web browser.** For the best experience, use a local web server to avoid potential issues with file loading:
    ```bash
    # If you have Python 3 installed
    python -m http.server

    # Or use the Live Server extension in VS Code
    ```

---

## 🤝 Contributing

PhyloDive is an ambitious project, and we welcome contributions from the community. Whether you are a biologist, a data scientist, or a software engineer, you can help us push the boundaries of biodiversity discovery.

Please see our `CONTRIBUTING.md` for guidelines on how to get involved.

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

## 📧 Contact

For inquiries, collaborations, or to learn more about the PhyloDive platform, please reach out to us at **contact@phylodive.org**.
