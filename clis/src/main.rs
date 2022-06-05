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

fn run() -> Result<(), Box<dyn std::error::Error>> {
    execute_command("yarn", &[])?;
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
