
var remain = 0
for (n = 1; n <= 6; n++) {
 	remain = n % 2
 	switch (remain) {
 		case 0: console.log(n + ' => Even'); break
 		default: console.log(n + ' => Odd')
 	}
}
