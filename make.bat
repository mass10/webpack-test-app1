@REM browserslist があれば自動的に参照されます。
@SET BROWSERSLIST_CONFIG=browserslist
@SET BROWSERSLIST_CONFIG=

@CALL cargo fmt
@CALL cargo run
