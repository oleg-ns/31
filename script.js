var holst = document.querySelector('canvas');
var holst2D = holst.getContext('2d');
holst2D.beginPath();
holst2D.fillRect(0, 0, 800, 800);
for (k=100; k<=800; k+=200)
	for (i=0; i<800; i+=200) {
		holst2D.clearRect(k, i, 100, 100);
	}
for (k=0; k<=800; k+=200)
	for (i=100; i<800; i+=200) {
		holst2D.clearRect(k, i, 100, 100);
	}
holst2D.strokeRect(0, 0, 800, 800);