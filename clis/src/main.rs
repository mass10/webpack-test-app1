fn execute_command(command: &str, args: &[&str]) -> Result<(), Box<dyn std::error::Error>> {
	let result = std::process::Command::new("cmd.exe")
		.arg("/C")
		.arg(command)
		.args(args)
		.spawn()?
		.wait()?;

	if !result.success() {
		let exit_code = result.code().unwrap_or(0);
		println!("> {} {}", command, args.join(" "));
		println!("FAILED ({})", exit_code);
		std::process::exit(1);
	}

	return Ok(());
}

fn delete_file(path: &str) -> Result<(), Box<dyn std::error::Error>> {
	if std::path::Path::new(path).exists() {
		std::fs::remove_file(path)?;
	}
	return Ok(());
}

fn run() -> Result<(), Box<dyn std::error::Error>> {
	delete_file("dist/bundle.js")?;

	execute_command("yarn", &["install"])?;
	execute_command("yarn", &["tsc", "--build", "tsconfig.json"])?;
	execute_command("yarn", &["webpack", "--config", "webpack.config.js"])?;
	execute_command("yarn", &["es-check", "es5", "dist/bundle.js"])?;

	return Ok(());
}

fn main() {
	println!("### START ###");

	let result = run();
	if result.is_err() {
		println!("[ERROR] {}", result.unwrap_err());
		return;
	}

	println!("--- END ---");
}
