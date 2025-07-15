# Martyr Villages of WWII – Italy (Leaflet Interactive Map)

This project visualizes the martyr villages of World War II in Italy using [Leaflet.js](https://leafletjs.com/). Each site is marked with a proportional circle scaled by the number of civilian victims and categorized by severity. Clicking on the central point reveals detailed information, including historical images when available.

## Features

- 🗺️ Interactive map using Leaflet.js
- 📍 Proportional circles based on the number of victims
- 🔴 Red = Major massacre sites (e.g., Marzabotto, Sant’Anna di Stazzema)
- 🔵 Blue = Other martyr villages
- ⚪ Central clickable marker with popup info
- 📸 Historical photo included for Sant’Anna di Stazzema
- 🧭 Layer switcher between OpenStreetMap and CartoDB Positron
- 🧾 Legend for user reference
- ✅ Fully offline: all data is embedded in the JavaScript (no external fetch needed)

## Getting Started

Just open `index.html` in your browser. No server required.

## File Structure

```
.
├── index.html          # Main HTML file
├── style.css           # Map and legend styling
├── script.js           # Embedded map logic and data
├── LICENSE             # MIT License
```

## Author

Giovanni Pietro Vitali – 2025

## License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
