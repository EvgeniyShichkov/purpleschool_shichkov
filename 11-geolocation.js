const locationContainer = document.getElementById("location-container");

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((success, error) => {
      const { latitude, longitude } = success.coords;
      try {
        resolve({ latitude, longitude });
      } catch {
        reject(new Error(error));
      }
    });
  });
};

const renderSuccess = (position) => {
  const { latitude, longitude } = position;
  return `
  <h3>Ваша Геопозиция</h3>
  <div id='coordinates' style='display: flex; flex-direction: column';>
    <span>latitude: ${latitude ?? "не определено"}</span>
    <span>longitude: ${longitude ?? "не определено"}</span>
  </div>
`;
};

const renderError = (error) => {
  return `
    <h3>ошибка: ${error.message || "Неизвестная ошибка"}</h3>
  `;
};

getCurrentLocation()
  .then((position) => {
    if (!locationContainer) return;
    locationContainer.innerHTML = renderSuccess(position);
  })
  .catch((err) => {
    if (!locationContainer) return;
    locationContainer.innerHTML = renderError(err);
  });
