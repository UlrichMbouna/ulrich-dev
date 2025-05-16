// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  saveClientData: (data) => ipcRenderer.send('save-client-data', data),

  // Ajoute cette fonction pour récupérer les données
  getClientData: () => ipcRenderer.invoke('get-client-data'),

  // Facultatif : si tu veux écouter des événements
  onClientData: (callback) => ipcRenderer.on('client-data', (event, data) => callback(data)),
});

