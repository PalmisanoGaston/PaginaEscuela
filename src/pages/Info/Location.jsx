import React from "react";

export default function Location() {
    return (
        <div>
            <h2>Localización</h2>

            <div className="card">
                <p><strong>Dirección:</strong> Virgilio 1980, C1408 Ciudad Autónoma de Buenos Aires</p>
                <p><strong>Teléfono:</strong> 4567-2244 / 4341</p>

                <p><strong>Colectivos a menos de 5 cuadras:</strong></p>
                <ul>
                    <li>25</li>
                    <li>53</li>
                    <li>106</li>
                    <li>107</li>
                    <li>108</li>
                    <li>124</li>
                    <li>135</li>
                    <li>181</li>
                </ul>

                <p><strong>Colectivos entre 5 y 10 cuadras:</strong></p>
                <ul>
                    <li>21</li>
                    <li>28</li>
                    <li>80</li>
                    <li>85</li>
                    <li>114</li>
                    <li>117</li>
                    <li>146</li>
                </ul>
            </div>

            <div className="card" style={{ marginTop: "20px" }}>
                <h3>Mapa</h3>
                <iframe
                    title="Ubicación de la escuela"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.045122045073!2d-58.505703!3d-34.629380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9eac0f37c31%3A0x7c617a3f1f9e2db5!2sVirgilio%201980%2C%20C1408%20CABA!5e0!3m2!1ses-419!2sar!4v1695632400000!5m2!1ses-419!2sar"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
