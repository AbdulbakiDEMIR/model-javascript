async function loadModel() {
    const button = document.getElementById('loadModelBtn');
    button.disabled = true;
    const start = performance.now();
    var content = document.querySelector('.content');
    content.innerHTML = `<h3>Model Yükleniyor...</h3>`;

    const model = await tf.loadGraphModel('tfjs_model/model.json');
    const end = performance.now();
    console.log('Model yüklendi:', model);
    content.innerHTML = `<h3>Model Yüklendi  (${(end - start).toFixed(2)} ms)</h3>`;
    predict(model);
    // Burada model ile tahminler yapabilirsin
    button.disabled = false;
}

async function predict(model) {
    const userIds = [10, 25, 42];     // input_1
    const productIds = [103, 80, 200]; // input_2

    // Tensöre dönüştür
    const input1 = tf.tensor1d(userIds, 'int32');
    const input2 = tf.tensor1d(productIds, 'int32');

    // Modeli çalıştır (execute veya predict ile)
    const output = model.execute(
    { 'input_1:0': input1, 'input_2:0': input2 },
    'Identity:0'
    );

    // Tahminleri al
    const scores = await output.array(); // veya output.data()
    console.log('Tahmin edilen skorlar:', scores);
}

// let model, userMap, movieMap, movieReverseMap;

// async function load() {
//     model = await tf.loadGraphModel('tfjs_model/model.json');
//     userMap = await (await fetch('userId_to_code.json')).json();
//     movieMap = await (await fetch('movieId_to_code.json')).json();

//     // Ters eşleme: koddan gerçek movieId’ye
//     movieReverseMap = {};
//     for (let [k, v] of Object.entries(movieMap)) {
//     movieReverseMap[v] = k;
//     }
// }

// async function getRecommendations() {
//     const userId = document.getElementById('userId').value.trim();
//     const userCode = userMap[userId];

//     if (userCode === undefined) {
//     alert("Bu kullanıcı eğitim verisinde yok.");
//     return;
//     }

//     const movieCodes = Object.values(movieMap).map(Number);
//     const userInput = tf.tensor1d(new Array(movieCodes.length).fill(userCode), 'int32');
//     const movieInput = tf.tensor1d(movieCodes, 'int32');

//     const output = await model.execute(
//     { 'input_1:0': userInput, 'input_2:0': movieInput },
//     'Identity:0'
//     );

//     const scores = await output.array();
//     const topN = 5;

//     const results = movieCodes.map((mcode, i) => ({
//     movieId: movieReverseMap[mcode],
//     score: scores[i]
//     }))
//     .sort((a, b) => b.score - a.score)
//     .slice(0, topN);

//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = `<h3>Top ${topN} Öneri</h3><ul>` +
//     results.map(r => `<li>Film ID: ${r.movieId} — Skor: ${r.score.toFixed(2)}</li>`).join('') +
//     '</ul>';
// }

// document.getElementById('recommendBtn').addEventListener('click', getRecommendations);
// load();