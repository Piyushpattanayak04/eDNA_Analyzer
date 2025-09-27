# PhyloDive - AI-Powered Taxonomic Classification Platform

## 🧬 Overview

PhyloDive is a revolutionary deep learning platform designed to transform environmental DNA (eDNA) analysis by accurately classifying known species and discovering novel organisms hidden in marine ecosystems. This website showcases the platform's capabilities, technical architecture, and innovative approach to marine biodiversity discovery.

## 🌊 Features

### Website Features
- **Marine-themed Design**: Deep ocean color palette with animated wave effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices  
- **Interactive Elements**: Smooth animations and hover effects throughout
- **Modern UI/UX**: Clean, professional design with intuitive navigation
- **Performance Optimized**: Fast loading with debounced scroll events

### Platform Highlights
- **Multi-stage AI Architecture**: Supervised learning + Anomaly detection + Clustering
- **Novel Organism Discovery**: Goes beyond traditional reference-based classification
- **High-fidelity Preprocessing**: QIIME 2 & DADA2 integration for ASV generation
- **Interactive Visualizations**: Phylogenetic trees and confidence scoring
- **Discovery Workbench**: Dedicated interface for exploring novel taxa
- **API Integration**: RESTful API for workflow integration

## 🛠️ Technical Architecture

### Core Technologies
- **Bioinformatics**: QIIME 2, DADA2, Nextflow, BioPython
- **AI/ML**: PyTorch, Transformers, Scikit-learn, NumPy
- **Data Sources**: NCBI, SILVA, BOLD, GTDB
- **Visualization**: iTOL, Plotly, D3.js, Matplotlib

### AI Pipeline Stages
1. **Data Preprocessing**: Quality control, error correction, ASV inference
2. **Sequence Encoding**: K-mer embeddings with contextual awareness
3. **AI Classification**: Multi-task Transformer for hierarchical taxonomy
4. **Novelty Detection**: Autoencoder-based anomaly detection

## 📁 File Structure

```
eDNA_Analyzer/
├── index.html          # Main website structure
├── styles.css          # Marine-themed CSS styling
├── script.js           # Interactive JavaScript features
├── README.md           # Project documentation
└── eDNA_Analyzer.txt   # Original project specification
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for external fonts and icons

### Installation
1. Download or clone the project files
2. Ensure all files are in the same directory
3. Open `index.html` in your web browser

### Usage
- Navigate through sections using the top navigation menu
- Scroll through the page to see animated content
- Interact with pipeline steps and tech stack items
- Use the contact form to get in touch
- Click the scroll-to-top button to return to the hero section

## 🎨 Design System

### Color Palette
- **Deep Ocean**: `#0a1428` - Primary dark color
- **Ocean Blue**: `#1e3a8a` - Secondary blue
- **Teal Primary**: `#0891b2` - Main accent color
- **Teal Secondary**: `#06b6d4` - Light accent
- **Aqua Light**: `#67e8f9` - Highlight color
- **Foam White**: `#f0f9ff` - Background color

### Typography
- **Font Family**: Inter (from Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations
- **Wave Animation**: Animated SVG wave in hero section
- **DNA Helix**: Rotating 3D helix animation
- **Scroll Animations**: Elements animate into view on scroll
- **Particle Effects**: Floating particles in hero background

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adapted grid)
- **Mobile**: <768px (single column, hamburger menu)

## 🔧 Customization

### Adding New Sections
1. Add new `<section>` element in `index.html`
2. Include corresponding styles in `styles.css`
3. Add navigation link if needed
4. Update JavaScript for any interactive features

### Modifying Colors
Update the CSS custom properties in `:root` section of `styles.css`:

```css
:root {
    --deep-ocean: #0a1428;
    --teal-primary: #0891b2;
    /* Add your custom colors here */
}
```

### Customizing Animations
Modify animation keyframes and timing in `styles.css`:

```css
@keyframes wave {
    0%, 100% { transform: translateX(0px) }
    50% { transform: translateX(-50px) }
}
```

## 🌐 Browser Support

- Chrome/Chromium 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📈 Performance

- **Optimized Images**: SVG icons and CSS animations
- **Debounced Events**: Scroll events optimized for performance
- **Lazy Loading**: Content animates in as users scroll
- **Minimal Dependencies**: Only essential external resources

## 🧪 Scientific Background

PhyloDive addresses critical challenges in marine biodiversity research:

### Current Problems
- **Database Limitations**: Mislabeled entries, taxonomic conflicts, coverage gaps
- **Novel Species Detection**: Traditional methods fail to identify unknown organisms
- **Technical Barriers**: Simple models can't handle complex genomic patterns

### Our Solution
- **Hybrid AI Engine**: Three-stage architecture for comprehensive analysis
- **Advanced Encoding**: K-mer embeddings for rich sequence representation
- **Multi-task Learning**: Simultaneous taxonomy and function prediction
- **Anomaly Detection**: Identifies sequences deviating from known patterns

## 🤝 Contributing

We welcome contributions to improve the PhyloDive website and platform:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers
5. Submit a pull request

## 📞 Contact

- **Email**: contact@phylodive.org
- **GitHub**: github.com/phylodive
- **Website**: www.phylodive.org

## 📄 License

This project is part of ongoing research in AI-powered biodiversity discovery. For licensing information, please contact the development team.

## 🎯 Future Development

### Planned Features
- **Interactive Demo**: Live platform demonstration
- **Documentation Portal**: Comprehensive API documentation
- **Tutorial System**: Step-by-step usage guides
- **Community Forum**: User discussion and support

### Technical Roadmap
- **Federated Learning**: Privacy-preserving collaborative training
- **Long-read Support**: Integration with PacBio and Oxford Nanopore
- **Real-time Processing**: Stream processing capabilities
- **Cloud Deployment**: Scalable cloud infrastructure

---

*Built with 💙 for marine biodiversity discovery*

**PhyloDive** - Exploring the depths of life through AI and genomics
