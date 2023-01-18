const resources = [
	{
		category: "HTML",
		text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
		sources: [
			{
				title: "W3Schools",
				url: "https://www.w3schools.com/html/",
			},
			{
				title: "HTML Living standard",
				url: "https://html.spec.whatwg.org/multipage/",
			},
			{
				title: "HTML.com Tutorials",
				url: "https://html.com/",
			},
		],
	},
	{
		category: "CSS",
		text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
		sources: [
			{
				title: "W3Schools",
				url: "https://www.w3schools.com/css/",
			},
			{
				title: "W3C HTML & CSS Standards",
				url: "https://www.w3.org/standards/webdesign/htmlcss.html",
			},
			{
				title: "W3C CSS Validator",
				url: "https://jigsaw.w3.org/css-validator/",
			},
			{
				title: "CSS Tricks",
				url: "https://css-tricks.com/",
			},
		],
	},
	{
		category: "JavaScript",
		text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
		sources: [
			{
				title: "W3Schools",
				url: "https://www.w3schools.com/js/",
			},
			{
				title: "MDN Web Docs",
				url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			},
			{
				title: "How to read JavaScript Documentation",
				url: "https://www.youtube.com/watch?v=O3iR-CIufKM",
			},
		],
	},
	{
		category: "React",
		text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
		sources: [
			{
				title: "React documentation",
				url: "https://reactjs.org/docs/getting-started.html",
			},
			{
				title: "W3Schools",
				url: "https://www.w3schools.com/REACT/DEFAULT.ASP",
			},
			{
				title: "How to read JavaScript Documentation",
				url: "https://www.youtube.com/watch?v=O3iR-CIufKM",
			},
		],
	},
	{
		category: "Sanity and headless CMS",
		text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
		sources: [
			{
				title: "Sanity documentation",
				url: "https://www.sanity.io/docs",
			},
			{
				title: "OnCrawl: a beginners guide to headless CMS",
				url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/",
			},
			{
				title: "Section.io: Getting started with Sanity CMS",
				url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/",
			},
		],
	},
];

/************************************************************************************************************/


//Tom variabel for å printe ut til siden
let printPage = "";

//Kode for å hente ut informasjonen til fane 1, HTML.
function printHTML() {
	//Tømme string for innhold
	printPage = "";
	//Filtrere ut kategorien HTML
	const tab1 = resources.filter((cat) => cat.category === "HTML");
	//Henter ut de to øverste katgoriene først, da sources må mappes for seg selv + åpne liste-tag
	tab1.map((cat) => {
		printPage += `
         <h2>${cat.category}</h2>
		<p>${cat.text}</p>
        <ul>
        `;
		//map på andre nivå
		cat.sources.map((links) => {
			printPage += `
            <li><a href="${links.url}">${links.title}</a></li>
            `;
		});
		//avslutter listen
		printPage += `</ul>`;
	});
	//Skriver ut til siden
	document.getElementById("print-area").innerHTML = printPage;
	//Fjerne og legge til aktiv-effekt på gjeldende fane.
	resetActive();
	document.getElementById("htmltab").classList.add("activetab");
}

//Gjebruker koden til å sette opp innholdet i de andre fanene
function printCSS() {
	printPage = "";
	const tab1 = resources.filter((cat) => cat.category === "CSS");
	tab1.map((cat) => {
		printPage += `
         <h2>${cat.category}</h2>
		<p>${cat.text}</p>
        <ul>
        `;
		cat.sources.map((links) => {
			printPage += `
            <li><a href="${links.url}">${links.title}</a></li>
            `;
		});
		printPage += `</ul>`;
	});
	document.getElementById("print-area").innerHTML = printPage;
	resetActive();
	document.getElementById("csstab").classList.add("activetab");
}

function printJS() {
	printPage = "";
	const tab1 = resources.filter((cat) => cat.category === "JavaScript");
	tab1.map((cat) => {
		printPage += `
         <h2>${cat.category}</h2>
		<p>${cat.text}</p>
        <ul>
        `;
		cat.sources.map((links) => {
			printPage += `
            <li><a href="${links.url}">${links.title}</a></li>
            `;
		});
		printPage += `</ul>`;
	});
	document.getElementById("print-area").innerHTML = printPage;
	resetActive();
	document.getElementById("jstab").classList.add("activetab");
}

function printReact() {
	printPage = "";
	const tab1 = resources.filter((cat) => cat.category === "React");
	tab1.map((cat) => {
		printPage += `
         <h2>${cat.category}</h2>
		<p>${cat.text}</p>
        <ul>
        `;
		cat.sources.map((links) => {
			printPage += `
            <li><a href="${links.url}">${links.title}</a></li>
            `;
		});
		printPage += `</ul>`;
	});
	document.getElementById("print-area").innerHTML = printPage;
	resetActive();
	document.getElementById("reacttab").classList.add("activetab");
}
function printSanity() {
	printPage = "";
	const tab1 = resources.filter(
		(cat) => cat.category === "Sanity and headless CMS"
	);
	tab1.map((cat) => {
		printPage += `
         <h2>${cat.category}</h2>
		<p>${cat.text}</p>
        <ul>
        `;
		cat.sources.map((links) => {
			printPage += `
            <li><a href="${links.url}">${links.title}</a></li>
            `;
		});
		printPage += `</ul>`;
	});
	document.getElementById("print-area").innerHTML = printPage;
	resetActive();
	document.getElementById("sanitytab").classList.add("activetab");
}

//Kommando for å laste inn HTML ved innlasting av siden
window.onload = printHTML();

//Funksjon for å fjerne aktiv-klasse på inaktive faner
//Kilde: https://stackoverflow.com/questions/23565551/javascript-add-remove-a-single-class-on-multiple-elements
function resetActive() {
	document
		.querySelectorAll(".activetab")
		.forEach((tab) => tab.classList.remove("activetab"));
}
