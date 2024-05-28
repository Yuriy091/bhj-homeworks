document.addEventListener('DOMContentLoaded', () => {
    const progress = document.getElementById('progress');
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        upload(form.elements.file.files[0]);
    });

    function upload(file) {
        const xhr = new XMLHttpRequest();

        xhr.open('post', 'https://students.netoservices.ru/nestjs-backend/upload', true);

        xhr.upload.onprogress = updateProgress;

        xhr.send(file);
    }

    function updateProgress(event) {
        progress.value = event.loaded / event.total;
    }
});
