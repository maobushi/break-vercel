"use client";

async function fetchData() {
	const res = await fetch("/api/naka");
	console.log(res);
}

async function fetchJson() {
	const res = await fetch("/api/fetchjson");
	const data = await res.json();
	console.log(data);
}

async function deleteJson() {
	const res = await fetch("/api/deletejson", {
		method: "DELETE",
	});
	const data = await res.json();
	console.log(data);
}

export default function Home() {
	return (
		<div>
			<h1>Hello World</h1>
			<button onClick={() => fetchData()}>Click me</button>
			<button onClick={() => fetchJson()}>Click me</button>
			<button onClick={() => deleteJson()}>Click me</button>
		</div>
	);
}
